import React from "react";

const Card = (props) => {
  return (
    <div className="border border-gray-400 p-1.5 rounded-3xl bg-white h-auto">
      <header
        className=" bg-cover h-25 rounded-3xl relative"
        style={{
          backgroundImage: `url(${props.bgImg})`
        }}
      >
        <div className="absolute bg-white right-1 top-1 rounded-3xl font-semibold p-2">
          Follow <i class="bi bi-plus"></i>
        </div>

        <div className="rounded-full p-1 w-[30%] absolute bg-white top-1/2 left-1/2 -translate-x-1/2 translate-y-1/4 min-w-17.5 max-w-30">
          <img
            src={`${props.profile}`}
            className="w-full h-full rounded-full "
            alt=""
          />
        </div>
      </header>
      <div className="text-center px-3">
        <div className="text-2xl mt-15 font-semibold">{props.name}</div>
        <p className="text-gray-500 mt-2 px-4">
         {props.des}
        </p>
      </div>

      <div className="bg-[#F5F5F5] border border-gray-300 rounded-2xl grid grid-cols-3 text-center mt-4 px-3">
        <div>
          <div className="font-semibold">{props.likes}</div>
          <p className="text-gray-500">Likes</p>
        </div>
        <div>
          <div className="font-semibold">{props.posts}</div>
          <p className="text-gray-500">Posts</p>
        </div>
        <div>
          <div className="font-semibold">{props.views}</div>
          <p className="text-gray-500">Views</p>
        </div>
      </div>

      <div className="flex justify-center gap-6 my-2">
        <i class="bi bi-instagram"></i>
        <i class="bi bi-twitter-x"></i>
        <i class="bi bi-threads"></i>
      </div>
    </div>
  );
};

export default Card;
