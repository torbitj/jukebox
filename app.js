import playlistsRouter from "#api/playlists";
import tracksRouter from "#api/tracks";
import express from "express";
const app = express();
export default app;

app.use('/tracks', tracksRouter)
app.use('/playlists', playlistsRouter)

app.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send("Something went wrong!");
})