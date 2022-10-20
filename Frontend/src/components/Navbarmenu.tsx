import React, { Fragment } from "react";
import { Navbar, Button } from "flowbite-react";

export default function Navbarmenu() {
  return (
    <Navbar fluid={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
      <div className="flex flex-wrap items-center gap-2">
        <div>
          <Button>Login</Button>
        </div>
        <div>
          <Button>Register</Button>
        </div>
      </div>
      <Navbar.Toggle />
    </Navbar>
  );
}
