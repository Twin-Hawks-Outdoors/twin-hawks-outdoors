import { json } from "@remix-run/node";
import { NavLink, Outlet, useLoaderData, useMatches } from "@remix-run/react";
import groq from "groq";
import { categoryZ } from "types/shared";
import { z } from "zod";
import Layout from "~/components/Layout";
import { cn } from "~/lib/misc";
import { client } from "~/sanity.server";
export const loader = async () => {
  const categories = await client
    .fetch(
      groq`*[_type=="category"] {
		_type,
		_id,
		"slug": slug.current,
		title
	}`
    )
    .then((res) => (res ? z.array(categoryZ).parse(res) : null));

  if (!categories) {
    throw new Response("No categories found", { status: 404 });
  }

  return json(
    { categories },
    {
      headers: {
        "Cache-Control": "public, max-age=7200 s-maxage=7200",
      },
    }
  );
};

type MatchProductData = {
  products: {
    totalCount: number;
  };
};
export default function Shop() {
  const { categories } = useLoaderData<typeof loader>();
  const matches = useMatches() as ReturnType<typeof useMatches>;
  const data = matches[matches.length - 1]?.data as MatchProductData;
  const totalCount = data?.products?.totalCount;

  return (
    <Layout>
      <div className="mx-auto @container container px-4">
        <h1>Shop</h1>
        <div className="flex flex-wrap @lg:flex-nowrap gap-4 items-center mb-12">
          {totalCount && (
            <p className="mb-0 w-full @md:w-auto mr-auto font-bold text-md">
              {totalCount} Products
            </p>
          )}
          <NavLink
            to="/shop/"
            prefetch="intent"
            className={({ isActive }) =>
              cn(
                `text-base font-sans px-2 py-1 shadow-sm shadow-black/50 transition-colors duration-150 rounded-sm border-rust-500 border-2`,
                isActive && `bg-red-500 text-white border-0`
              )
            }
          >
            All
          </NavLink>
          {categories?.map((category) => (
            <NavLink
              prefetch="intent"
              className={({ isActive }) =>
                cn(
                  `text-base font-sans px-2 py-1 shadow shadow-black/50 transition-colors duration-150 rounded-sm border-2 border-rust-500`,
                  isActive && `bg-rust-500 text-white border-0`
                )
              }
              to={`${category.slug}/`}
              key={category._id}
            >
              {category.title}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </Layout>
  );
}
