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
    const cv = createCVModel(req.body.cv_name, req.body.is_private, req.body.template, req.body.accent_color, req.body.professional_summary);
    if (!cv) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(cv);
    }
}

const updateCV = (req, res) => {
    const cv = updateCVModel(req.body.id, req.body.is_private, req.body.template, req.body.accent_color, req.body.professional_summary);
    if (!cv) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(cv);
    }
}

const deleteCV = (req, res) => {
    const cv = deleteCVModel(req.body.id);
    if (!cv) {
        res.status(400).send('Not found.')
    } else {
        res.status(200).json(cv);
    }
}

module.exports = {getCV, getCVs, getPublicCVs, createCV, updateCV, deleteCV}