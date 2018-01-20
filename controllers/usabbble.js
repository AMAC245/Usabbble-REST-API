const mongoose = require('mongoose');
const Shot = require('../models/shot');


const getUsabbbleShots = (req, res, next) => {
  Shot.find().where('ab_compatible').equals('true')
    .then(shots => res.status(200).json(shots))
    .catch(err => res.status(500).json({ err }))
}


const getUsabbbleShot = (req, res, next) => {
  let shot = req.params.shotId
  Shot.findById(shot)
    .then(shot => res.status(200).json(shot))
    .catch(err => res.status(500).json({ err }))
}

const uploadUsabbbleShot = (req, res, next) => {
  const shot = new Shot({ 
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    ab_compatible: true,
    variantId: req.body.variantId,
    tags: req.body.tags,
    votes: 0
  });

  shot.save((error) => {
    if(error) res.status(500).json(error)
    else res.status(200).json(shot)
  })   
}

module.exports = {
  getUsabbbleShots,
  getUsabbbleShot,
  uploadUsabbbleShot
}