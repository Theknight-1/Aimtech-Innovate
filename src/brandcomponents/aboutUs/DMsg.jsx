import React from "react";

const DMsg = () => {
  return (
    <section className="h-[80vh] w-full">
      <div className="h-full w-full border flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center">Director’s Message</h1>
        <div className="flex items-center justify-center">
          <div className="flex-1 flex justify-center">
            <img src="/about/TeamMember.png" alt="" />
          </div>
          <div className="flex-1 text-white text-2xl">
            <p>
              Founded in 2003 by Principal Architect Jordan Peters, we employ
              strategies to manage resources efficiently, including passive and
              active design, and carefully selecting sustainable and
              environmentally responsible building materials to ensure that the
              long term impact on the environment is minimal.
            </p>
            <p>
              The firm has been involved in a wide range of services including
              residential, civic and commercial design, design of architectural
              signage and graphics, workplace consultancy and renovation,
              landscape design and affordable housing design.
            </p>
            <p>
              Notable works include the Advantage Place (12-storey office
              complex for Enterprise Properties Ltd), Visitor’s Centre for the
              Kakum National Park, the Gomoa Fetteh Feyenoord Football Academy
              (now the West African Football Academy) and the renovation of the
              Headquarters of the Ghana Revenue Authority.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DMsg;
