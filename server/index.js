
//mongodb+srv://<username>:<password>@cluster0.lazglkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RestModel = require('./models/Items')
const RevModel = require('./models/revItems')
const HangModel = require('./models/hangitems')
const HangrevModel = require('./models/hangreviewitems')

const app = express()
app.use(cors())
app.use(express.json())

// localdatabase connecting
mongoose.connect('mongodb+srv://sandhyashankar:Guruji_1961@cluster0.lazglkl.mongodb.net/CRUD?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err);
});



app.get("/getRest", (req,res) => {
    RestModel.find()
    .then(restaurants =>res.json(restaurants))
    .catch(err => res.json(err))
})

app.get("/getReview/:restID", (req, res) => {
  const restID = req.params.restID;
  RevModel.find({ restID }) // Filter reviews based on the provided restaurant ID
    .then(reviews => res.json(reviews))
    .catch(err => res.json(err));
});

app.get("/gethang", (req,res) => {
  HangModel.find()
  .then(hangouts =>res.json(hangouts))
  .catch(err => res.json(err))
})

app.get("/gethangrev/:HId", (req, res) => {
  const HId = req.params.HId;
  HangrevModel.find({ HId }) // Filter reviews based on the provided HId
    .then(hangoutrev => res.json(hangoutrev))
    .catch(err => res.json(err));
});

app.post('/addReview/:HId', (req, res) => {
  // Extract data from request body
  const { HId } = req.params;
  const { name, review, rating } = req.body;

  // Create a new instance of HangrevModel
  const newReview = new HangrevModel({
    HId,
    Hname: name,
    Hreview: review,
    Hrating: rating
  });

  // Save the new review to the database
  newReview.save()
    .then(savedReview => {
      res.status(201).json(savedReview); // Respond with the saved review
    })
    .catch(err => {
      res.status(500).json({ error: 'Error saving review to database' }); // Handle errors
    });
});

app.post('/createReview/:restID', (req, res) => {
  const restID = req.params.restID;
  const { name, review, rating } = req.body;

  // Create a new review document using the Review model
  const newReview = new RevModel({
    restID,
    name,
    review,
    rating
  });

  // Save the new review to the database
  newReview.save()
    .then(savedReview => {
      res.status(201).json(savedReview); // Respond with the saved review
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to add review', details: err }); // Handle errors
    });
});


app.listen(3001, () =>{
    console.log("Server is running")
})