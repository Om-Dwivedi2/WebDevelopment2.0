import React from "react";

const Card = (props) => {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden">
      <header
        className="h-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `url("https://i.sstatic.net/bkC9s.jpg")`,
        }}
      >
        <div className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-full">
          <img
            src={props.profile}
            alt=""
            className="w-16 h-16 rounded-full object-cover border border-gray-300"
          />
        </div>
      </header>

      <div className="pt-10 px-4 pb-4">
        <h2 className="text-lg font-semibold text-center text-gray-800">
          {props.name}
        </h2>

        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
            <span className="text-sm text-gray-500">Phone</span>
            <span className="text-sm font-medium text-gray-800">
              {props.phone}
            </span>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
            <div className="text-sm text-gray-500 mb-1">Email</div>
            <div className="text-sm text-gray-800">{props.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
