import express from "express";
import { check } from "express-validator";
import { getWallets } from "../controllers/walletController.js"
import { deleteWallet } from "../controllers/walletController.js"

// Set up the router
const router = express.Router();

walletRoutes.get('/', getWallets)

walletRoutes.delete('/', deleteWallet)

export const walletRoutes = router;