const express = require('express');
const BlogPost = require("./blogs");
const app = express();
const port = 3099;
const cors = require('cors');

app.listen(port, () => {
  console.log('Server is listening on port 3099');
})

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello");
})


app.get('/blogs', (req, res) => {
  BlogPost.find().sort({ _id: -1 })
    .then((blogs) => {
      res.send(blogs);
    })
    .catch((err) => {
      res.status(404).send("Error");
    })
})

app.get('/blogs/:id', (req, res) => {
  const blog = req.params.id;
  BlogPost.findById(blog)

    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.status(404).send("Error");
    })
})

app.post('/blogs', (req, res) => {
  const body = req.body;
  // const newBlog = new blogpost(body);
  BlogPost.create(body)
    .then((blog) => {
      res.send("new blog added");
    })

    .catch((err) => {
      res.status(404).send("Error!!");
    })
})

app.delete('/blogs/:id', (req, res) => {
  const blog = req.params.id;
  BlogPost.findByIdAndDelete(blog)
    .then((body) => {
      res.send("deleted successfully");
    })
    .catch((err) => {
      res.send("Error occured in deleting");
    })

})