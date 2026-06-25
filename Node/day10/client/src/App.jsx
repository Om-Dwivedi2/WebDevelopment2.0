import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";
import { fetchNotes } from "./api/fetchApi";

const App = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [cardData, setCardData] = useState([]);

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  useEffect(() => {
    const getData = async () => {
      const data = await fetchNotes();
      setCardData(data);
    };

    getData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const { title, description } = formData;

    const payload = { title, description };
    console.log(payload);

    const sendData = await axios.post(
      "http://localhost:4500/user/notes",
      payload,
    );

    const newCardData = await fetchNotes();

    setCardData(newCardData);

    setFormData({ title: "", description: "" });
  }

  return (
    <>
      <main className=" px-20 py-2 w-full h-screen ">
        <header className="text-center flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">Notes App</h1>
          <p>Write your thought here and keep them organized</p>
        </header>

        <form
          className="flex flex-col gap-2 p-5 bg-white rounded-xl shadow mt-10"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="font-semibold text-lg">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                required
                placeholder="Enter note title"
                className="border-2 border-gray-300 outline-none rounded p-2 text-md"
                value={formData.title}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="description" className="font-semibold text-lg">
                Description
              </label>
              <textarea
                name="description"
                placeholder="Enter note description"
                rows="3"
                id="description"
                required
                className="border-2 border-gray-300 outline-none rounded p-2  text-md"
                value={formData.description}
                onChange={(e) => {
                  handleChange(e);
                }}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded active:scale-95 w-50 mt-3 mx-auto font-semibold text-lg transition-all duration-100 "
          >
            Create Note
          </button>
        </form>

        <h2 className="text-2xl font-semibold mt-10">Your Notes</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5 py-5">
          {cardData.map((e) => {
            return (
              <Card key={e.id} title={e.title} description={e.description} />
            );
          })}
        </div>
      </main>
    </>
  );
};

export default App;
