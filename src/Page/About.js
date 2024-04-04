import React from "react";
import { GoogleLogin } from "react-google-login";
import { db } from "../util/firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const clientId =
  "869508749472-fr6qc1lmht8fpic7bh3cophoe3h83hj0.apps.googleusercontent.com";
const onSuccess = async (res) => {
  // console.log(res);
  await setDoc(doc(db, "users", uuidv4()), {
    email: res.profileObj.email,
    name: res.profileObj.name,
    image: res.profileObj.imageUrl,
  });
  toast.dismiss();
  toast.success("Your email has been saved!");
  toast.success("We will notify you when we launch!");
  var templateParams = {
    name: res.profileObj.name,
    recipient: res.profileObj.email, // Assuming res.profileObj.email contains the recipient's email address
    image: res.profileObj.imageUrl,
    user_email: res.profileObj.email,
    reply_to: "",
  };

  // emailjs
  //   .send(
  //     "service_oexx9dg",
  //     "template_ujpbepe",
  //     templateParams,
  //     "AUMuFH8PLDprKG6cT"
  //   )
  //   .then(
  //     (result) => {
  //       console.log(result.text);
  //     },
  //     (error) => {
  //       console.log(error.text);
  //     }
  //   );
};
const onFailure = (res) => {
  console.log("Login failed: res:", res);
  toast.error("Failed to log in!");
};
export const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="wow fadeInUp" data-wow-delay=".2s">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-[540px] lg:mb-0">
                <h2 className="mb-5 text-3xl font-bold leading-tight text-dark dark:text-white sm:text-[40px] sm:leading-[1.2]">
                  Level Up Your Developer Experience (DX) with Instant
                  Stripe-Grade API Docs
                </h2>
                <p className="mb-10 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Stop wasting dev hours on manual documentation. Our free trial
                  lets you generate beautiful, comprehensive API docs like
                  Stripe's in seconds, boosting developer productivity and user
                  adoption of your APIs. Sign up now and see the difference!
                </p>

                {/* <a
                  style={{
                    backgroundColor: "#FFD600",
                    color: "#000000",
                    borderColor: "#FFD600",
                    fontSize: "1.25rem",
                  }}
                  className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-7 py-3 text-center text-base font-medium text-white hover:border-blue-dark hover:bg-blue-dark"
                >
                  🚀 Join the waitlist
                </a> */}
                <GoogleLogin
                  clientId={clientId}
                  buttonText="🚀 Join the waitlist"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  isSignedIn={false}
                  cookiePolicy={"single_host_origin"}
                  autoLoad={false}
                  icon={true}
                  className="jointhewaitlist"
                >
                  <span style={{
                    paddingLeft: "10px",
                  }}>
                  Join the waitlist
                  </span>
                  {/* <FaDiscord /> */}
                </GoogleLogin>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-full sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                    <img
                      src={require("../assets/images/image 2 (4).png")}
                      alt="about image"
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
