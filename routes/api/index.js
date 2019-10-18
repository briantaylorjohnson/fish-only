// Required dependencies for API routing
const router = require("express").Router();

// Require FishOnly.com Controllers
const fishController = require("../../controllers/Fish");

// FishOnly.com API Routes
// Retrieve FishOnly.com fishing reports saved to AWS DynamoDB
router.get("/fish", fishController.getReports);

// Retrieve FishOnly.com fishing reports saved to AWS DynamoDB
router.post("/fish", fishController.postReport);

// Create FishOnly.com user
router.post("/createUser", fishController.createUser);

// Authenticate FishOnly.com user
router.post("/authUser", fishController.authUser);

module.exports = router;
