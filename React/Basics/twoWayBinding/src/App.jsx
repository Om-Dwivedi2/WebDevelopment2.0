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
    <main className="">
      <section className=" pt-20 flex items-center justify-center">
        <form
          className="flex flex-col gap-6"
          onSubmit={(e) => {
            formSubmit(e);
          }}
        >
          <header className="bg-blue-500 text-center text-2xl text-white py-2 ">
            Contact List
          </header>
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
              }}
            />

            <div
              placeholder="Select File"
              className="border p-2 bg-white w-full flex"
            >
              <label htmlFor="file" className="text-start text-gray-400 w-full">
                {file === "" ? "Choose file" : "File Selected:-" }
              </label>
              <input
                type="file"
                name="file"
                id="file"
                className="opacity-0 w-[50%]"
                onChange={(e) => {
                  setFile(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 text-2xl"
          >
            Submit
          </button>
        </form>
      </section>
      <section className=" py-20 flex justify-center  ">
        <div className="bg-gray-200 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-[75%] p-10 gap-5">
          {data.map((e, inx) => {
            return (
              <Card
                key={inx}
                position = {inx}
                userData={data}
                setUserData={setData}
                profile={e.file}
                name={e.name}
                phone={e.phone}
                email={e.email}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
