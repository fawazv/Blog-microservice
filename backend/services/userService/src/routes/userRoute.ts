import {Router} from 'express'

const router = Router()



import  userSignup  from '../controller/userSignUp'
import  userSignin  from '../controller/userSignIn'
import  getUserProfile  from '../controller/getUserProfile'
import  {authMiddleWare}  from '../middleware/authMiddleware'

router.post('/signup',userSignup)
router.post('/signin',userSignin)
router.get('/profile',authMiddleWare,getUserProfile)



export default router