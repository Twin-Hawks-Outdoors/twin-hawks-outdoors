
import {
  useFetcher,
  useNavigation,
} from "@remix-run/react";
import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  first_name: z.string({ required_error: "First name is required" }),
  "got-ya": z.string().nullish(),
});
export const NewsletterSignup = () => {
  const navigation = useNavigation();
  const newsletterFetcher = useFetcher();
  const state = navigation?.formData
    ? "submitting"
    : newsletterFetcher?.data?.subscription
    ? "success"
    : newsletterFetcher?.data?.error
    ? "error"
    : "idle";

  return (
    <div className="@container bg-cream-500">
      <div className="grid  container px-4 @md:px-8 py-8 mx-auto newsletter w-full max-w-max  ">
        <newsletterFetcher.Form
          method="POST"
          action="/resources/subscribe"
          aria-hidden={state === "success"}
          // {...form.props}
        >
          <h4 className="mt-0">Stay in Touch!</h4>
          <p className="mb-0">
            Stay up to date with class schedules and new product drops!
          </p>
          <p className="absolute overflow-hidden [clip:rect(0 0 0 0)] h-[1px] w-[1px] -m-[1px] p-0 border-0">
            <label htmlFor="got-ya">
              Don’t fill this out if you’re human:{" "}
              <input
                tabIndex={-1}
                type="text"
                name="got-ya"
                autoComplete="false"
              />
            </label>
          </p>
          <fieldset className="flex flex-col @md:flex-row gap-0 @md:gap-2 items-center @md:items-end mt-4">
            <div className="w-full">
              <label className="flex flex-col" htmlFor={"first_name"}>
                Full Name
                <input
                  className="h-10"
                  name="first_name"
                  type="text"
                  placeholder="Please enter your name"
                  id="first_name"
                />
              </label>
            </div>
            <div className="w-full">
              <label className="flex flex-col " htmlFor={"email"}>
                Email
                <input
                  type="email"
                  className="h-10"
                  name="email"
                  placeholder="Please enter a valid email"
                  id="email"
                />
              </label>
            </div>
            <div className="flex flex-col">
              <span className="hidden @md:inline">&nbsp;</span>
              <button
                className="h-10 rounded-md bg-teal-500/90 hover:bg-teal-400 focus:bg-teal-400 button self-end px-2 py-1 text-white"
                type="submit"
              >
                {navigation.state === "submitting"
                  ? "Subscribing..."
                  : "Subscribe"}
              </button>
            </div>
          </fieldset>
          <div className="text-center text-red-500 flex justify-center gap-2">
            {newsletterFetcher?.data?.error && (
              <>
                <small>{newsletterFetcher?.data?.error?.email?.[0]}</small>
                <small>{newsletterFetcher?.data?.error?.first_name?.[0]}</small>
              </>
            )}
          </div>
        </newsletterFetcher.Form>
        <div aria-hidden={state !== "success"}>
          <h4 className="text-center">You're Subscribed!</h4>
          <p className="text-center">
            Please check your email to confirm your subscription.
          </p>
        </div>
      </div>
    </div>
  );
};
