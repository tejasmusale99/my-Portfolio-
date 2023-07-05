import React from 'react'
import Blog_data from './Blog_data'
import BlogCard from './BlogCard'
import { motion } from "framer-motion";
function Blogs() {
  const blogs_variant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.6,
      },
    }
  };
  return (
    <motion.div className="container blogs"
    variants={blogs_variant}
    initial="hidden"
    animate="visible"
    >
      <div className="row">
        {Blog_data.map((blogs,index) => (
          <BlogCard blog={blogs} key={index}/>
        ))}
        </div>
      </motion.div>
  )
}

export default Blogs


