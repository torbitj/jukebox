import db from '../client.js'

export const createTrack = async ({ name, duration }) => {
  const sql = `
    INSERT INTO tracks (name, duration_ms)
    VALUES ($1, $2)
    RETURNING *
  `;

  const { rows: [newTrack] } = await db.query(sql, [name, duration])
  console.log("NEW TRACK: ", newTrack);
  return newTrack;
}