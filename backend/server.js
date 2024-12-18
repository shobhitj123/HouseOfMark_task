const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 5000;


app.use(cors());

app.use(express.json()); 

let reviews = []; 

app.post('/api/reviews', (req, res) => {
  const { rating, comment } = req.body;

  if (!rating || !comment) {
    return res.status(400).json({ error: 'Rating and comment are required.' });
  }

  const newReview = { id: reviews.length + 1, rating, comment };
  reviews.push(newReview);

  return res.status(201).json(newReview);
});

app.get('/api/reviews', (req, res) => {
  return res.json(reviews);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
