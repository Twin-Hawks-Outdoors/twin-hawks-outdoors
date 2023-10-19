import { conform, useForm } from "@conform-to/react";
import { parse } from "@conform-to/zod";
import {
  Form,
  useActionData,
  useFetcher,
  useNavigation,
} from "@remix-run/react";
import { useId } from "react";
import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  first_name: z.string({ required_error: "First name is required" }),
  "got-ya": z.string().nullish(),
});
export const NewsletterSignup = () => {
  const lastSubmission = useActionData();
  const id = useId();
  const [form, fields] = useForm({
    id,
    lastSubmission,
    shouldRevalidate: "onBlur",
    onValidate({ formData }) {
      return parse(formData, { schema: newsletterSchema });
    },
  });
  const navigation = useNavigation();

  return (
    <div className="@container">
      <div className="grid  container p-8 my-4 mx-auto [grid-template:1/1;] box-border w-max items-center justify-center bg-white shadow-md rounded-sm ">
        <Form method="POST" action="/resources/subscribe" {...form.props}>
          <h4 className="mt-0">Stay in Touch!</h4>
          <p className="mb-0">
            Stay up to date with class schedules and new product drops!
          </p>
          <p className="absolute overflow-hidden [clip:rect(0 0 0 0)] h-[1px] w-[1px] -m-[1px] p-0 border-0">
            <label htmlFor="got-ya">
              Don’t fill this out if you’re human:{" "}
              <input
                tabIndex={-1}
                {...conform.input(fields["got-ya"], { type: "text" })}
                autoComplete="false"
              />
            </label>
          </p>
          <fieldset className="flex  items-center my-2">
            <div className="form-group">
              <label htmlFor={fields.first_name.id}>
                Full Name
                <input
                  {...conform.input(fields.first_name, {
                    type: "text",
                  })}
                  placeholder="Please enter your name"
                />
              </label>
              {fields.first_name.errorId && (
                <small className="error">{fields.first_name.errors}</small>
              )}
            </div>
            <div className="form-group">
              <label htmlFor={fields.email.id}>
                Email
                <input
                  type="fields.email"
                  placeholder="Please enter a valid email"
                  {...conform.input(fields.email, { type: "email" })}
                />
              </label>
              {fields.email.errorId && (
                <small className="error">{fields.email.errors}</small>
              )}
            </div>
            <button className="rounded-md bg-teal-500 self-end px-2 py-1 text-white" type="submit">
              {navigation.state === "submitting"
                ? "Subscribing..."
                : "Subscribe"}
            </button>
          </fieldset>
        </Form>
      </div>
    </div>
  );
};
