import { CustomImage } from "@components/Utils/CustomImage";
import { Link } from "@components/Utils/Link";
import { PROJECTS } from "@libs/config/projects";
import { useLocaleParser } from "@libs/localeParser";
import { FC } from "react";

export const Project: FC = () => {
	return (
		<div className="container mx-auto">
			<div className="text-center mb-4">
				<h1 className="text-blue-800 font-bold text-4xl">
					{useLocaleParser().get("project")}
				</h1>
				<p
					className="text-gray-700 font-semibold text-medium mt-3"
					dangerouslySetInnerHTML={{
						__html: useLocaleParser().get("project_text"),
					}}
				/>
			</div>

			<div className="mt-8 mb-4">
				<div className="flex flex-col">
					{PROJECTS.map((project, index) => (
						<Link href={project.link} key={index} className="m-3">
							<div className="flex flex-row bg-white shadow-xl hover:shadow-2xl duration-200 justify-start w-full rounded-xl p-3">
								<div>
									<CustomImage
										className="w-36"
										src={project.icon}
										alt="Project Image"
									/>
								</div>

								<div className="ml-3">
									<h1 className="font-bold text-2xl">
										{project.title}
									</h1>
									<p className="font-semibold text-medium mt-2">
										{project.text}
									</p>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
