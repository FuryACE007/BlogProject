import React from "react";

const Author = ({ author }) => {
  return (
    <div className="relative p-12 mt-20 mb-8 text-center bg-black rounded-lg shadow-inner bg-opacity-30">
      <div className="absolute left-0 right-0 -top-14">
        <img
          alt={author.name}
          height="100px"
          width="100px"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
      </div>
    </div>
  );
};

export default Author;
