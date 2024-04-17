import React, { useState } from "react";
import dynamic from "next/dynamic";

const CalendlyWidget = dynamic(() => import("react-calendly"), {
  ssr: false,
});

const CalendlyPopup = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openPopup}>Schedule an Appointment</button>
      {isOpen && (
        <div className="popup">
          <button onClick={closePopup}>Close</button>
          <CalendlyWidget
            url={url}
            rootElement={document.getElementById("root")}
            onEventScheduled={(event) => console.log("Event scheduled", event)}
          />
        </div>
      )}
    </div>
  );
};

export default CalendlyPopup;