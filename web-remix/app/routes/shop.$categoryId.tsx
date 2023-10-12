import { useParams } from "@remix-run/react";
import PrettyJson from "~/components/PrettyJson";

export default function ShopCategoryRoute() {
	return (
		<section>
			<PrettyJson data={useParams().categoryId} />
		</section>
	)
}
