import {Router} from 'express';

import * as auth from "@/controllers/auth.controller"

const router = Router();

router.post('/register',auth.register);
router.post('/login', auth.Login);

export default  router;

