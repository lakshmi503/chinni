import {Router} from 'express';

import * as create from "@/controllers/create.controller"

const router = Router();

router.post("/inserting",create.insert);

router.get("/getdetails",create.getall);

router.put("/edited/:id",create.edit);

router.delete('/deleted/:id', create.deletebyId);

router.put('/app/:id',create.app);

router.patch("/change/:id",create.change);

// router.post("/product",create.product);


export default router;