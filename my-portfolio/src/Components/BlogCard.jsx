import React from 'react'



function BlogCard({blog:{image,publishURL,category,date,title,text}}) {
  return (
    <div className="col-md-6 col-lg-4 my-4">
      <div className='blogCard_item'>
        <a href={publishURL} target="_blank" className='link_linkedin' rel="noreferrer">
        <div className='blog_banner'>
            <img src={image} alt="blog_img" className='blog-img'/>
        </div>
    <div className="blogcard_wrapper">
      <div className='blog_meta'>
        <p className="blog-category">{category}</p>
        <span className='dot'></span>
        <time className='datetime'>{date}</time>
      </div>
      <h3 className='blog-title'>
        {title}
      </h3>
      <p className='blog-text'>
        {text}
      </p>
    </div>
    </a>
</div>
</div>
  )
}

export default BlogCard
