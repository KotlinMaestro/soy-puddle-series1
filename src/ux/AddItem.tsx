import {Box, Checkbox, TextField} from "@mui/material";
import {Button, FileInput, Label, Textarea, TextInput} from "flowbite-react";

export default function AddItem() {
    return (
        <div>
            <h3 className="text-2xl text-center font-semibold text-slate-600 mt-6">Register a product for bidding</h3>
            <div className=" items-center mx-4 mt-5 md:w-96 md:mx-auto">
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="Title"
                                value="Product Title"
                            />
                        </div>
                        <TextInput
                            id="title"
                            type="text"
                            placeholder="Lenovo Ideapad 5"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="price"
                                value="Product Price"
                            />
                        </div>
                        <TextInput
                            id="price"
                            type="number"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="description"
                                value="Product Description"
                            />
                        </div>
                        <Textarea
                            id="description"
                            placeholder="Describe your product here"
                            required={true}
                            rows={4}
                        />
                    </div>
                    <div id="fileUpload">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="file"
                                value="Product Photo or Video"
                            />
                        </div>
                        <FileInput
                            id="file"
                            helperText="Upload quality photos of the product"
                        />
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}
