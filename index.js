

const express = require('express');
const axios = require('axios');

const app = express();
const port = 8000;
const cors = require('cors')
app.use(cors())
app.get('/todos', async (req, res) => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log('API Response:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from external API:', error); 
    res.status(500).json({ error: 'Failed to fetch data from external API' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
