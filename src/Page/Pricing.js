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
  console.log(res);
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

  emailjs
    .send(
      "service_oexx9dg",
      "template_ujpbepe",
      templateParams,
      "AUMuFH8PLDprKG6cT"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
const onFailure = (res) => {
  console.log("Login failed: res:", res);
  toast.error("Failed to log in!");
};
export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                Awesome Pricing Plan
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Try our comprehensive API docs risk-free! Join the Beta for
                free.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
              <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
                Recommended
              </p>
              <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
                Early Bird
              </span>
              <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                <span className="text-xl font-medium">$</span>
                <span className="ml-2 -tracking-[2px]">9</span>
                <span className="ml-2 text-base font-normal text-body-color dark:text-dark-6">
                  Per Month
                </span>
              </h2>
              <div className="mb-[50px]">
                <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">
                  Features
                </h5>
                <div className="flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-dark-6">
                    Bulk action upto 100 APIs
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Hosted docs for instant sharing
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Import from Postman and Swagger{" "}
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    API versioning and management for seamless updates
                  </p>
                </div>
              </div>
              <GoogleLogin
                  clientId={clientId}
                  buttonText="🚀 Join the waitlist"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  isSignedIn={false}
                  cookiePolicy={"single_host_origin"}
                  autoLoad={false}
                  icon={false}
                  className="jointhewaitlist"
                >
                  🚀 Join the waitlist
                  {/* <FaDiscord /> */}
                </GoogleLogin>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
              <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
                Hitchhiker's Guide
              </span>
              <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                <span className="text-xl font-medium">$</span>
                <span className="ml-2 -tracking-[2px]">42.0</span>
                <span className="ml-2 text-base font-normal text-body-color dark:text-dark-6">
                  Per Month
                </span>
              </h2>
              <div className="mb-[50px]">
                <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">
                  Features
                </h5>
                <div className="flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-dark-6">
                    Trigger 500 API end-points in one action
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Branded url for instant sharing{" "}
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Git Web-hook: Auto-Update API Docs{" "}
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Import from Postman and Swagger{" "}
                  </p>
                </div>
              </div>
              <GoogleLogin
                  clientId={clientId}
                  buttonText="🚀 Join the waitlist"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  isSignedIn={false}
                  cookiePolicy={"single_host_origin"}
                  autoLoad={false}
                  icon={false}
                  className="jointhewaitlist"
                >
                  🚀 Join the waitlist
                  {/* <FaDiscord /> */}
                </GoogleLogin>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-pricing dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-14">
              <span className="mb-5 block text-xl font-medium text-dark dark:text-white">
                Premium
              </span>
              <h2 className="mb-11 text-4xl font-semibold text-dark dark:text-white xl:text-[42px] xl:leading-[1.21]">
                <span className="text-xl font-medium">$</span>
                <span className="ml-2 -tracking-[2px]">69</span>
                <span className="ml-2 text-base font-normal text-body-color dark:text-dark-6">
                  Per Month
                </span>
              </h2>
              <div className="mb-[50px]">
                <h5 className="mb-5 text-lg font-medium text-dark dark:text-white">
                  Features
                </h5>
                <div className="flex flex-col gap-[14px]">
                  <p className="text-base text-body-color dark:text-dark-6">
                    Trigger 1000 API end-points in one action{" "}
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Branded url for instant sharing{" "}
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Git Web-hook: Auto-Update API Docs{" "}
                  </p>
                  <p className="text-base text-body-color dark:text-dark-6">
                    Integrate with Postman and Swagger{" "}
                  </p>
                </div>
              </div>
              <GoogleLogin
                  clientId={clientId}
                  buttonText="🚀 Join the waitlist"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  isSignedIn={false}
                  cookiePolicy={"single_host_origin"}
                  autoLoad={false}
                  icon={false}
                  className="jointhewaitlist"
                >
                  🚀 Join the waitlist
                  {/* <FaDiscord /> */}
                </GoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
