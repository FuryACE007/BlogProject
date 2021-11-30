import React, { useState, useEffect, useRef } from "react";

const CommentsForm = () => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("name", name);
      localStorage.removeItem("email", email);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 shadow-lg rounded-lg pb-8 mb-8">
      <h3 className="text-xl rounded-lg p-8 mb-8 border-b pb-4">
        CommentsForm
      </h3>
      <div className="grid grid-cols-1 gap-4 mb-4 px-5 opacity-60 backdrop-blur-md backdrop-opacity-20">
        <textarea
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg shadow-md transition-all focus:ring-2 focus:ring-gray-200 bg-gray-300  text-gray-900"
          placeholder="Comment"
          name="comment"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 px-5 opacity-60 backdrop-blur-md backdrop-opacity-20 lg:grid-cols-2">
        <input
          type="text"
          ref={nameEl}
          className="py-4 px-4 outline-none w-full rounded-lg shadow-md transition-all focus:ring-2 focus:ring-gray-200 bg-gray-300  text-gray-900"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          ref={emailEl}
          className="py-4 px-4 outline-none w-full rounded-lg shadow-md transition-all focus:ring-2 focus:ring-gray-200 bg-gray-300  text-gray-900"
          placeholder="E-mail"
          name="email"
        />
      </div>
      <div className="items-center grid grid-cols-1 gap-4 mb-4 px-5 opacity-60 backdrop-blur-md backdrop-opacity-20">
        <div>
          <input
            ref={storeDataEl}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label
            className="text-md text-gray-900 ml-2 cursor-pointer hover:text-pink-600 transition-all"
            htmlFor="storeData"
          >
            Save my e-mail and name for the next time I comment.
          </label>
        </div>
      </div>

      {error && (
        <p className="mx-5 text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className=" text-white text-md bg-purple-500 mx-4 px-4 py-3 rounded-full shadow-lg hover:-translate-y-1 hover:text-gray-100 hover:shadow-inner hover:bg-purple-600 transition-all"
        >
          Post Comment
        </button>
        {showSuccessMessage && <span>Comment submitted for review</span>}
      </div>
    </div>
  );
};

export default CommentsForm;
