import { Router } from 'express';
import controller from '../controllers'

const router = Router();

router.post('/user/signup', controller.user.signUp);

export default router;