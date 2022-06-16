import { navigate } from 'gatsby';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { encodeFormData } from '../lib/encodeFormData';

export type FormValues = {
  [key: string]: string | number | boolean;
};

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, submitCount },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // async
    fetch('/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData({ 'form-name': 'contact', ...data }),
    })
      .then(() => navigate('/success/'))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container max-w-xl my-8">
      <form
        className=" grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full max-w-3xl mx-auto"
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="absolute overflow-hidden [clip:rect(0 0 0 0)] h-[1px] w-[1px] -m-[1px] p-0 border-0">
          <label htmlFor="got-ya">
            Don’t fill this out if you’re human:{' '}
            <input tabIndex={-1} {...register('got-ya')} autoComplete="false" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
          <label htmlFor="fullName">
            Full Name
            <input
              placeholder="Please enter your name"
              type="text"
              {...register('fullName', { required: true })}
            />
          </label>
          {errors.fullName && (
            <small className="error">Full name is required.</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email
            <input
              type="email"
              placeholder="Please enter a valid email"
              {...register('email', { required: true })}
            />
          </label>
          {errors.email && <small className="error">Email is required.</small>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            Phone
            <input
              type="tel"
              placeholder="Please enter a phone number"
              {...register('phone', { minLength: 7, maxLength: 14 })}
            />
          </label>
          {errors.phone && (
            <small className="error">
              Please enter a valid U.S phone number.
            </small>
          )}
        </div>
        <div className="form-group md:col-span-2 lg:col-span-3">
          <label htmlFor="message">
            Message
            <textarea
              rows={6}
              className="resize-none"
              placeholder="Please enter a brief message!"
              {...register('message', { required: true, minLength: 20 })}
            />
          </label>
          {errors.message && (
            <small className="error">
              Message must be a minimum 20 characters..
            </small>
          )}
        </div>
        <input
          disabled={isSubmitting || (submitCount > 0 && submitCount < 2)}
          className="col-span-full justify-self-end button-sm bg-teal-500 cursor-pointer hover:bg-teal-400 focus:bg-teal-400 hover:text-gray-800 active:bg-teal-600  active:text-black focus:ring-teal-600 disabled:opacity-50 disabled:hover:bg-teal-500 disabled:cursor-not-allowed disabled:active:bg-teal-500 disabled:active:text-white"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}

export default ContactForm;
