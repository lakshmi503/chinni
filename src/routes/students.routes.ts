import {Router} from 'express';

import * as student from "@/controllers/student.controller"

const router = Router();

router.post("/register",student.insert);

router.get("/registerall",student.registerall);

router.put("/update/:id",student.update);

router.delete("/registerdelete/:id",student.registerdelete);

router.patch("/edit/:id",student.edit);




export default router;