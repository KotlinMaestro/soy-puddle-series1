import {Navbar} from "flowbite-react";

export default function Nav() {
    return (
        <Navbar
            className="bg-blue-400"
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="#">
                {/*<img*/}
                {/*  src="./logo.svg"*/}
                {/*  className="mr-3 h-6 sm:h-9"*/}
                {/*  alt="Alpha-bid logo"*/}
                {/*/>*/}
                <span className="self-center whitespace-nowrap text-slate-700 text-xl font-semibold dark:text-white">
      Alpha Bid Group
    </span>
            </Navbar.Brand>
            <Navbar.Toggle/>
        </Navbar>
    )
}