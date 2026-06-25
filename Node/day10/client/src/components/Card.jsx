import React from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import axios from "axios";

const Card = (props) => {
  async function deleteCard() {
    const deleteData = await axios.delete(
      `http://localhost:4500/user/notes/${props.key}`,
    );
    fetchNotes();
    console.log(deleteData);
  }

  async function fetchNotes() {
    const res = await axios.get("http://localhost:4500/user/notes");
    setCardData(res.data.data);
    console.log(res);
  }

  return (
    <>
      <div className="bg-white rounded-xl shadow p-5">
        <h3 className="text-xl font-semibold">{props.title}</h3>
        <p className="text-gray-600 font-semibold">{props.description}</p>
        <hr className="bg-gray-400 my-5" />
        <div className="flex gap-3 items-center justify-end">
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-500 rounded-lg bg-blue-50 transition-all duration-100 active:scale-95">
            <MdEdit className="text-lg" /> Edit
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 border border-red-500 rounded-lg bg-red-50 transition-all duration-100 active:scale-95"
            onClick={() => {
              deleteCard();
            }}
          >
            <MdDelete className="text-lg" /> Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
