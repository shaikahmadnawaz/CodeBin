import { Router } from "express";
import {
  createSnippet,
  getSnippets,
} from "../controllers/snippet.controllers.js";

const router = Router();

router.route("/").post(createSnippet).get(getSnippets);

export default router;
