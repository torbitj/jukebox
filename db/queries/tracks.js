import db from '../client.js'

export const createTrack = async ({ name, duration }) => {
  const sql = `
    INSERT INTO tracks (name, duration_ms)
    VALUES ($1, $2)
    RETURNING *
  `;

  const { rows: [newTrack] } = await db.query(sql, [name, duration]);
  return newTrack;
}

export const getAllTracks = async () => {
  const sql = `
    SELECT * FROM tracks
  `;

  const { rows: tracks } = await db.query(sql);
  return tracks;
}

export const getTrackById = async (id) => {
  const sql = `
    SELECT * FROM tracks
    WHERE tracks.id = $1
  `;

  const { rows: [track] } = await db.query(sql, [id]);
  return track;
}