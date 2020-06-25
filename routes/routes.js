const { Router } = require('express');
const router = Router();

const User = require('../models/user');


router.get('/getusers', async (req, res) => {
    try {
        await User.find({}, (err, item) => {
            res.status(200).json(item);

        })
    } catch (e) {
        res.status(500).json({message: "Что-то пошло не так."});
        console.log(e);
    }
})

router.get('/getuserbyid', async (req, res) => {
    try {
        await User.find({"id": req.query.id}, (err, item) => {
            res.status(200).json(item);

        })
    } catch (e) {
        res.status(500).json({message: "Что-то пошло не так."});
        console.log(e);
    }
})

module.exports = router;