import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const Card = () => {
  return (
    <>
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-xl font-semibold">Note Title</h3>
        <p className="text-gray-600 font-semibold">
          Note description goes here.
        </p>
        <hr className="bg-gray-400 my-5" />
        <div className="flex gap-3 items-center justify-end">
          <button className="bg-blue-400 font-semibold text-white py-1 px-4 rounded border-2 border-blue-500 flex gap-1 items-center active:scale-95">
         <MdEdit />   Edit
          </button>
          <button className="bg-red-400 font-semibold text-white py-1 px-4 rounded border-2 border-red-500 flex gap-1 items-center active:scale-95">
           <MdDelete/>  Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
