import React, { useState } from "react";

const App = () => {
  const [marks, setMarks] = useState([53, 82, 12, 24, 65]);

  return (
    <div className="h-screen w-screen bg-gray-950 text-white p-2">
      <main>
        <section className="flex flex-col gap-3 items-center pt-3">
          {marks.map((data, inx) => {
            return (
              <h1 key={inx} className="text-2xl border w-fit p-3 rounded-2xl ">
                Marks of Student {inx + 1} = {data}{" "}
                <button
                  className="border p-2 rounded-2xl px-4 ml-5 bg-red-500"
                  style={
                    data <= 33
                      ? { backgroundColor: "red" }
                      : { backgroundColor: "green" }
                  }
                >
                  {data <= "33" ? "FAIL" : "PASS"}
                </button>
              </h1>
            );
          })}
          <button
            className="border mt-3 p-4 rounded-2xl bg-green-700 text-2xl hover:scale-95"
            onClick={() => {
              console.log("Clicked");
              setMarks((mark) => {
                return mark.map((element) => {
                  if (element < 34) {
                    return element + 5;
                  }
                  return element;
                });
              });
              console.log(marks);
            }}
          >
            Increypase Grace Marks by 5
          </button>
        </section>
      </main>
    </div>
  );
};

export default App;
