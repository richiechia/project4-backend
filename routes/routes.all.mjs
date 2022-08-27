import { Router } from 'express';

import db from '../db/models/index.mjs';

import UserAccountsController from '../controllers/userAccounts.mjs';
import MemberDetailsController from '../controllers/memberDetails.mjs';

const router = Router();

const userAccountsController = new UserAccountsController(db);
const memberDetailsController = new MemberDetailsController(db);



router.get('/useraccounts/test', userAccountsController.test);
router.post('/useraccounts/createuser', userAccountsController.createUser)


router.get('/memberdetails/test', memberDetailsController.test)
router.post('/memberdetails/addmember', memberDetailsController.addMember)

export default router;
