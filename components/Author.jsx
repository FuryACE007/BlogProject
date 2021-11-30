import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="relative p-12 mt-20 mb-8 text-center bg-black rounded-lg shadow-inner bg-opacity-30 backdrop-blur-sm backdrop-opacity-100">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          alt={author.name}
          unoptimized
          height="100px"
          width="100px"
          className="align-middle rounded-full"
          src={author.photo.url}
        />
        
      </div>
      <h3 className="text-xl font-bold text-white "> {author.name} </h3>
      <p className="text-white mt-4"> {author.bio} </p>
    </div>
  );
};

export default Author;
