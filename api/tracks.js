import { getAllTracks, getTrackById } from '#db/queries/tracks';
import express from 'express';

const tracksRouter = express.Router();
export default tracksRouter;

tracksRouter.get('/', async (req, res, next) => {
  const allTracks = await getAllTracks();
  res.send(allTracks);
});

tracksRouter.get('/:id', async (req, res, next) => {
  const inputId = req.params.id;
  let validId = true;
  for (let i = 0; i < inputId.length; i++) {
    if (isNaN(inputId[i])) validId = false;
  }
  const trackId = Number(inputId);
  if (trackId < 0 || !validId) return res.status(400).send("Id must be a positive integer")
  const foundTrack = await getTrackById(trackId);
  if (!foundTrack) return res.status(404).send("Track not found")
  res.send(foundTrack);
})