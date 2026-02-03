import db from '../client.js'

export const createPlaylist = async ({ name, description }) => {
  const sql = `
    INSERT INTO playlists (name, description)
    VALUES ($1, $2)
    RETURNING *
  `;

  const { rows: [playlist] } = await db.query(sql, [name, description]);
  return playlist;
}

export const getAllPlaylists = async () => {
  const sql = `
    SELECT * FROM playlists
  `;

  const { rows: playlists } = await db.query(sql);
  return playlists;
}

export const getPlaylistById = async (id) => {
  const sql = `
    SELECT * FROM playlists
    WHERE playlists.id = $1
  `;

  const { rows: [playlist] } = await db.query(sql, [id]);
  return playlist;
}

export const getPlaylistTracks = async (id) => {
  const sql = `
    SELECT tracks.* FROM playlists
    JOIN playlists_tracks ON playlists.id = playlists_tracks.playlist_id
    JOIN tracks ON playlists_tracks.track_id = tracks.id
    WHERE playlists.id = $1
  `;
  
  const { rows: tracks } = await db.query(sql, [id]);
  return tracks;
}