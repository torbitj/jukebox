import { getAllPlaylists } from '#db/queries/playlists';
import express from 'express';

const playlistsRouter = express.Router();
export default playlistsRouter;

playlistsRouter.get('/', async(req, res, next) => {
  const playlists = await getAllPlaylists();
  res.send(playlists);
})