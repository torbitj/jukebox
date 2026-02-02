import { getAllTracks, getTrackById } from '#db/queries/tracks';
import express from 'express';

const tracksRouter = express.Router();
export default tracksRouter;

tracksRouter.get('/', async (req, res, next) => {
  const allTracks = await getAllTracks();
  res.send(allTracks);
});

tracksRouter.get('/:id', async(req, res, next) => {
  const trackId = Number(req.params.id);
  const foundTrack = await getTrackById(trackId);
  res.send(foundTrack);
})