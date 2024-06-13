import { FaTelegramPlane } from "react-icons/fa";
import contactUsImg from "../assets/contact-us.svg";
import { Input, Textarea } from "@mantine/core";

function ContactUs() {
  return (
    <>
      <div className="h-[100px] bg-gradient-to-r from-gradient1  via-gradient2 to-gradient3  w-full">
        <p className="flex h-[100px] justify-center align-middle items-center font-bold text-4xl text-gray-700">
          Contact Us
        </p>
      </div>
      <div className="relative max-container w-11/12 md:w-9/12 xl:w-1/2  border grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-10 justify-start bg-textColor px-8 pt-4 lg:px-16 mt-12 py-10 lg:py-14 rounded-md shadow-xl">
        <div>
          <p className="text-4xl font-extrabold  text-primary1">Contact</p>
          <p className="tracking-normal leading-none font-normal mt-2">
            Just leave your contact with us and we will get back to you shortly!
          </p>
          <img
            src={contactUsImg}
            alt="contact-us image"
            className="w-full max-lg:hidden block mt-4"
          />
        </div>

        <form className="">
          <div className="space-y-2">
            <label htmlFor="firstName" className="input-label">
              First name
            </label>
            <Input
              type="text"
              id="firstName"
              radius={"md"}
              size="md"
              className=""
              placeholder="John"
              required
            />
            <label htmlFor="lastName" className="input-label">
              Last name
            </label>
            <Input
              type="text"
              id="lastName"
              radius={"md"}
              size="md"
              placeholder="Doe"
              required
            />
            <label htmlFor="email" className="input-label">
              Email
            </label>
            <Input
              type="email"
              id="email"
              radius={"md"}
              size="md"
              placeholder="Johndoe@gmail.com"
              required
            />
            <label htmlFor="mobile" className="input-label">
              Mobile Number
            </label>
            <Input
              type="number"
              id="mobile"
              radius={"md"}
              size="md"
              placeholder="9876543210"
              required
            />
            <label htmlFor="message" className="input-label">
              Message
            </label>
            <div>
              <Textarea rows={4} cols={47} />
            </div>
          </div>
          <button className="mt-4 w-full px-3 py-1.5 bg-primary1 text-textColor font-semibold font-montserrat rounded-md text-base cursor-pointer active:scale-95">
            <FaTelegramPlane className="text-4x" />
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
