import { Router } from "express";
import {
  createSubmission,
  getSubmissions,
} from "../controllers/submission.controllers.js";

const router = Router();

router.route("/").post(createSubmission).get(getSubmissions);

export default router;
