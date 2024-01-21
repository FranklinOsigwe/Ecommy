import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 xl:px-24 py-10 px-4 text-base-content">
        <aside>
          <a href="/" className="logo text-white">
            MaMa PuT
          </a>
          <p className="my-5 md:w-40">
            Mama P Industries Ltd.
            <br />
            Providing Delicious Meals since 1992
          </p>
        </aside>

        <div className="w-full grid grid-cols-2 gap-4">
        <nav className="flex flex-col gap-2">
          <header className="footer-title">Useful links</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Event</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <header className="footer-title">Main Menu</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Offer</a>
          <a className="link link-hover">Menus</a>
          <a className="link link-hover">Reservation</a>
        </nav>


        <nav className="flex flex-col gap-2">
          <header className="footer-title">Contact us</header>
          <a className="link link-hover">franklin.osigwe8@gmail.com</a>
          <a className="link link-hover">Social media</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        </div>
      
      
      
      </footer>
    </div>
  );
};

export default Footer;
