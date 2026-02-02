import { getAllTracks } from '#db/queries/tracks';
import express from 'express';

const tracksRouter = express.Router();
export default tracksRouter;

tracksRouter.get('/', async(req, res, next) => {
  const allTracks = await getAllTracks();
  res.send(allTracks);
})