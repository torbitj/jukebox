import tracksRouter from "#api/tracks";
import express from "express";
const app = express();
export default app;

app.use('/tracks', tracksRouter)