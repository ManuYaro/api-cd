const express = require("express")
const { getAllCompactDiscs, deleteCompactDisc, updateCompactDisc, addCompactDisc } = require("./controllers/compact_disc")
const router = express.Router()


router.route("/allDiscs").get(getAllCompactDiscs) // see all available discs
router.route("/addDisc").post(addCompactDisc) // add a new disc
router.route("/updateDisc/:id").put(updateCompactDisc) // update an existing disc
router.route("/deleteDisc/:id").delete(deleteCompactDisc) //deletes a disc

module.exports = router