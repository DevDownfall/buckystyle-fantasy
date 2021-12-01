import express from 'express';
const router = express.Router();

// Stats Routes
router.use('/stats/user', require('./stats/user'))



export = router;
