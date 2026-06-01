import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState("");

  const [data, setData] = useState([]);

  async function formSubmit(e) {
    e.preventDefault();

    data.length == 0
      ? setData([{ name, email, phone, file }])
      : setData([...data, { name, email, phone, file }]);

    console.log(data);

    setName("");
    setEmail("");
    setPhone("");
    setFile("");
  }

  return (
    <main className="bg-bl ack h-screen flex items-center justify-center">
      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => {
          formSubmit(e);
        }}
      >
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter Name"
            className="border p-2 bg-white w-full"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            type="email"
            placeholder="Enter Email"
            className="border p-2 bg-white w-full"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="flex gap-4">
          <input
            type="tel"
            placeholder="Enter Phone Number"
            className="border p-2 bg-white w-full"
            value={phone}
            required
            onChange={(e) => {
              setPhone(e.target.value);
              console.log(typeof phone);
            }}
          />

          <button
            placeholder="Select File"
            className="border p-2 bg-white w-full flex"
          >
            <label id="fileLabel" htmlFor="file" className=" text-gray-400 ">
              {document.getElementById("fileLabel").innerText == ""
                ? "Choose file"
                : ""}
            </label>
            <input
              type="file"
              name="file"
              id="file"
              className="opacity-0 w-full"
              value={file}
              onChange={(e) => {
                setFile(e.target.value);
              }}
            />
          </button>
        </div>

        <button type="submit" className="bg-green-500 text-white px-4 py-2">
          Submit
        </button>
      </form>

      {/* <div>
        {data.map((e) => {
          return (
            <div className="flex gap-10 text-red-500 ">
              <div>{e.name}</div>
            </div>
          );
        })}
      </div> */}
    </main>
  );
};

export default App;
