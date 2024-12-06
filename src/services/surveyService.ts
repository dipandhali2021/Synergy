import axios from 'axios';
import { Survey, SurveyResponse, SurveyAnalytics } from '../types/engagement';

const API_URL = 'http://localhost:5000/api';

// Helper to get token from localStorage
const getToken = () => localStorage.getItem('token');

export const surveyService = {
  // Get all surveys with optional filters
  getSurveys: async (params?: { page?: number; status?: string; targetAudience?: string }) => {
    try {
      const token = getToken();
      const response = await axios.get(`${API_URL}/surveys`, {
        params,
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get a specific survey by ID
  getSurvey: async (id: string) => {
    try {
      const token = getToken();
      const response = await axios.get(`${API_URL}/surveys/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Submit survey response
  submitResponse: async (surveyId: string, answers: Array<{ question: string; answer: any }>) => {
    try {
      const token = getToken();
      const response = await axios.post(
        `${API_URL}/surveys/${surveyId}/responses`,
        { answers },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get survey analytics
  getSurveyAnalytics: async (surveyId: string) => {
    try {
      const token = getToken();
      const response = await axios.get(`${API_URL}/surveys/${surveyId}/analytics`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
