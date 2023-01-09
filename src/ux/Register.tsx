import {Button, Checkbox, Label, TextInput} from "flowbite-react";

export default function Register() {
    return (
        <>
            <div className="mx-4 mt-5 md:w-96 md:mx-auto shadow md ">
                <h3 className="text-center text-slate-700 mb-4 text-3xl">Bidventory Register</h3>
                <form className="flex mx-auto flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                className="text-slate-700"
                                htmlFor="email2"
                                value="Your email"
                            />
                        </div>

                        <TextInput
                            id="email2"
                            type="email"
                            placeholder="name@example.com"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                className="text-slate-700"
                                htmlFor="password2"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password2"
                            type="password"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                className="text-slate-700"
                                htmlFor="repeat-password"
                                value="Repeat password"
                            />
                        </div>
                        <TextInput
                            id="repeat-password"
                            type="password"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="agree"/>
                        <Label className="text-slate-700" htmlFor="agree">
                            I agree with the{' '}
                            <a
                                href="/forms"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                terms and conditions
                            </a>
                        </Label>
                    </div>
                    <Button className="bg-blue-400" type="submit">
                        Register new account
                    </Button>
                </form>
                </div>
            </ >
            )
            }