import type { MetaFunction } from "@remix-run/node";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => {
	return [
		{
			name: "robots",
			content: "noindex ",
		},
		{
			title: "Success",
		}
	]
}

export default function SuccessRoute() {
	return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1>Success!!</h1>
        <p>We will be reaching out to you shortly to answer your questions!</p>
      </div>
    </Layout>
  );
}
