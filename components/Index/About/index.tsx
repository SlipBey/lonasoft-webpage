import { useLocaleParser } from "@libs/localeParser";
import { FC } from "react";

export const About: FC = () => {
	return (
		<div className="container mx-auto">
			<div className="text-center mb-4">
				<h1 className="text-blue-800 font-bold text-4xl">
					{useLocaleParser().get("about")}
				</h1>
				<p
					className="text-gray-700 font-semibold text-xl mt-3"
					dangerouslySetInnerHTML={{
						__html: useLocaleParser().get("about_text"),
					}}
				/>
			</div>
		</div>
	);
};
