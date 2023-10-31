const express = require("express")

const router = express.Router()

const {incomeList, transactionsData, reviews, vendorEquipment} = require("../db/db")

router.get(`/income`, (req, res) => {
    res.status(200).json(incomeList)
})

router.get(`/transactions`, (req, res) => {
    res.status(200).json(transactionsData)
})

router.get(`/reviews`, (req, res) => {
    res.status(200).json(reviews)
})

router.get(`/equipment`, (req, res) => {
    res.status(200).json(vendorEquipment)
})

module.exports = router