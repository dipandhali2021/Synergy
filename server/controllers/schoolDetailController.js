import { validationResult } from 'express-validator';
import mongoose from 'mongoose';
import SchoolDetail from '../models/SchoolDetail.js';
import axios from 'axios';
import School from '../models/School.js';

export const createSchoolDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const existingSchool = await SchoolDetail.findById(id);
    if (existingSchool) {
      return res.status(400).json({ message: 'School detail already exists' });
    }

    const apiUrl = 'http://127.0.0.1:5000/predict_school_rating'; // Replace with your Flask API URL

    const dataToSend = {
      'Lowest Class': req.body.lowestClass,
      'Highest Class': req.body.highestClass,
      'Boys Washrooms': req.body.boysWashrooms,
      'Girls Washrooms': req.body.girlsWashrooms,
      'Boundary Wall': req.body.hasBoundaryWall,
      'Library Available': req.body.libraryAvailable,
      'Drinking Water Available': req.body.drinkingWaterAvailable,
      'Playground Available': req.body.playgroundAvailable,
      'Electricity Availability': req.body.electricityAvailability,
      'Kitchens for Mid-Day Meal': req.body.kitchensForMidDayMeal,
      'Eco-Friendly Construction (Rainwater Harvesting, Solar)':
        req.body.ecoFriendlyConstruction,
      'Safety Standards Compliance (Earthquake, Fire)':
        req.body.safetyStandardsCompliance,
      'Universal Access (Distance from habitation)': req.body.universalAccess,
      'Inclusive Environment (Ramp, Barrier-Free)':
        req.body.inclusiveEnvironment,
      'Transportation for Remote Areas': req.body.transportationForRemoteAreas,
      'Community Participation': req.body.communityParticipation,
      'Qualified Teachers (RTE Act)': req.body.qualifiedAndTrainedTeachers,
      'ICT Integration (Computer Labs)': req.body.computerLabAvailable,
      'Vocational Training Availability': req.body.computerLabAvailable,
      'Active School Management Committee (SMC)':
        req.body.activeSchoolManagementCommittee,
      'Adequate Facilities': req.body.computerLabAvailable,
      'Annual Maintenance (School Grants)': req.body.grant,
      'School Mapping (Geographic/Community Planning)': req.body.schoolMapping,
      'Student Tracking (SDMIS)': req.body.studentTracking,
      'Free and Compulsory Education': req.body.freeAndCompulsoryEducation,
      'Non-Discrimination': req.body.nonDiscrimination,
      'No Punitive Practices': req.body.noPunitivePractices,
      'Timely Fund Utilization': req.body.timelyFundUtilization,
      'Funds Audited Annually': req.body.fundsAuditedAnnually,
      'Resource Utilization Efficiency': req.body.resourceUtilizationEfficiency,
      'Provision of Stipends for CWSN Girls':
        req.body.provisionOfStipendsForCWSNGirls,
      'KGBV Upgraded': req.body.KGBVUpgraded,
      'Integration with Anganwadi Centers':
        req.body.integrationWithAnganwadiCenters,
      'Safety Standards': req.body.safetyStandards,
      'Support for CWSN': req.body.supportForCWSN,
      'Community Engagement': req.body.communityEngagement,
      'Co-location with Anganwadi Centers':
        req.body.coLocationWithAnganwadiCenters,
      'Child Protection Policies': req.body.childProtectionPolicies,
      'Curriculum Implementation': req.body.curriculumImplementation,
      'Qualified and Trained Teachers': req.body.qualifiedAndTrainedTeachers,
      'Supportive Learning Environment': req.body.supportiveLearningEnvironment,
      'Governance and Management': req.body.governanceAndManagement,
      'Monitoring and Evaluation Practices':
        req.body.monitoringAndEvaluationPractices,
      'Management Structure': req.body.managementStructure,
      'Infrastructure Quality': req.body.infrastructureQuality,
      'Support Systems': req.body.supportSystems,
      'Financial Management': req.body.financialManagement,
      'Positive Educational Outcomes': req.body.positiveEducationalOutcomes,
      'Research and Development Engagement':
        req.body.researchAndDevelopmentEngagement,
      'Student Learning Outcomes': req.body.studentLearningOutcomes,
      'Data Management and Reporting': req.body.dataManagementAndReporting,
      'Total Students': req.body.totalStudents,
      'Total Teachers': req.body.totalTeachers,
      'Total Classrooms': req.body.resourceDistribution[0].classrooms.current,
    };

    const flaskResponse = await axios.post(apiUrl, dataToSend);
    const { predicted_rating, suggestions } = flaskResponse.data;

    // Add the predicted rating to the request body
    req.body.qualityScore = predicted_rating;

    const newSchoolDetail = new SchoolDetail({ _id: id, ...req.body });
    const savedSchool = await newSchoolDetail.save();

    // Determine performance band based on predicted rating
    let performanceBand;
    if (predicted_rating >= 85) {
      performanceBand = 'Excellent';
    } else if (predicted_rating >= 70) {
      performanceBand = 'Good';
    } else if (predicted_rating >= 50) {
      performanceBand = 'Average';
    } else {
      performanceBand = 'Poor';
    }

    const facilities = [];
    if (savedSchool.libraryAvailable) facilities.push('Library');
    if (savedSchool.computerLabAvailable) facilities.push('Computer Lab');
    if (savedSchool.drinkingWaterAvailable) facilities.push('Drinking Water');
    if (savedSchool.electricityAvailability) facilities.push('Electricity');
    if (savedSchool.playgroundAvailable) facilities.push('Playground');

    const newSchool = new School({
      schoolId: savedSchool._id,
      name: savedSchool.schoolName,
      state: savedSchool.state,
      district: savedSchool.district,
      currentStructure: predicted_rating < 75 ? 'Odd Structure' : 'Standard Structure',
      recommendedStructure: 'Standard Structure',
      transitionStatus: 'pending',
      performanceBand: performanceBand,
      qualityScore: predicted_rating,
      studentCount: savedSchool.totalStudents,
      teacherCount: savedSchool.totalTeachers,
      facilities: facilities,
      type: savedSchool.schoolManagement === '1-Govt' ? 'government' : 
            savedSchool.schoolManagement === '3-Local Body' ? 'aided' : 'private',
      coordinates: {
        lat: savedSchool.latitude,
        lng: savedSchool.longitude
      }
    });

    const savedSchoolRating = await newSchool.save();

    res.status(201).json({
      message: 'School details added successfully!',
      data: savedSchool,
      school_card: savedSchoolRating,
      predicted_rating,
      suggestions,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({
        message: 'Validation error',
        errors: error.errors,
      });
    }

    if (error.response && error.response.data) {
      console.error('Error from Flask API:', error.response.data);
    }

    console.error('Error adding school details:', error.message);
    res.status(500).json({
      message: 'An error occurred while adding school details.',
      error: error.message,
    });
  }
};

export const getSchoolDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const schoolDetail = await SchoolDetail.findById(id);

    if (!schoolDetail) {
      return res.status(404).json({ message: 'School detail not found' });
    }

    res.status(200).json(schoolDetail);
  } catch (error) {
    console.error('Error fetching school detail:', error.message);
    res.status(500).json({
      message: 'An error occurred while fetching school detail.',
      error: error.message,
    });
  }
};


export const searchSchoolBySchoolID = async (req, res) => {
  try {
    const { schoolID } = req.params;
    const school = await SchoolDetail.find({ schoolID });

    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    res.status(200).json(school);
  } catch (error) {
    console.error('Error searching school by school ID:', error.message);
    res.status(500).json({
      message: 'An error occurred while searching for the school.',
      error: error.message,
    });
  }
};
export const getAllSchools = async (req, res) => {
  try {
    const schools = await SchoolDetail.find();
    res.status(200).json(schools);
  } catch (error) {
    console.error('Error fetching all schools:', error.message);
    res.status(500).json({
      message: 'An error occurred while fetching all schools.',
      error: error.message,
    });
  }
};