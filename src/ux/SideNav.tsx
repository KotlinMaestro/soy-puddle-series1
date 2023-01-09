import {Sidebar} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MDBCol} from "mdb-react-ui-kit";

export default function SideNav() {
    return (
        <MDBCol size='3'>
            <div className="w-fit">
                <Sidebar aria-label="Default sidebar example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item
                                href="#"
                            >
                                <FontAwesomeIcon icon="coffee"/> All Items
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                                labelColor="alternative"
                            >
                                Motor Vehicles
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                            >
                                Furniture

                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                            >

                                Computing
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                            >
                                Real Estate
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                            >
                                Electronics
                            </Sidebar.Item>
                            <Sidebar.Item
                                href="#"
                            >
                                Software
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
        </MDBCol>
    )
}