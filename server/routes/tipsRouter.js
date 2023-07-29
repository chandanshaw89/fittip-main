const express = require("express");
const router = express.Router();
const FitnessTip = require("../models/fitnessTips");

//to get all tips

router.get("/get-tips", async (req, res) => {
  try {
    const fitnessTips = await FitnessTip.find();
    res.status(200).json({ tips: fitnessTips });
  } catch (error) {
    console.error("Error retrieving fitness tips:", error);
    res.status(201).json({ error: "Failed to retrieve fitness tips" });
  }
});

// to get specific tip using id

router.get("/get-tips/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const fitnessTip = await FitnessTip.findById(id);
    res.status(200).json({ Tip: fitnessTip });
  } catch (error) {
    console.error("Error Getting fitness tip:", error);
    res.status(201).json({ error: "Failed to get fitness tip" });
  }
});

router.post("/add-tips", async (req, res) => {
  try {
    const { title, description } = req.body;
    const fitnessTip = await FitnessTip.create({ title, description });
    res.status(200).json({ msg: "Tip added Successfully" });
  } catch (error) {
    console.error("Error creating fitness tip:", error);
    res.status(201).json({ error: "Failed to create fitness tip" });
  }
});

router.put("/update-tip/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const fitnessTip = await FitnessTip.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    res.status(200).json({ Tip: fitnessTip });
  } catch (error) {
    console.error("Error updating fitness tip:", error);
    res.status(201).json({ error: "Failed to update fitness tip" });
  }
});

router.delete("/delete-tip/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const fitnessTip = await FitnessTip.findByIdAndDelete(id);
    res.status(200).json({ msg: "Deleted Tip Successfully" });
  } catch (error) {
    console.error("Error deleting fitness tip:", error);
    res.status(201).json({ error: "Failed to delete fitness tip" });
  }
});

router.get("/next-tip", async (req, res) => {
  try {
    const fitnessTips = await FitnessTip.find();
    const randomIndex = Math.floor(Math.random() * fitnessTips.length);
    return res.status(200).json({ tip: fitnessTips[randomIndex] });
  } catch (error) {
    res.status(201).json({ error: "Failed to get fitness tip" });
  }
});

module.exports = router;
