import db from '../client.js'

export const createPlaylistTrack = async ({ playlistId, trackId }) => {
  const sql = `
    INSERT INTO playlists_tracks (playlist_id, track_id)
    VALUES ($1, $2)
    RETURNING *
  `;

  const { rows: [newPlaylistTrack] } = await db.query(sql, [playlistId, trackId]);
  return newPlaylistTrack;
}

export const trackAlreadyInPlaylist = async ({ playlistId, trackId }) => {
  const sql = `
    SELECT * FROM playlists_tracks
    WHERE playlists_tracks.playlist_id = $1
    AND playlists_tracks.track_id = $2
  `;

  const { rows: [track] } = await db.query(sql, [playlistId, trackId])
  return track;
}