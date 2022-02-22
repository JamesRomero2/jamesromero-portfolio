import Image from "next/image";
import dynamic from "next/dynamic";

import Meta from "../components/global/Meta"
import HomeStyles from "../styles/components/home.module.scss";
import Logo3DLoader from "../components/lib/Logo3DLoader";
import SocialMediaLinks from "../components/SocialMediaLinks";
import ContactForm from "../components/ContactForm";
// import ProjectCard from "../components/ProjectCard";


const LazyLogo = dynamic(() => import('../components/Logo3D'), {
	ssr: false,
	loading: () => <Logo3DLoader/>
})
const LazyCard = dynamic(() => import("../components/SkillCard"), {
	ssr: false, 
	loading: () => <Logo3DLoader/>
})
const Home = () => {
	return (
		<>
			<Meta title="Home - James Romero Portfolio"/>
			<main className={HomeStyles.section__main}>
				<div className={HomeStyles.section__main__top}>
					<div className={HomeStyles.section__main__top__left}>
						<p className={HomeStyles.section__main__top__left__upperText}>
							CODING IS FUN
						</p>
						<p className={HomeStyles.section__main__top__left__lowerText}>
							CONSISTENCY &amp; CREATIVITY
						</p>
						<button type="button" className={HomeStyles.section__main__top__left__button}>
							CONTACT ME
						</button>
					</div>
					<div className={HomeStyles.section__main__top__right}>
						<Image src={'/assets/Image1.jpg'} layout="fill" className={HomeStyles.section__main__top__right__image} objectFit="cover" alt="First Impression Image" priority/>
					</div>
				</div>
				<div className={HomeStyles.section__main__bottom}>
					<p>
						UI / UX Designer | Front-End Developer
					</p>
				</div>
			</main>
			<div className="container">
			<section className={HomeStyles.section__about}>
				<p className={HomeStyles.section__about__title}>
						ABOUT ME
				</p>
				<div className={HomeStyles.section__about__container}>
					<div className={HomeStyles.section__about__container__left}>
						<div className={HomeStyles.section__about__container__left__model}>
							<LazyLogo/> 
						</div>
					</div>
					<div className={HomeStyles.section__about__container__right}>
						<article className={HomeStyles.section__about__container__right__article}>
							<p>
								&emsp; Hello my name is James L. Romero, I am a 3rd-year student taking Bachelor of Science in Information Technology from the Philippines. I have a passion and determination in learning front-end development and striving to be a full stack developer. Solving real-life problems using my products is one of my goals.
							</p>
						</article>
					</div>
				</div>
			</section>
			<section className={HomeStyles.section__skills}>
				<div className={HomeStyles.section__skills__title}>
					SKILLS
				</div>
				<div className={HomeStyles.section__skills__lower}>
					<LazyCard/>
				</div>
				<button type="button" className={HomeStyles.section__skills__button}>
					<a href="/Resume.pdf" target={"_blank"} rel={"noreferrer"}>
						Download Resume
					</a>
				</button>
			</section>
			<section className={HomeStyles.section__contact}>
				<div className={HomeStyles.section__contact__upper}>
					<p>
						GET IN TOUCH
					</p>
				</div>
				<div className={HomeStyles.section__contact__lower}>
					<div className={HomeStyles.section__contact__lower__left}>
						<SocialMediaLinks/>
					</div>
					<div className={HomeStyles.section__contact__lower__right}>
						<ContactForm/>
					</div>
				</div>
			</section>
			</div>
		</>
	)
}

export default Home;
