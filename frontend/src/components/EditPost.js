import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPostById, updatePost } from "../Api";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const response = await getPostById(id);
    setTitle(response.data.title);
    setContent(response.data.content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(id, { title, content });
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 sm:p-6">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">Edit Post</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow"
          />
          <textarea
            placeholder="Post Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-40 resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-5 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Update Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
