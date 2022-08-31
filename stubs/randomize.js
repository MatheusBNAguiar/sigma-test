const float = (s, orElse) => isFinite(parseFloat(s)) ? parseFloat(s) : orElse;
const MIN_DELAY_MS = float(process.env.MIN_DELAY_MS, 0);
const MAX_DELAY_MS = float(process.env.MAX_DELAY_MS, 3000);
const FAILURE_RATE = float(process.env.FAILURE_RATE, 0.1);

module.exports = (req, res, next) => {
  const delay = Math.random() * (MAX_DELAY_MS - MIN_DELAY_MS) + MIN_DELAY_MS;
  const fail = Math.random() < FAILURE_RATE;
  const error = () => res.status(500).json({ error: 'Uh oh! Something went wrong!' });

  setTimeout(fail ? error : next, delay);
}
