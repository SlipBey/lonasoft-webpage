import type { FC } from "react";
import { Link } from "@components/Utils/Link";
import { CustomImage } from "@components/Utils/CustomImage";
import Icon from "@assets/icon.svg";
import { PROJECTS } from "@libs/config/projects";
import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { PAGES } from "@libs/config/pages";

export const Footer: FC = () => {
	return (
		<footer className="p-4 bg-white sm:p-6">
			<div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
				<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 pt-10 lg:pt-12 mb-16">
					<div className="col-span-full lg:col-span-2">
						<div className="lg:-mt-2 mb-4">
							<span className="inline-flex items-center text-xl md:text-2xl font-bold gap-2">
								<CustomImage
									className="w-8 h-auto text-indigo-500"
									src={Icon}
									alt=""
								/>
								{CONFIG.SEO.title}
							</span>
						</div>

						<p
							className="sm:pr-8 mb-6"
							dangerouslySetInnerHTML={{
								__html: useLocaleParser().get("footer_text"),
							}}
						/>
					</div>

					<div>
						<div className="text-gray-700 font-bold tracking-widest uppercase mb-4">
							{useLocaleParser().get("project")}
						</div>

						<nav className="flex flex-col gap-4">
							{PROJECTS.map((project, index) => (
								<div key={index}>
									<Link
										href={project.link}
										className="text-gray-800 hover:text-sky-600 transition duration-100"
									>
										{project.title}
									</Link>
								</div>
							))}
						</nav>
					</div>

					<div>
						<div className="text-gray-700 font-bold tracking-widest uppercase mb-4">
							{useLocaleParser().get("other")}
						</div>

						<nav className="flex flex-col gap-4">
							{PAGES.FOOTER.map((project, index) => (
								<div key={index}>
									<Link
										href={project.href}
										className="text-gray-800 hover:text-sky-600 transition duration-100"
									>
										{project.name}
									</Link>
								</div>
							))}
						</nav>
					</div>

					<div>
						<div className="text-gray-700 font-bold tracking-widest uppercase mb-4">
							{useLocaleParser().get("pages")}
						</div>

						<nav className="flex flex-col gap-4">
							{PAGES.NAVBAR.map((project, index) => (
								<div key={index}>
									<Link
										href={project.link}
										className="text-gray-800 hover:text-sky-600 transition duration-100"
									>
										{project.name}
									</Link>
								</div>
							))}
						</nav>
					</div>
				</div>
				<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
				<div className="sm:flex sm:items-center sm:justify-between">
					<span className="text-medium text-gray-800 sm:text-center">
						&copy; {new Date().getFullYear()} All rights reserved.
						Made by{" "}
						<Link
							className="text-blue-600 hover:text-blue-500"
							href="https://slip.slipyme.com"
						>
							Slipyme
						</Link>
						.
					</span>
				</div>
			</div>
		</footer>
	);
};
