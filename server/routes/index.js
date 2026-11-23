const express = require('express');
const router = express.Router();

const {getUser, createUser, updateUser, deleteUser, test} = require("../controlers/userController");
const {getCV, getCVs, getPublicCVs, createCV, updateCV, deleteCV} = require("../controlers/CVController");

// Create a user
router.post('/user', createUser);
// Return a user
router.get('/user/:id', getUser);
// Remove a user
router.delete('/user/:id', deleteUser);
// Update user
router.put('/user', updateUser);
// Get a cv
router.get('/resume/:id', getCV);
// Get all cv
router.get('/resumes/:id', getCVs);
// Get all public cv
router.get('/resumes-public/:id', getPublicCVs);
// Create a cv
router.post('/resume', createCV);
// Remove a cv
router.delete('/user', deleteCV);
// Update cv
router.put('/user', updateCV);

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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CV-Minute Express API' });
});

module.exports = router;
