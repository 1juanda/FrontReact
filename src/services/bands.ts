import { Band } from '../types/Band';

const API_BASE_URL = 'http://localhost:8080/api';
async function fetchBands(): Promise<Band[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/bands`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Band[] = await response.json();
    return data;
  } catch (error: any) {
    console.error('Error fetching bands:', error);
    throw error;
  }
}

export { fetchBands };