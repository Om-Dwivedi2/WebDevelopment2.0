import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { fetchNotes } from "../api/fetchApi";
import { CardDataContext } from "../context/CardContext";

const EditNotesModal = (props) => {
  const [formData, setFormData] = useState({ title: props.editNote.title, description:  props.editNote.description , id:  props.editNote.id });

  const [cardData, setCardData] = useContext(CardDataContext);
  

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const payload = { ...formData };

      const res = await axios.put("http://localhost:4500/user/notes", payload);
      console.log(res);

      props.setEditNote((prev) => ({ ...prev, modalState: false }));

      const newData = await fetchNotes();
      setCardData(newData);
      
      
    } catch (error) {
      const ErrMessage = error?.response?.data?.message || error.message;
      console.log(ErrMessage);
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm  flex items-center justify-center">
        <main className=" bg-white w-200 text-black rounded-lg p-5">
          <section className="flex align-center justify-between">
            <h1 className="font-semibold text-2xl">Edit Note</h1>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => {
                props.setEditNote((prev) => ({ ...prev, modalState: false }));
              }}
            >
              X
            </button>
          </section>

          <p className="text-gray-600 font-semibold">
            Update your note details.
          </p>

          <form onSubmit={handleSubmit}>
            <section className="mt-4 flex flex-col gap-2">
              <label htmlFor="title" className=" text-gray-700 font-medium">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg p-2 focus:outline-blue-500 "
              />
            </section>

            <section className="mt-4 flex flex-col gap-2">
              <label
                htmlFor="description"
                className=" text-gray-700 font-medium"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="border border-gray-300 rounded-lg p-2 focus:outline-blue-500 "
              />
            </section>

            <hr className="my-5 text-gray-300" />

            <section className="flex justify-end gap-2">
              <button
                className="border border-gray-300 text-black font-semibold px-4 py-2 rounded-lg mr-2"
                type="button"
                onClick={() => {
                  props.setEditNote((prev) => ({ ...prev, modalState: false }));
                }}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg"
                type="submit"
              >
                Save Changes
              </button>
            </section>
          </form>
        </main>
      </div>
    </>
  );
};

export default EditNotesModal;
