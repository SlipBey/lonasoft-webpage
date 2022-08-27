import { FC } from "react";
import { CONFIG } from "@libs/config";
import { Link } from "@components/Utils/Link";
import { useLocaleParser } from "@libs/localeParser";
import { FiMail, FiMap, FiPhone } from "react-icons/fi";

export const Contact: FC = () => {
	return (
		<div className="container mx-auto">
			<div className="text-center mb-4">
				<h1 className="text-blue-800 font-bold text-4xl">
					{useLocaleParser().get("contact")}
				</h1>
			</div>

			<div className="mt-8 mb-4">
				<div className="p-8 w-full bg-white rounded-lg shadow-2xl flex flex-col">
					<div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-12 space-y-5 md:space-y-0">
						<div className="border-2 border-x-blue-600 border-y-sky-500 p-2 flex flex-col justify-center rounded-md hover:border-y-blue-600">
							<Link
								className="text-gray-800 text-lg font-semibold"
								href={`tel:${CONFIG.CONTACT.PHONE}`}
							>
								<div>
									<FiPhone className="mx-auto w-5 h-5 text-blue-600" />
								</div>
								<div className="mt-2">
									{CONFIG.CONTACT.PHONE}
								</div>
							</Link>
						</div>

						<div className="border-2 border-x-blue-600 border-y-sky-500 p-2 flex flex-col justify-center rounded-md hover:border-y-blue-600">
							<Link
								className="text-gray-800 text-lg font-semibold"
								href={`mailto:${CONFIG.CONTACT.MAIL}`}
							>
								<div>
									<FiMail className="mx-auto w-5 h-5 text-blue-600" />
								</div>
								<div className="mt-2">
									{CONFIG.CONTACT.MAIL}
								</div>
							</Link>
						</div>

						<div className="border-2 border-x-blue-600 border-y-sky-500 p-2 flex flex-col justify-center rounded-md hover:border-y-blue-600">
							<Link
								className="text-gray-800 text-lg font-semibold"
								href={`#`}
							>
								<div>
									<FiMap className="mx-auto w-5 h-5 text-blue-600" />
								</div>
								<div className="mt-2">{CONFIG.CONTACT.MAP}</div>
							</Link>
						</div>
					</div>

					<div className="mt-12 flex filex-direction space-x-5 justify-center">
						{CONFIG.ACCOUNT.map((contact, index) => (
							<Link href={contact.href} key={index}>
								<contact.icon className="w-8 h-8 text-blue-600 hover:text-blue-500" />
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
