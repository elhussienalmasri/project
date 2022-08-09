import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://hussein-developer.herokuapp.com/images/";


  const d = new Date(post.createdAt);
  const options = {
    weekday:"long",
    day:"numeric",
    month:"long"

  }
const rDate = d.toLocaleDateString("en-US",options)
  return (
    <div className="post">
      {post.photo ? 
      <Link to={`/post/${post._id}`}>
      <img className="postImg" src={PF + post.photo} alt="" />
      </Link>
     
      : 
      <Link to={`/post/${post._id}`}>
     <img className="postImg" src={PF + 'blog.jpg'} alt="" />
     </Link>
    
    }
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {rDate }
        </span>
      </div>
      <Link to={`/post/${post._id}`}  className="link">
      <p className="postDesc">{post.desc}</p>
      </Link>
    </div>
  );
}
