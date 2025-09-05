// createComment(), getCommentsByPost(), editComment(), deleteComment()

import { Router } from "express";

const router = Router()

import createComment from "../controllers/createComment";
import editComment from "../controllers/editComment";
import deleteComment from "../controllers/deleteComment";
import { authMiddleWare } from "../middleware/authMiddleware";

router.post('/createComment/:postId',authMiddleWare,createComment)
router.patch('/editComment/:commentId',authMiddleWare,editComment)
router.delete('/deleteComment/:commentId',authMiddleWare,deleteComment)


export default router