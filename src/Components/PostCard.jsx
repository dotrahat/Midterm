import React from 'react'

const PostCard = ({post, from}) => {

  const {title, body} = post;
  return (

  <div className={from == "dashboard" ? 'col mb-3' : 'col-3'}>
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
      <div className="card-footer">
        <small className="text-body-secondary">Last updated {Math.round(Math.random() * 100 )} mins ago</small>
      </div>
    </div>
  </div>

  )
}

export default PostCard
