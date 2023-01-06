import {Button, Checkbox, Label, TextInput} from "flowbite-react";

export default function Login(){
    return(
      <div className="mx-4 mt-5 md:w-96 md:mx-auto shadow md border-gray-900 ">
          <h3 className="text-center text-slate-700 mb-4 text-3xl">Soy Puddle Login</h3>
         <form className=" flex flex-col gap-4 ">
  <div>
    <div className="mb-2 block">
      <Label className="text-slate-700"
        htmlFor="email1"
        value="Your email"
      />
    </div>
    <TextInput
      id="email1"
      type="email"
      placeholder="name@example.com"
      required={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label className="text-slate-700"
        htmlFor="password1"
        value="Your password"
      />
    </div>
    <TextInput
      id="password1"
      type="password"
      required={true}
    />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="remember" />
    <Label htmlFor="remember">
      Remember me
    </Label>
  </div>
  <Button type="submit">
    Submit
  </Button>
</form>
      </div>
    )
}