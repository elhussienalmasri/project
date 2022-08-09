import {axiosInstance} from "../../config";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";
import LoadingSpinner from "../../pages/port/components/spinner/spinner";
import MessageBox from "../../pages/port/components/message/MessageBox";



export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "https://hussein-developer.herokuapp.com/images/";
  const { user , dispatch } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    const getPost = async () => {

      try{
        setLoading(true);
        const res = await axiosInstance.get("/posts/" + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
        setLoading(false);
      }
      catch (err) {
        setError(err.message);
        setLoading(false);
      }
     
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  const d = new Date(post.createdAt);
  const options = {
    weekday:"long",
    day:"numeric",
    month:"long"

  }
const rDate = d.toLocaleDateString("en-US",options)
  return (
<div>
    
    {
    loading?( <div style={{display:'flex',justifyContent:'center',alignItems:'center' ,width:'100vw'}}><LoadingSpinner></LoadingSpinner></div>):  error?(
      <div style={{height:'50vh',display:'flex',alignItems:'center',justifyContent:"center",width:'100vw'}} >
      <MessageBox variant="danger">{error}</MessageBox>
      </div>
    ):
    <div className="singlePost" style={{width:'100vw',minHeight:'100vh'}}>
    <div className="singlePostWrapper">
      {post.photo ? (
        <img src={PF + post.photo} alt="" className="singlePostImg" />
      ):
      (
        <img src={PF + 'blog.jpg'} alt="" className="singlePostImg" />
      )
      }
      {updateMode ? (
        <input
          type="text"
          value={title}
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <h1 className="singlePostTitle">
           <div className="text-container">
          <h1>
          {title}
          </h1>
          </div>
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i
                className="singlePostIcon far fa-edit"
                onClick={() => setUpdateMode(true)}
              ></i>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
              <button onClick={handleLogout}>out</button>
            </div>
          )}
        </h1>
      )}
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author:
          <Link to={`/?user=${post.username}`} className="link">
            <b> {post.username}</b>
          </Link>
        </span>
        <span className="singlePostDate" style={{paddingRight:'20px'}}>
          {rDate}
        </span>
      </div>
      {updateMode ? (
        <textarea
          className="singlePostDescInput"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      ) : (
        <p className="singlePostDesc" style={{ wordWrap:"break-word",margin:'auto'}}>{desc}</p>
      )}
      {updateMode && (
        <button className="singlePostButton" onClick={handleUpdate}>
          Update
        </button>
      )}
    </div>
  </div>
  }
  </div>
   
  );
}
