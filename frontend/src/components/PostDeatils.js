import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../Api";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    const response = await getPostById(id);
    setPost(response.data);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 sm:p-6">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl font-bold mb-4 text-indigo-700">
          {post.title}
        </h2>
        <p className="text-gray-600 mb-6">{post.content}</p>
        <p className="text-sm text-gray-500">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PostDetail;
