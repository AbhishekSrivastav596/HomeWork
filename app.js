const express = require('express');
const blogpost = require("./blogs");
const app = express();
const port = 3099;
const cors = require('cors');

app.listen(port,()=>{
  console.log('Server is listening on port 3099');
})

app.use(cors());

app.use(express.json());

app.get('/',(req,res)=>{

  res.send("Hello");
})
  

app.get('/blogs',(req,res)=>{
  blogpost.find().sort({createdAt:-1})
  .then((blogs)=>{
    res.send(blogs);
  })
  .catch((err)=>{
    res.status(404).send("Error");
  })
})

app.get('/blogs/id/:id',(req,res)=>{
const blog = req.params.id;
blogpost.findById(blog)

.then((result)=>{
  res.send(result);
})
.catch((error)=>{
  res.status(404).send("Error");
})
})

app.post('/blogs',(req,res)=>{
  const body = req.body;
  // const newBlog = new blogpost(body);
  blogpost.create(body)
  .then((blog)=>{
    res.send("new blog added");
  })

  .catch((err)=>{
    res.status(404).send("Error!!");
  })
})

app.delete('/blogs/id/:id',(req,res)=>{
const blog = req.params.id;
blogpost.findByIdAndDelete(blog)
.then((body)=>{
  res.send("deleted successfully");
})
.catch((err)=>{
  res.send("Error occured in deleting");
})

})