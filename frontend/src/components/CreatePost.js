import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../Api.js";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({ title, content });
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-center text-primary mb-4">
                Create a New Post
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="postTitle" className="form-label">
                    Post Title
                  </label>
                  <input
                    type="text"
                    id="postTitle"
                    className="form-control"
                    placeholder="Enter your post title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="postContent" className="form-label">
                    Post Content
                  </label>
                  <textarea
                    id="postContent"
                    className="form-control"
                    placeholder="Enter your post content"
                    rows="6"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Create Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
