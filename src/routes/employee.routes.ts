import {Router} from 'express';

import * as employee from "@/controllers/employee.controller"


const router = Router();

router.post("/create",employee.insert);

router.get("/employeeall",employee.employeeall);

router.put("/empupdate/:id",employee.emupdate);

router.delete("/employeedelete/:id",employee.employeedelete);

router.patch("/set/:id",employee.set);




export default router;

