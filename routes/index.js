// Required dependencies for server routing
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Path to API routes for FishOnly.com
router.use("/api", apiRoutes);

// If no API routes are hit, send to the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
