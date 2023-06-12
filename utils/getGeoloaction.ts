import axios from 'axios';

interface GeolocationResponse {
  country: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  log: number;
}

export async function convertIPtoLocation(ipAddress: string): Promise<string> {
  try {
    const response = await axios.get<GeolocationResponse>(
      `http://ip-api.com/json/${ipAddress}`
    );
    const { country, regionName, city } = response.data;
    return `${city},${regionName},${country}`;
  } catch (error) {
    console.error('Error retrieving geolocation:', error);
    return 'Unknown Location';
  }
}
