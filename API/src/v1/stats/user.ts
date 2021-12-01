import express from 'express';
const router = express.Router();
import { execute } from '../../utilities/database/mysql'

router.get('/', async (req, res) => {
    res.send({ error: false, msg: 'Success', stats: await execute(`SELECT * FROM Players`)});
});

export = router;
