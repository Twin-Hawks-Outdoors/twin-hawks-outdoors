import { parse } from "@conform-to/zod";
import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { newsletterSchema } from "~/components/NewsletterSignup";

export const loader = () =>{
	return redirect("/")
}

export const action = async ({ request }: ActionFunctionArgs) => {
	const formData = await request.formData();
  const submission = parse(formData, { schema: newsletterSchema });

	const API_KEY = process.env.CONVERTKIT_KEY!
	const FORM_ID = "5734314";
	const API = `https://api.convertkit.com/v3/`
	const TAG_ID = [4204038];


  // Report the submission to client
  // 1) if the intent is not `submit`, or
  // 2) if there is any error
  if (submission.intent !== "submit" || !submission.value) {
    return json(submission);
  }

  if (submission.value?.["got-ya"]?.length) {
    throw new Response("Bot detected", { status: 500 });
  }

	const res = await fetch(`${API}forms/${FORM_ID}/subscribe`, {
		method: "POST",
		body: JSON.stringify({
			api_key: API_KEY,
			first_name: submission.value.first_name,
			email: submission.value.email,
			tags: TAG_ID,
		}),
		headers: {
			"Content-Type": "application/json; charset=utf-8",
		}
	})

	return res.json()
};

