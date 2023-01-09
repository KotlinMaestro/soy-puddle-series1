import Login from "./ux/Login";
import Register from "./ux/Register";
import Nav from "./ux/Nav";
import DashboardNav from "./ux/DashboardNav";
import BidItem from "./ux/BidItem";
import Dashboard from "./ux/Dashboard";

function App() {
    return(
        <>
            <DashboardNav/>
            <Dashboard />
            {/*<Login />*/}
            {/*<Register />*/}
            <BidItem />
        </>
    )
}

export default App
