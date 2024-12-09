import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/resource-plan';

export interface BudgetOverview {
  total_budget: number;
  utilization_rate: number;
  spent_budget: number;
  savings: number;
}

export interface AllocationData {
  category: string;
  allocated: number;
  utilized: number;
}

export interface FundingSource {
  name: string;
  value: number;
}

export const financialService = {
  getBudgetOverview: async (): Promise<BudgetOverview> => {
    const { data } = await axios.get(`${API_BASE_URL}/budget-overview`);
    return data;
  },

  getAllocationUtilization: async (): Promise<AllocationData[]> => {
    const { data } = await axios.get(`${API_BASE_URL}/allocation-utilization`);
    return data;
  },

  getFundingSources: async (): Promise<FundingSource[]> => {
    const { data } = await axios.get(`${API_BASE_URL}/funding-sources`);
    return data;
  }
};