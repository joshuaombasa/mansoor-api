const express = require("express")

const router = express.Router()


const { equipment} = require("../db/db")

router.get(`/`, (req, res) => {
    res.status(200).json(equipment)
})

router.get(`/:id`, (req, res) => {
    const { id } = req.params
    const selectedEquipment = equipment.find(item => item.id === id)
    res.status(200).json(selectedEquipment)
})

module.exports = router