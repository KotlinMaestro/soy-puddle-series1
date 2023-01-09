import {Button, Card} from "flowbite-react";
import {MDBCol} from "mdb-react-ui-kit";

export default function BidItem() {
    return (
        <MDBCol size='3'>
        <div className=" m-3 max-w-sm">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-slate-700 dark:text-white">
                    Oakwood Office Desk 2.5m
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Enhance your office productivity with this beatiful desk. Made of soft oak
                </p>
                <Button className="bg-blue-400">
                    Place Bid
                </Button>
            </Card>
        </div>
        </MDBCol>
    )
}