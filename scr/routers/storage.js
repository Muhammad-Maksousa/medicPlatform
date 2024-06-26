const router = require("express").Router();
const controller = require("../controllers/storage");
const apiHandler = require("../helpers/wrappers/api-handler");
const { verifyUserToken, verifyAdminToken } = require("../middleware/auth");

router.post("/", apiHandler(verifyAdminToken), apiHandler(controller.add));
router.put("/", apiHandler(verifyAdminToken), apiHandler(controller.update));
router.get("/all", apiHandler(controller.getAll));
router.get("/one", apiHandler(controller.getOne));
//router.delete("/delete", apiHandler(verifyAdminToken), apiHandler(controller.delete));
module.exports = router;
