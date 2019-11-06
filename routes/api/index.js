// Required dependencies for API routing
const router = require("express").Router();

// Require FishOnly.com Controllers
const fishController = require("../../controllers/Fish");

// FishOnly.com API Routes
// Retrieve FishOnly.com fishing reports saved to AWS DynamoDB
router.post("/reports", fishController.getReports);

// Retrieve FishOnly.com fishing reports saved to AWS DynamoDB
router.post("/fish", fishController.postReport);

// Update FishOnly.com user profile attributes
router.post("/deleteReport", fishController.deleteReport);

// Create FishOnly.com user
router.post("/createUser", fishController.createUser);

// Authenticate FishOnly.com user
router.post("/authUser", fishController.authUser);

// Update FishOnly.com user profile attributes
router.post("/updateUser", fishController.updateUserAttribute);

// Retrieve FishOnly.com tackle saved to AWS DynamoDB
router.post("/tackle", fishController.getTackle);

module.exports = router;
