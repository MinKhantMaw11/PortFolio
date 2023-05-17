import "./post.css"

export default function Post() {
  return (
    <div className="post link">
        <img className="postImg" src="https://www.searchenginejournal.com/wp-content/uploads/2020/12/ecommerce-mcommerce-featured-image-5fd09a3a5ff2a.png" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Funiture</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem, ipsum dolor sit amet.</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid animi neque. Dolorum et assumenda tenetur, totam quis explicabo cumque ea placeat ipsum. Totam voluptatibus quo cumque voluptatum ab modi.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid animi neque. Dolorum et assumenda tenetur, totam quis explicabo cumque ea placeat ipsum. Totam voluptatibus quo cumque voluptatum ab modi.
            </p>
    </div>
  )
}
