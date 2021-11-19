import React from "react";
import moment from "moment"; //loading date
import Link from "next/dist/client/link";

const PostCard = ({ post }) => {
  console.log(post);

  return (
    <div className="p-0 pb-12 mb-8 bg-gray-200 rounded-lg shadow-lg lg:p-8 ">
      <div className="relative mb-6 overflow-hidden shadow-md pb-80">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute object-cover object-top w-full rounded-t-lg shadow-lg h-80 lg:rounded-lg"
        />
      </div>
      <h1 className="mb-8 text-3xl font-semibold text-center transition-all cursor-pointer hover:text-pink-600 ">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="items-center justify-center block w-full mb-8 text-center lg:flex">
        <div className="flex items-center justify-center w-full mb-4 mr-8 lg:mb-0 lg:w-auto">
          <img
            alt={post.author.slug}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.author.photo.url}
          />
          <p className="inline ml-2 text-lg text-gray-700 align-middle">
            {post.author.name}
          </p>
        </div>
        <div className="font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline w-6 h-6 mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="px-4 mb-8 text-lg font-normal text-center text-gray-700 lg:px-20">
        {post.excerpt}
      </p>
      <div className="text-center ">
          <Link href={`/post/${post.slug}`}>
              <span className="inline-block px-8 py-3 text-lg font-medium text-white transition-all transform bg-indigo-600 rounded-full shadow-lg cursor-pointer hover:-translate-y-1 hover:shadow-inner hover:bg-indigo-700 ">
                  Continue reading
              </span>
          </Link>
      </div>
    </div>
  );
};

export default PostCard;
