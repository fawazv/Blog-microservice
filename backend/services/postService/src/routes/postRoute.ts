import { Router,Request,Response } from "express";


//createPost(), getPost(), updatePost(), deletePost(), getAllPosts()


const router = Router()

// import {authMiddleware} from '../../../userService/src/middleware/authMiddleware' 
import { authMiddleWare } from "../middleware/authMiddleware";


import  createPost  from "../controllers/createPost";
import  getPost  from "../controllers/getPost";
import  getAllPosts  from "../controllers/getAllPosts";
import  updatePost  from "../controllers/updatePost";
import deletePost from "../controllers/deletePost";


router.post('/createPost',authMiddleWare,createPost)
router.get('/getAllPost',getAllPosts)
router.get('/getPost/:id',getPost)
router.put('/updatePost/:id',authMiddleWare,updatePost)
router.delete('/deletePost/:id',authMiddleWare,deletePost)

export default router