import {deleteUserUrl} from "../controller/short_url.controller.js"
 import express from 'express';
import { createShortUrl } from '../controller/short_url.controller.js';
const router = express.Router();

router.post("/",createShortUrl);
router.delete('/delete/:id', deleteUserUrl);
export default router;