import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock, FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <PageHeader pageName="Contact" />

      <div className="mx-auto my-20 flex flex-col gap-14 px-8 lg:w-1/2">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-semibold">Get In Touch With Us</h1>
          <p className="font-light text-secondaryGray">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us An Email. Our Staff Always Be There To Help You Out. Do
            Not Hesitate!
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-32 lg:flex-row">
            <div className="flex flex-col gap-10 lg:w-1/3">
              <div className="flex gap-5">
                <FaLocationDot className="h-12 w-12" />
                <div>
                  <h2 className="text-2xl font-medium">Address</h2>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="flex gap-5">
                <FaPhoneAlt className="h-12 w-12" />
                <div>
                  <h2 className="text-2xl font-medium">Phone</h2>
                  <p>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="flex gap-5">
                <FaClock className="h-6 w-6" />
                <div>
                  <h2 className="text-2xl font-medium">Working Time</h2>
                  <p>
                    <span className="font-medium">Monday-Friday:</span>
                    <br />
                    9:00 - 22:00
                    <br />
                    <span className="font-medium"> Saturday-Sunday:</span>
                    <br />
                    9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>
            <form className="flex flex-col gap-7 lg:w-2/3">
              <div className="flex flex-col gap-3">
                <label className="font-medium">Your name</label>
                <Input
                  placeholder="John Doe"
                  type="text"
                  required
                  className="rounded-lg border py-8"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-medium">Email address</label>
                <Input
                  placeholder="your@email.com"
                  type="email"
                  required
                  className="rounded-lg border py-8"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-medium">Subject</label>
                <Input
                  placeholder="*Optional"
                  type="text"
                  className="rounded-lg border py-8"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-medium">Message</label>
                <textarea
                  placeholder="Feel free to ask us anything"
                  className="resize-none rounded-lg border p-4 focus:outline-sandDark"
                />
              </div>
              <button
                type="submit"
                className="w-1/2 rounded-lg bg-sandDark px-8 py-3 text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
