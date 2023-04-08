import redis from "../../lib/redis";

export default async function handler(req, res) {
  // Increment counter
  const value = await redis.incr("counter");
  // Return current value
  res.status(200).json({ value });
}
