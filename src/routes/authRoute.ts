import { Router } from "express";
import express from 'express';
import { loginAdmin, loginUser, registerUser } from "../controllers/authController";


const authRouter: Router = express.Router();

const main: string = "/auth";
authRouter.post(`${main}/register`, registerUser);
authRouter.post(`${main}/login`, loginUser);
authRouter.post(`${main}/admin/login`, loginAdmin);



export default authRouter