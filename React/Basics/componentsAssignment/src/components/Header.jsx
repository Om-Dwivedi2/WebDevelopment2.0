import React from "react";

const Header = () => {
  return (
    <header className="d-flex align-items-center justify-content-between container-fluid py-4">
      <section className="fs-2 fw-fw-semibold">Horizon Courts</section>
      <section className="d-flex align-items-center gap-5 fs-4">
        <a className="text-decoration-none">About Us</a>
        <a className="text-decoration-none">Services</a>
        <a className="text-decoration-none">Coaches</a>
        <a className="text-decoration-none">Events</a>
        <a className="text-decoration-none">Contacts</a>
      </section>
      <button className="btn btn-dark rounded-5 px-4 py-3 fs-5">Book Now</button>
    </header>
  );
};

export default Header;
