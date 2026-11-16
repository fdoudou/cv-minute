const express = require('express');
const router = express.Router();
const CV = require('../models/CV');

// Save or Update CV
router.post('/save', async (themeReq, themeRes) => {
  const { cvId, userId, ...cvData } = themeReq.body;
  try {
    let cv;
    if (cvId) {
      cv = await CV.findByIdAndUpdate(cvId, cvData, { new: true });
    } else {
      cv = new CV({ userId, ...cvData });
      await cv.save();
    }
    themeRes.status(200).json({ success: true, data: cv });
  } catch (err) {
    themeRes.status(500).json({ success: false, error: err.message });
  }
});

// Fetch Single CV
router.get('/:id', async (req, res) => {
  try {
    const cv = await CV.findById(req.params.id);
    if (!cv) return res.status(404).json({ error: 'CV not found' });
    res.json(cv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
