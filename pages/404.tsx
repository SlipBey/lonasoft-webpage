import { NextPage } from "next";
import { Layout } from "@components/Layout";
import { Link } from "@components/Utils/Link";
import { useLocaleParser } from "@libs/localeParser";

const ErrorPage: NextPage = () => {
	return (
		<Layout title={useLocaleParser().get("404")}>
			<section className="bg-white">
				<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<div className="mx-auto max-w-screen-sm text-center">
						<h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-sky-600">
							404
						</h1>
						<p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
							{useLocaleParser().get("404_title")}
						</p>
						<p className="mb-4 text-lg font-light text-gray-500">
							{useLocaleParser().get("404_text")}
						</p>
						<Link
							href="/"
							className="inline-flex text-white bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4 duration-200"
						>
							{useLocaleParser().get("home")}
						</Link>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default ErrorPage;
