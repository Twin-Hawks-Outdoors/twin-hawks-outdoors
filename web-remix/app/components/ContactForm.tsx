// import { navigate } from 'gatsby';
// import React from 'react';
// import type { SubmitHandler} from 'react-hook-form';
// import { useForm } from 'react-hook-form';
// import { encodeFormData } from '../lib/encodeFormData';
import { conform, useForm } from "@conform-to/react";
import { Form, useActionData } from "@remix-run/react";
import { z } from "zod";
import { parse } from "@conform-to/zod";
import { useId } from "react";
import type { action } from "~/routes/$slug";

// export type FormValues = {
//   [key: string]: string | number | boolean;
// };

export const contactSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  fullName: z.string({ required_error: "Full name is required" }),
  phone: z
    .string()
    .min(7, { message: "Please enter a valid U.S phone number." })
    .max(14, { message: "Please enter a valid U.S phone number." })
    .nullish(),
  message: z
    .string()
    .min(20, { message: "Message must be a minimum 20 characters.." }),
  "got-ya": z.string().nullish(),
});

export function ContactForm() {
  const lastSubmission = useActionData<typeof action>();
  const id = useId();
  const [form, fields] = useForm({
    id,
    lastSubmission,
    shouldRevalidate: "onBlur",
    onValidate({ formData }) {
      return parse(formData, { schema: contactSchema });
    },
  });

	console.log({form, lastSubmission})
  return (
    <div className="container max-w-xl my-8">
      <Form
        method="POST"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full max-w-3xl mx-auto"
        {...form.props}
      >
        {" "}
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
        <div className="form-group">
          <label htmlFor={fields.fullName.id}>
            Full Name
            <input
              {...conform.input(fields.fullName, {
                type: "text",
              })}
              placeholder="Please enter your name"
            />
          </label>
          {fields.fullName.errorId && (
            <small className="error">{fields.fullName.errors}</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor={fields.email.id}>
            Email
            <input
              type="email"
              placeholder="Please enter a valid email"
              {...conform.input(fields.email, { type: "email" })}
            />
          </label>
          {fields.email.errorId && (
            <small className="error">{fields.email.errors}</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor={fields.phone.id}>
            Phone
            <input

              placeholder="Please enter a phone number"
              {...conform.input(fields.phone, { type: "tel" })}
            />
          </label>
          {fields.phone.errorId && (
            <small className="error">
              {fields.phone.errors}
            </small>
          )}
        </div>
        <div className="form-group md:col-span-2 lg:col-span-3">
          <label htmlFor={fields.message.id}>
            Message
            <textarea
							{...conform.textarea(fields.message)}
              rows={6}
              className="resize-none"
            />
          </label>
          {fields.message.errorId && (
            <small className="error">
              {fields.message.errors}
            </small>
          )}
        </div>
        <input
          // disabled={isSubmitting || (submitCount > 0 && submitCount < 2)}
          className="col-span-full justify-self-end button-sm bg-teal-500 cursor-pointer hover:bg-teal-400 focus:bg-teal-400 hover:text-gray-800 active:bg-teal-600  active:text-black focus:ring-teal-600 disabled:opacity-50 disabled:hover:bg-teal-500 disabled:cursor-not-allowed disabled:active:bg-teal-500 disabled:active:text-white"
          type="submit"
          value="Send"
        />
      </Form>
      {/* <form
        className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full max-w-3xl mx-auto"
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input type="hidden" name="form-name" value="contact" />
      </form> */}
    </div>
  );
}

export default ContactForm;
