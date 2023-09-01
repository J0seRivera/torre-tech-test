const express = require('express');
const router = express.Router();

router.get('/search', async (req, res) => {
  const username = req.query.username;

  try {
    const response = await axios.get(`${apiUrl}${username}`);
    const userData = response.data;
    console.log(response.data)
    res.json(userData);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error});
  }
});

module.exports = router;