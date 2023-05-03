const express = require("express");

const { getalldiscussion, getdiscussion, creatediscussion, deletediscussion, updatediscussion } = require("../controllers/discussionControllers");

const router = express.Router();

router.get("/", getalldiscussion);
router.get("/:id", getdiscussion);
router.post("/create", creatediscussion);
router.post("/delete/:id",deletediscussion );
router.post("/update/:id", updatediscussion);

module.exports = router;