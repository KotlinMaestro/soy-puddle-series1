import SideNav from "./SideNav";
import BidItem from "./BidItem";
import DashboardNav from "./DashboardNav";
import Footer from "./Footer";

export default function Dashboard() {
    return (
        <div>
            <DashboardNav/>
            <div className="container flex columns-5">
                    <SideNav/>
                    <BidItem/>
                    <BidItem/>
                    <BidItem/>
                    <BidItem/>
                    <BidItem/>
                    <BidItem/>
            </div>
            <Footer/>
        </div>
    )
}
