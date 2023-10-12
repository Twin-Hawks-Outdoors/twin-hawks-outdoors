import { Outlet } from "@remix-run/react";
import Layout from "~/components/Layout";

export default function Shop() {
	return (
		<Layout>
			<h1>Shop</h1>
			<Outlet />
		</Layout>
	)
}
