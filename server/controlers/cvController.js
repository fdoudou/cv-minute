const {getCVModel, getCVsModel, getPublicCVsModel, createCVModel, updateCVModel, deleteCVModel} = require("../models/CV.js");

const getCV = (req, res) => {
    const cv = getCVModel(req.params.id);
    if (!cv) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(cv);
    }
}

const getCVs = (req, res) => {
    const cv = getCVsModel(req.params.userId);
    if (!cv) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(cv);
    }
}

const getPublicCVs = (req, res) => {
    const cv = getPublicCVsModel(req.params.userId);
    if (!cv) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(cv);
    }
}

const createCV = (req, res) => {
    const cv = createCVModel(req.params.cv_name, req.params.is_private, req.params.template, req.params.accent_color, req.params.professional_summary);
    if (!cv) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(cv);
    }
}

const updateCV = (req, res) => {
    const cv = updateCVModel(req.params.id, req.params.is_private, req.params.template, req.params.accent_color, req.params.professional_summary);
    if (!cv) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(cv);
    }
}

const deleteCV = (req, res) => {
    const cv = deleteCVModel(req.params.id);
    if (!cv) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(cv);
    }
}

module.exports = {getCV, getCVs, getPublicCVs, createCV, updateCV, deleteCV}