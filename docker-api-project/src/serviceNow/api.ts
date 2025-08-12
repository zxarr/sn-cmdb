import axios from 'axios';
import { CMDBEntry } from '../types/cmdb';

const SERVICE_NOW_API_URL = 'https://your-instance.service-now.com/api/now/table/cmdb_ci';

export const fetchServiceNowData = async (): Promise<CMDBEntry[]> => {
    try {
        const response = await axios.get(SERVICE_NOW_API_URL, {
            headers: {
                'Authorization': `Basic ${Buffer.from('username:password').toString('base64')}`,
                'Accept': 'application/json'
            }
        });

        const data = response.data.result.map((item: any) => ({
            hostName: item.name,
            operatingSystem: item.os,
            location: item.location,
            ipAddress: item.ip_address,
            description: item.description
        }));

        return data;
    } catch (error) {
        console.error('Error fetching data from ServiceNOW:', error);
        throw error;
    }
};