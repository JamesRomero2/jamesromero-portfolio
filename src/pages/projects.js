// import Image from 'next/image';
// import Link from 'next/link';

import Style from "../styles/components/projectPage.module.scss";

// const ProjectCard = ({imageUrl, title, description, sourceCode, websiteLink, websiteLinkTitle, projectGroup}) => {
//     return (
//         <div className={Style.card}>
            
//         </div>
//     )
// }

const projects = () => {
    return (
        <div className={Style.page}>
            <div className="container">
                <nav className={Style.page__nav}>
                    <div className={Style.page__nav__btn}>
                        Website<br/>
                        &ensp;Redesign
                    </div>
                    <div className={Style.page__nav__btn}>
                        Design<br/>
                        &ensp;to Code
                    </div>
                    <div className={Style.page__nav__btn}>
                        Personal<br/>
                        &ensp;Projects
                    </div>
                </nav>
                <hr/>
                <main className={Style.page__main}>
                    {/* <ProjectCard/> */}
                </main>
            </div>
        </div>
    )
}

export default projects