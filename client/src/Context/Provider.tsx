import React, { useState } from "react";
import { ShowPopupContext } from ".";

export const ShowPopupProvider = (props) => {
  let [showPopup, setShowPopup] = useState(false);

  return (
    <ShowPopupContext.Provider
      value={{
        showPopup,
        setShowPopup,
      }}
    >
      {props.children}
    </ShowPopupContext.Provider>
  );
};
