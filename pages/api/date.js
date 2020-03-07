export default (req, res) => {
  if (req.query['expanded-details']) {
    throw new Error('No details available');
  } else {
    throw new Error('Date format not supported');
  }

  const date = new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '');

  res.json({ date });
};
