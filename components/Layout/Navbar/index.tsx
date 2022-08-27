import { FC, useState } from "react";
import { Link } from "@components/Utils/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { CustomImage } from "@components/Utils/CustomImage";
import classNames from "classnames";
import icon from "@assets/icon.svg";
import { CONFIG } from "@libs/config";
import { PAGES } from "@libs/config/pages";

export const Navbar: FC = () => {
	const [hash, setHash] = useState(false);

	const onClose = () => {
		setHash(!hash);
	};

	return (
		<header className="fixed w-full z-10">
			<nav className="px-4 lg:px-6 py-2.5 duration-300 border-b bg-white border-gray-200">
				<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
					<Link href="#" className="flex items-center">
						<CustomImage
							src={icon}
							className="mr-3 h-6 sm:h-9 rounded-md"
							alt="Navbar Logo"
						/>
						<span className="self-center text-xl font-semibold whitespace-nowrap">
							{CONFIG.SEO.title}
						</span>
					</Link>
					<div className="flex items-center lg:order-2">
						<Link
							href="/#contact"
							className="text-white bg-blue-400 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none duration-200"
						>
							İletişim
						</Link>
						<button
							type="button"
							className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden bg-gray-100 hover:bg-gray-200 focus:outline-none ring-2 ring-gray-200 duration-100"
							onClick={onClose}
						>
							<GiHamburgerMenu className="w-5 h-5" />
						</button>
					</div>
					<div
						className={classNames(
							"justify-between items-center w-full lg:flex lg:w-auto lg:order-1",
							{ hidden: !hash },
						)}
					>
						<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
							{PAGES.NAVBAR.map((nav, index) => (
								<li key={index}>
									<Link
										href={nav.link}
										className="block py-2 pr-4 pl-3 lg:p-0 duration-100 text-gray-700 hover:text-gray-900"
									>
										{nav.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};
