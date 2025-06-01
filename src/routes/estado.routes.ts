import { Router, Request, Response } from "express"
import { getAll, getBySigla, create, update, remove } from "../controllers/estado.controller"

const router = Router()

router.get("/", getAll)
router.get("/:sigla", getBySigla)

export default router