import SchoolDetail from '../models/SchoolDetail.js';
import { validationResult } from 'express-validator';

// Get basic info
export const getBasicInfo = async (req, res) => {
  try {
    const school = await SchoolDetail.findById(req.params.id).select('schoolName state district block ruralUrban cluster villageCity pincode schoolCategory schoolManagement mediumOfInstruction schoolType lowestClass highestClass totalTeachers totalClassrooms totalStudents');
    
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get compliance checklist
export const getComplianceChecklist = async (req, res) => {
  try {
    const school = await SchoolDetail.findById(req.params.id).select('separateRoomForHM boysWashrooms girlsWashrooms boundaryWall libraryAvailable drinkingWaterAvailable playgroundAvailable electricityAvailability kitchensForMidDayMeal ecoFriendlyConstruction safetyStandardsCompliance universalAccess inclusiveEnvironment transportationForRemoteAreas communityParticipation qualifiedTeachersRTEAct ICTIntegration vocationalTrainingAvailability');
    
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get facilities overview
export const getFacilitiesOverview = async (req, res) => {
  try {
    const school = await SchoolDetail.findById(req.params.id).select('availableFacilities digitalEquipment');
    
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get grants compliance
export const getGrantsCompliance = async (req, res) => {
  try {
    const school = await SchoolDetail.findById(req.params.id).select('grantUtilization complianceVisits upcomingComplianceRequirements timelyFundUtilization fundsAuditedAnnually resourceUtilizationEfficiency');
    
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get infrastructure overview
export const getInfrastructureOverview = async (req, res) => {
  try {
    const school = await SchoolDetail.findById(req.params.id).select('classroomCondition resourceDistribution infrastructureQuality');
    
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get management info
export const getManagementInfo = async (req, res) => {
  try {
    const school = await SchoolDetail.findById(req.params.id).select('governanceAndManagement monitoringAndEvaluationPractices managementStructure supportSystems financialManagement dataManagementAndReporting');
    
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get performance overview
export const getPerformanceOverview = async (req, res) => {
  try {
    const school = await SchoolDetail.findById(req.params.id).select('performanceOverview performanceTrends studentLearningOutcomes positiveEducationalOutcomes');
    
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get student teacher data
export const getStudentTeacherData = async (req, res) => {
  try {
    const school = await SchoolDetail.findById(req.params.id).select('totalStudents totalTeachers studentDemographics teacherQualifications');
    
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get complete school details
export const getSchoolDetails = async (req, res) => {
  try {
    const school = await SchoolDetail.findById(req.params.id);
    
    if (!school) {
      return res.status(404).json({ message: 'School not found' });
    }

    res.json(school);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSchoolDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const existingSchool = await SchoolDetail.findById(id);
    if (existingSchool) {
      return res.status(400).json({ message: 'School detail already exists' });
    }

    const newSchoolDetail = new SchoolDetail({ _id: id, ...req.body });
    await newSchoolDetail.save();
    res.status(201).json(newSchoolDetail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};