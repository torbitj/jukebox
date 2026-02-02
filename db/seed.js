import db from "#db/client";
import { createPlaylist } from "./queries/playlists.js";
import { createTrack } from "./queries/tracks.js";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // Create 10 Playlists
  let trackCount = 1;
  for (let playlistCount = 1; playlistCount <= 10; playlistCount++) {
    const newPlaylist = {
      name: `Playlist${playlistCount}`,
      description: "A new playlist"
    }
    await createPlaylist(newPlaylist);
    // Create 20 Tracks
    for (let newTrack = 1; newTrack <= 2; newTrack++) {
      const duration = Math.floor(Math.random() * 599000) + 100000;
      const newTrack = {
        name: `Track${trackCount}`,
        duration
      }
      await createTrack(newTrack);
      trackCount++;
    }
  }

  let trackId = 1
  //Create 15 Playlist Tracks
  for (let playlistId = 1; playlistId <= 10; playlistId++) {
    if (playlistId % 2 == 1) {
      for (let trackCounter = 1; trackCounter <= 3; trackCounter++) {
        
      }
      trackId++
    }
  }
}
