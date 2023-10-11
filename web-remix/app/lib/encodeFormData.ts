/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { FormValues } from '../components/ContactForm';

export const encodeFormData = (data: FormValues) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
