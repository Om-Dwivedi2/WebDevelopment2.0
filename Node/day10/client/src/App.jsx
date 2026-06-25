import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <main className=" px-20 py-2 w-full h-screen bg-[#c6bdbd]">
        <header className="text-center flex flex-col gap-1"><h1 className="text-4xl font-semibold">Notes App</h1>
        <p>Write your thought here and keep them organized</p></header>

        <form className="flex flex-col gap-2 p-5 bg-white rounded-xl shadow mt-10">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="title" className="font-semibold text-lg">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="border-2 border-gray-300 outline-none rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="description" className="font-semibold text-lg">Description</label>
              <textarea
                name="description"
                id="description"
                className="border-2 border-gray-300 outline-none rounded"
              >
                
              </textarea>
            </div>
          </div>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded active:scale-95 w-50 mt-3 mx-auto font-semibold text-lg">
            Create Note
          </button>
        </form>

        <h2 className="text-2xl font-semibold mt-10">Your Notes</h2>

      <div className="grid grid-cols-3 gap-5 mt-5">
        <Card/>
      </div>
      </main>
    </>
  );
};

export default App;
