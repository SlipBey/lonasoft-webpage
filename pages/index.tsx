import { NextPage } from "next";
import { Layout } from "@components/Layout";
import { Hero } from "@components/Index/Hero";
import { About } from "@components/Index/About";
import { Project } from "@components/Index/Project";
import { Contact } from "@components/Index/Contact";
import { useLocaleParser } from "@libs/localeParser";

const HomePage: NextPage = () => {
	const parser = useLocaleParser();

	return (
		<Layout title={parser.get("home")}>
			<section className="mx-auto" id="home">
				<Hero />
			</section>
			<section className="relative py-12" id="about">
				<About />
			</section>
			<section className="relative py-12" id="projects">
				<Project />
			</section>
			<section className="relative py-12" id="contact">
				<Contact />
			</section>
		</Layout>
	);
};

export default HomePage;
