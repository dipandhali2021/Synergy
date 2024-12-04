import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
} from 'recharts';
import {
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Download,
  School,
  Users,
  Building2,
  BookOpen,
} from 'lucide-react';
import { AnalysisFormData } from '../../types/analysis';
import { generatePDF } from '../../utils/pdfGenerator';

interface AIAnalysisResultProps {
  data: AnalysisFormData;
}

const COLORS = ['#4f46e5', '#10b981', '#f59e0b', '#ef4444'];

export function AIAnalysisResult() {
  const dataString = localStorage.getItem('analysisFormData');
  const data: AnalysisFormData = dataString ? JSON.parse(dataString) : null;
  const analysisResult = data ? analyzeSchoolData(data) : null;

  const handleDownloadReport = () => {
    generatePDF({ ...data, analysis: analysisResult });
  };

  return (
    <div className="space-y-8 bg-gray-50 p-8 rounded-xl">
      {/* Header Section */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              School Analysis Report
            </h1>
            <p className="text-gray-600 mt-2">UDISE Code: {data.udiseCode}</p>
          </div>
          <button
            onClick={handleDownloadReport}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
          >
            <Download className="h-5 w-5" />
            Download Report
          </button>
        </div>

        {/* Classification Status */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            analysisResult?.isStandardStructure
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          <School className="h-5 w-5" />
          {analysisResult?.isStandardStructure
            ? 'Standard Structure'
            : 'Odd Structure'}
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Compliance Score"
          value={`${analysisResult?.complianceScore}%`}
          icon={CheckCircle}
          trend={
            (analysisResult?.complianceScore ?? 0) > 75 ? 'positive' : 'warning'
          }
        />
        <MetricCard
          title="Student-Teacher Ratio"
          value={`1:${analysisResult?.studentTeacherRatio}`}
          icon={Users}
          trend={
            (analysisResult?.studentTeacherRatio ?? 0) <= 30
              ? 'positive'
              : 'negative'
          }
        />
        <MetricCard
          title="Infrastructure Score"
          value={`${analysisResult?.infrastructureScore}%`}
          icon={Building2}
          trend={
            (analysisResult?.infrastructureScore ?? 0) > 70
              ? 'positive'
              : 'warning'
          }
        />
      </div>

      {/* Detailed Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Enrollment Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Student Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={analysisResult?.studentDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} (${(percent * 100).toFixed(0)}%)`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {analysisResult?.studentDistribution.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Compliance Progress */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Compliance Progress</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="10%"
                outerRadius="80%"
                barSize={10}
                data={analysisResult?.complianceMetrics}
              >
                <RadialBar
                  min={0}
                  label={{ position: 'insideStart', fill: '#fff' }}
                  background
                  dataKey="value"
                />
                <Legend />
                <Tooltip />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-semibold mb-6">Recommendations</h3>
        <div className="space-y-4">
          {analysisResult?.recommendations.map((rec, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg ${
                rec.priority === 'critical'
                  ? 'bg-red-50 border-l-4 border-red-500'
                  : rec.priority === 'important'
                  ? 'bg-yellow-50 border-l-4 border-yellow-500'
                  : 'bg-blue-50 border-l-4 border-blue-500'
              }`}
            >
              <div className="flex items-start gap-3">
                <AlertTriangle
                  className={`h-5 w-5 mt-0.5 ${
                    rec.priority === 'critical'
                      ? 'text-red-500'
                      : rec.priority === 'important'
                      ? 'text-yellow-500'
                      : 'text-blue-500'
                  }`}
                />
                <div>
                  <h4 className="font-semibold">{rec.title}</h4>
                  <p className="text-gray-600 mt-1">{rec.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  trend: 'positive' | 'negative' | 'warning';
}

function MetricCard({ title, value, icon: Icon, trend }: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <Icon
          className={`h-5 w-5 ${
            trend === 'positive'
              ? 'text-green-500'
              : trend === 'negative'
              ? 'text-red-500'
              : 'text-yellow-500'
          }`}
        />
        <h3 className="font-semibold text-gray-700">{title}</h3>
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}

function analyzeSchoolData(data: AnalysisFormData) {
  // Calculate total students
  const totalStudents =
    data.generalCategoryTotal +
    data.scCategoryTotal +
    data.stCategoryTotal +
    data.obcCategoryTotal;

  // Calculate student-teacher ratio
  const studentTeacherRatio = Math.round(totalStudents / data.totalTeachers);

  // Calculate infrastructure score
  const infrastructureChecks = [
    data.hasBoundaryWall,
    data.hasRamps,
    data.hasPlayground,
    data.hasDrinkingWater,
  ];
  const infrastructureScore = Math.round(
    (infrastructureChecks.filter(Boolean).length /
      infrastructureChecks.length) *
      100
  );

  // Determine if structure is standard
  const isStandardStructure = determineIfStandard(data);

  // Calculate compliance score
  const complianceScore = calculateComplianceScore(data);

  return {
    isStandardStructure,
    studentTeacherRatio,
    infrastructureScore,
    complianceScore,
    studentDistribution: [
      { name: 'General', value: data.generalCategoryTotal },
      { name: 'SC', value: data.scCategoryTotal },
      { name: 'ST', value: data.stCategoryTotal },
      { name: 'OBC', value: data.obcCategoryTotal },
    ],
    complianceMetrics: [
      { name: 'Infrastructure', value: infrastructureScore },
      {
        name: 'Teacher Ratio',
        value:
          studentTeacherRatio <= 30 ? 100 : (30 / studentTeacherRatio) * 100,
      },
      { name: 'Documentation', value: 100 },
      { name: 'Facilities', value: infrastructureScore },
    ],
    recommendations: generateRecommendations(data),
  };
}

function determineIfStandard(data: AnalysisFormData): boolean {
  // Implement logic to determine if school structure is standard
  const standardConfigurations = {
    Primary: [1, 2, 3, 4, 5],
    'Upper Primary': [1, 2, 3, 4, 5, 6, 7, 8],
    Secondary: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'Higher Secondary': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  };

  // For demo purposes, return based on school category
  return data.schoolCategory.includes('standard');
}

function calculateComplianceScore(data: AnalysisFormData): number {
  let score = 0;
  const weights = {
    infrastructure: 0.3,
    teacherRatio: 0.3,
    facilities: 0.2,
    documentation: 0.2,
  };

  // Infrastructure score
  const infrastructureScore =
    [
      data.hasBoundaryWall,
      data.hasRamps,
      data.hasPlayground,
      data.hasDrinkingWater,
    ].filter(Boolean).length / 4;

  // Teacher ratio score
  const studentTeacherRatio =
    (data.generalCategoryTotal +
      data.scCategoryTotal +
      data.stCategoryTotal +
      data.obcCategoryTotal) /
    data.totalTeachers;
  const teacherRatioScore =
    studentTeacherRatio <= 30 ? 1 : 30 / studentTeacherRatio;

  score += infrastructureScore * weights.infrastructure * 100;
  score += teacherRatioScore * weights.teacherRatio * 100;
  score += 0.8 * weights.facilities * 100; // Assumed facilities score
  score += 1 * weights.documentation * 100; // Assumed documentation score

  return Math.round(score);
}

function generateRecommendations(data: AnalysisFormData) {
  const recommendations = [];

  // Infrastructure recommendations
  if (!data.hasBoundaryWall) {
    recommendations.push({
      priority: 'critical',
      title: 'Install Boundary Wall',
      description: 'Essential for ensuring student safety and security.',
    });
  }

  if (!data.hasRamps) {
    recommendations.push({
      priority: 'important',
      title: 'Install Access Ramps',
      description: 'Required for ensuring accessibility for all students.',
    });
  }

  // Teacher-student ratio recommendations
  const totalStudents =
    data.generalCategoryTotal +
    data.scCategoryTotal +
    data.stCategoryTotal +
    data.obcCategoryTotal;
  const ratio = totalStudents / data.totalTeachers;

  if (ratio > 30) {
    recommendations.push({
      priority: 'critical',
      title: 'Improve Teacher-Student Ratio',
      description: `Current ratio of 1:${Math.round(
        ratio
      )} exceeds recommended limit of 1:30. Consider hiring additional teachers.`,
    });
  }

  // Facilities recommendations
  if (!data.hasPlayground) {
    recommendations.push({
      priority: 'important',
      title: 'Add Playground Facilities',
      description: 'Essential for physical education and student recreation.',
    });
  }

  if (!data.hasDrinkingWater) {
    recommendations.push({
      priority: 'critical',
      title: 'Ensure Drinking Water Availability',
      description:
        'Functional drinking water facilities are mandatory for student health and safety.',
    });
  }

  return recommendations;
}
