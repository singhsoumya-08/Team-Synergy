const express = require('express');
const router  = express.Router();
const multer  = require('multer');
const path    = require('path');
const Member  = require('../models/Member');

// configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename:    (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const fn  = Date.now() + '-' + file.fieldname + ext;
    cb(null, fn);
  }
});
const upload = multer({ storage });

// POST /api/members
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { name, role, email, contact } = req.body;
    const image = req.file ? req.file.filename : null;
    const member = new Member({ name, role, email, contact, image });
    await member.save();
    res.status(201).json(member);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/members
router.get('/', async (req, res) => {
  const members = await Member.find().sort({ createdAt: -1 });
  res.json(members);
});

// GET /api/members/:id
router.get('/:id', async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ error: 'Not found' });
    res.json(member);
  } catch {
    res.status(400).json({ error: 'Invalid ID' });
  }
});

module.exports = router;
