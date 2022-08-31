import { Router } from 'express';

import db from '../db/models/index.mjs';

import UserAccountsController from '../controllers/userAccounts.mjs';
import MemberDetailsController from '../controllers/memberDetails.mjs';
import AuthController from '../controllers/authAccount.mjs';
import authMiddleware from '../middlewares/auth.middleware.js'

const router = Router();

const userAccountsController = new UserAccountsController(db);
const memberDetailsController = new MemberDetailsController(db);
const authController = new AuthController(db);



router.get('/useraccounts/test', userAccountsController.test);
router.post('/useraccounts/createuser', userAccountsController.createUser)


router.get('/memberdetails/test', memberDetailsController.test)
router.get('/memberdetails/getCurrentUser', memberDetailsController.getCurrentUser)
router.post('/memberdetails/addmember', memberDetailsController.addMember)

router.post('/auth/signIn', authController.signIn)
router.get('/auth/re-auth', authMiddleware, authController.reAuth)
router.get('/auth/verify-signin', authMiddleware,authController.verifySignIn)
router.get('/auth/logout', authController.logout)

export default router;
