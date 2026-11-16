const mongoose = require('mongoose');

const CVSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, default: 'Untitled CV' },
  personalInfo: {
    fullName: String,
    email: String,
    phone: String,
    location: String,
    website: String,
    summary: String
  },
  experience: [{
    company: String,
    position: String,
    startDate: String,
    endDate: String,
    description: String
  }],
  education: [{
    institution: String,
    degree: String,
    startDate: String,
    endDate: String
  }],
  skills: [String],
  themeColor: { type: String, default: '#3b82f6' }
}, { timestamps: true });

module.exports = mongoose.model('CV', CVSchema);
