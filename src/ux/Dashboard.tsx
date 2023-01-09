import {Sidebar} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MDBContainer, MDBRow} from "mdb-react-ui-kit";
import SideNav from "./SideNav";
import BidItem from "./BidItem";
import DashboardNav from "./DashboardNav";
import Footer from "./Footer";

export default function Dashboard() {
    return (
        <div>
            <DashboardNav/>
            <MDBContainer>
                <MDBRow>
                    <SideNav/>
                    <BidItem/>
                    <BidItem/>
                    <BidItem/>
                </MDBRow>
            </MDBContainer>
            <Footer/>
        </div>
    )
}
