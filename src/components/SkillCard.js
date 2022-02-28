import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'

import CardStyles from '../styles/components/card.module.scss';
import Image from 'next/image';

const techSkills = [
    {
        key: "1",
        title: "HTML5",
        image: "https://res.cloudinary.com/dcd2fsghf/image/upload/v1646057845/portfolio-res/html_logo_fayyxy.webp"
    },
    {
        key: "2",
        title: "CSS3",
        image: "https://res.cloudinary.com/dcd2fsghf/image/upload/v1646057845/portfolio-res/css_logo_sp4qyh.webp"
    },
    {
        key: "3",
        title: "JAVASCRIPT",
        image: "https://res.cloudinary.com/dcd2fsghf/image/upload/v1646057846/portfolio-res/js_logo_gegrsw.webp"
    },
    {
        key: "4",
        title: "SASS/SCSS",
        image: "https://res.cloudinary.com/dcd2fsghf/image/upload/v1646057846/portfolio-res/sass_logo_azcsdg.webp"
    },
    {
        key: "5",
        title: "TAILWIND CSS",
        image: "https://res.cloudinary.com/dcd2fsghf/image/upload/v1646057846/portfolio-res/tailwind_logo_vrubh3.webp"
    },
    {
        key: "6",
        title: "BOOTSTRAP",
        image: "https://res.cloudinary.com/dcd2fsghf/image/upload/v1646057844/portfolio-res/bootstrap_logo_qadhar.webp"
    },
    {
        key: "7",
        title: "REACT",
        image: "https://res.cloudinary.com/dcd2fsghf/image/upload/v1646057846/portfolio-res/react_logo_jw201i.webp"
    },
    {
        key: "8",
        title: "NEXT.JS",
        image: "https://res.cloudinary.com/dcd2fsghf/image/upload/v1646057846/portfolio-res/nextjs_logo_skoden.webp"
    },
    {
        key: "9",
        title: "SQL DATABASE",
        image: "https://res.cloudinary.com/dcd2fsghf/image/upload/v1646057846/portfolio-res/sql_logo_ptkamq.webp"
    },
    {
        key: "10",
        title: "C#",
        image: "https://res.cloudinary.com/dcd2fsghf/image/upload/v1646057845/portfolio-res/csharp_logo_ogfnzi.webp"
    },
    {
        key: "11",
        title: "JAVA",
        image: "https://res.cloudinary.com/dcd2fsghf/image/upload/v1646057846/portfolio-res/java_logo_wtglkb.webp"
    },
    {
        key: "12",
        title: "NATIVE ANDROID DEVELOPMENT",
        image: "https://res.cloudinary.com/dcd2fsghf/image/upload/v1646057845/portfolio-res/androidStudio_logo_wwyakg.webp"
    },
]

const SkillCard = () => {
    const [viewportRef, embla] = useEmblaCarousel({
        loop: true,
        skipSnaps: false
    });
    const onSelect = useCallback(() => {
        if (!embla) return;
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
      }, [embla, onSelect]);


    return (
        <div className={CardStyles.embla}>
            <div className={CardStyles.embla__viewport} ref={viewportRef}>
                <div className={CardStyles.embla__container}>
                {
                    techSkills.map((skill) => (
                        <div className={CardStyles.embla__slide} key={skill.key}>
                            <div className={CardStyles.embla__slide__inner}>
                                <div className={CardStyles.embla__slide__inner__image}>
                                    <Image src={skill.image} layout="fill" objectFit="contain" alt='Technical Skills Logo Images'/>
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default SkillCard