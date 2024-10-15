const express = require("express")
const router = express.Router()
const employeeController = require("../controller/employee")

router.post("/register", employeeController.register)
router.get("/get-all", employeeController.getAllEmployee)
router.get("/get-by-id/:id", employeeController.getEmployeeById)
router.put("/update-by-id/:id", employeeController.updateById)
router.delete("/delete-by-id/:id", employeeController.deleteById)


module.exports = router;