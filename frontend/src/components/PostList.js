import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts, deletePost } from "../Api";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await getPosts();
    setPosts(response.data);
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    fetchPosts(); // Refresh posts after deletion
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4 sm:p-6">
      <h2 className="text-4xl font-bold mb-6 text-gray-600">All Blog Posts</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <div key={post._id} className="bg-white p-6 shadow-lg rounded-lg">
            <Link to={`/post/${post._id}`}>
              <h3 className="text-2xl font-bold text-indigo-600 mb-2 hover:text-indigo-500 transition-colors">
                {post.title}
              </h3>
            </Link>
            <p className="text-gray-600 mb-4">
              {post.content.substring(0, 100)}...
            </p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleDelete(post._id)}
                className="text-red-600 hover:text-red-600"
              >
                Delete
              </button>
              <Link
                to={`/edit/${post._id}`}
                className="text-indigo-700 hover:text-indigo-700"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
