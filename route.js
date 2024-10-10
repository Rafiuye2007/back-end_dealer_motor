import express from 'express'
import {
    createMotor,
    getMotor,
    getMotorByJenis_Motor,
    updateMotor,
    deleteMotor,
} from "./controller/MotorController.js"



const router = express.Router();

router.get("/", getMotor);
router.get("/find", getMotorByJenis_Motor);
router.post("/create", createMotor);
router.put("/update", updateMotor);
router.delete("/delete", deleteMotor)
;
export default router;