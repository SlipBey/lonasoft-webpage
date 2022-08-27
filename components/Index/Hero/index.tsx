import { CONFIG } from "@libs/config";
import { useLocaleParser } from "@libs/localeParser";
import { FC } from "react";

export const Hero: FC = () => {
	return (
		<div className="inline-block w-full h-ful">
			<div className="w-full min-h-screen -z-1 bg-blue-400">
				<div className="m-0 p-9 relative">
					<div className="relative z-5">
						<div className="container">
							<div className="flex flex-wrap mx-16 my-48 justify-center">
								<div className="text-center">
									<h1 className="font-bold text-6xl text-white block mb-5">
										{CONFIG.SEO.title} -{" "}
										{useLocaleParser().get("hero_title")}
									</h1>
									<p className="font-semibold text-3xl text-gray-200 mb-5">
										{useLocaleParser().get("hero_text")}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
