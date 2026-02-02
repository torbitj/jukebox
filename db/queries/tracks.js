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