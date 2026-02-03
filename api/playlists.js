import { getAllPlaylists, getPlaylistById } from '#db/queries/playlists';
import express from 'express';

const playlistsRouter = express.Router();
export default playlistsRouter;

playlistsRouter.get('/', async(req, res, next) => {
  const playlists = await getAllPlaylists();
  res.send(playlists);
})

playlistsRouter.get('/:id', async (req, res, next) => {
  const inputId = req.params.id;
  let validId = true;
  for (let i = 0; i < inputId.length; i++) {
    if (isNaN(inputId[i])) validId = false;
  }
  const playlistId = Number(inputId);
  if (playlistId < 0 || !validId) return res.status(400).send("Id must be a positive integer")
  const foundPlaylist = await getPlaylistById(playlistId);
  if (!foundPlaylist) return res.status(404).send("Playlist not found")
  res.send(foundPlaylist);
})