const mongoose = require('mongoose');

const USERNAME = "Abhishek_123";
const PASSWORD = "aquaguard";
const DBNAME = "Backend_DB";

const DB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@merncluster.2ao7u.mongodb.net/${DBNAME}?retryWrites=true&w=majority&appName=MernCluster`;

const data = mongoose.connect(DB_URI)
  .then((res) => {
    console.log("Connected with database");
  })
  .catch((err) => {
    console.log("Error Occured");
  })

const Schema = mongoose.Schema;

const blogpost = new Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
}, { timestamps: true }
)

const blogPostCollectionName = 'blogposts1';
const BlogPost = mongoose.model('BlogPost', blogpost, blogPostCollectionName);

// for(let i=1;i<=10;i++){

//   const new_blog = new schema_blogpost({
//     id:`id:${i}`,
//     title:`title:${i}`,
//     summary:`summary:${i}`,
//     content:`content:${i}`,
//     author:`author:${i}`
//   })

//   new_blog.save()

//   .then((res)=>{
//     console.log(`saving the blog post${i}`);
//   })
//   .catch((err)=>{
//     console.log(`error saving blogpost`);
//   })

// }

module.exports = BlogPost;