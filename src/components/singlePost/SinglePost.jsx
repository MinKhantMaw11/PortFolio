import React from 'react'
import "./siglepost.css"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src="https://artoftesting.com/wp-content/uploads/2022/03/what-is-ecommerce.jpg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Autor: <b>MinKhantMaw</b></span>
            <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur iusto maxime. Temporibus ab quasi possimus, omnis velit quia dolore doloremque nostrum sint ullam, voluptates, ea dolores molestiae recusandae architecto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur iusto maxime. Temporibus ab quasi possimus, omnis velit quia dolore doloremque nostrum sint ullam, voluptates, ea dolores molestiae recusandae architecto!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequuntur iusto maxime. Temporibus ab quasi possimus, omnis velit quia dolore doloremque nostrum sint ullam, voluptates, ea dolores molestiae recusandae architecto!
        </p>
      </div>
    </div>
  )
}
