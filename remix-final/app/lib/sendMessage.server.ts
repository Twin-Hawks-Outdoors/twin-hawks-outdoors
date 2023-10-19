import { redirect } from "@remix-run/node";
import sgMail from "@sendgrid/mail"
import { writeClient } from "~/sanity.server";
export const sendMessage = async (data: any) => {

	sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

	  const template = `
    <div>
      <h1>New Form Submission</h1>
      <p><strong>Name: </strong>${data?.fullName}</p>
      <p><strong>Email: </strong><a href="mailto:${data?.email}">${data?.email}</a></p>
      <p><strong>Phone: </strong><a href="tel:+1${data?.phone}">${data?.phone}</a></p>
      <p><strong>message: </strong>${data?.message}</p>
    </div>
  `;

    const msg = {
      to: "sam@twinhawksoutdoors.com",
      from: "sam@twinhawksoutdoors.com",
      replyTo: data?.email,
      subject: `New contact from submission from ${data.fullName}`,
      text: `${data.message}`,
      html: template,
    };


      await writeClient.create({
        _type: "formSubmission",
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });

      sgMail
        .send(msg)
        .then((response) => {
        })
        .catch((error) => {
          console.error(error);
          throw new Response("Error sending email", {status: 500})
        });

      return redirect("/success/")


}
