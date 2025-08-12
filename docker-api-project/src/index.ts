import express from 'express';
import { fetchServiceNowData } from './serviceNow/api';
import { createDataTable } from './datatables/list';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/cmdb', async (req, res) => {
    try {
        const data = await fetchServiceNowData();
        const dataTable = createDataTable(data);
        res.json(dataTable);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from ServiceNOW' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});