const express = require('express');

const Resources = require('./resources-model');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const resources = await Resources.getResources();

      res.json(resources);
    } catch (err) {
      res.status(500).json({ message: 'Failed to get schemes' });
    }
  });

router.post('/', async (req, res) => {
    const resourceData = req.body;
  
    try {
      const resource = await Resources.addResources(resourceData);
      res.status(201).json(resource);
    } catch (err) {
      res.status(500).json({ message: 'Failed to create new scheme' });
    }
  });

module.exports = router;