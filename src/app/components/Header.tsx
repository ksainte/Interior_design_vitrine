import React from "react";
import "./Header.css";
import header from "../assets/h1.jpg";
import BoberwArt from "../assets/BoberwArt.jpg";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

function Header() {
  return (
    <div className="Header">
      <Image
        className="w-screen opacity-60 hidden md:block"
        src={header}
        alt=""
      />

      <article className="Header_side">
        <h2>Ziggy Bober Design</h2>
        <h1>Professional Interior Design Company in New-York </h1>
        <p>
          {" "}
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>

        <Button
          styles={"custom__button"}
          type={"button"}
          title={"Open modal"}
          disabled={false}
        >
          <Link href="/about_page"> Learn About Us</Link>
        </Button>
      </article>
    </div>
  );
}

export default Header;
