import React, { createContext, useContext, useState } from "react";

export const CardDataContext = createContext();

const CardContext = (props) => {
  const [cardData, setCardData] = useState([]);

  return (
    <>
      <CardDataContext.Provider value={[cardData, setCardData]}>
        {props.children}
      </CardDataContext.Provider>
    </>
  );
};

export default CardContext;
