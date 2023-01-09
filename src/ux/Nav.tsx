import {Navbar} from "flowbite-react";

export default function Nav(){
    return(
       <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="#">
    <img
      src="./logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Alpha-bid logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
</Navbar>
)
}