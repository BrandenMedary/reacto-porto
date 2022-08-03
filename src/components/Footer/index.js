import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Footer() {


  return (
    <footer className="flex-row px-1 justify-content-center">
      <ul className="flex-row">
        <li className="mx-2">
          <a href="https://github.com/BrandenMedary">
            GitHub
            </a>
        </li>
        <li className={"mx-2"}>
          <a href="https://www.linkedin.com/in/branden-medary-20b819181/">
            Linkedin
            </a>
        </li>

    
      </ul>
    </footer>
  );
}

export default Footer;