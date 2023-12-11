const express = require("express");
const {
  test,
  updateUser,
  deleteUser,
  getUserListings,
  getUser,
} = require("../controllers/userController");
const verifyToken = require("../utils/verifyUser");

const router = express.Router();

router.get("/test", test);
router.get("/listings/:id", verifyToken, getUserListings);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/:id", verifyToken, getUser);

module.exports = router;
