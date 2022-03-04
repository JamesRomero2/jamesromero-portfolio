import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'

import CardStyles from '../styles/components/card.module.scss';
import Image from 'next/image';

const techSkills = [
    {
        key: "1",
        title: "HTML5",
        image: "https://res.cloudinary.com/blueshomepage/image/upload/v1646375595/portfolio/html_logo_v2erlh.webp"
    },
    {
        key: "2",
        title: "CSS3",
        image: "https://res.cloudinary.com/blueshomepage/image/upload/v1646375595/portfolio/css_logo_yx87rn.webp"
    },
    {
        key: "3",
        title: "JAVASCRIPT",
        image: "https://res.cloudinary.com/blueshomepage/image/upload/v1646375595/portfolio/js_logo_rqpasz.webp"
    },
    {
        key: "4",
        title: "SASS/SCSS",
        image: "https://res.cloudinary.com/blueshomepage/image/upload/v1646375596/portfolio/sass_logo_b6vs6c.webp"
    },
    {
        key: "5",
        title: "TAILWIND CSS",
        image: "https://res.cloudinary.com/blueshomepage/image/upload/v1646375596/portfolio/tailwind_logo_cdrt6w.webp"
    },
    {
        key: "6",
        title: "BOOTSTRAP",
        image: "https://res.cloudinary.com/blueshomepage/image/upload/v1646375595/portfolio/bootstrap_logo_yrlgvg.webp"
    },
    {
        key: "7",
        title: "REACT",
        image: "https://res.cloudinary.com/blueshomepage/image/upload/v1646375596/portfolio/react_logo_fe6loc.webp"
    },
    {
        key: "8",
        title: "NEXT.JS",
        image: "https://res.cloudinary.com/blueshomepage/image/upload/v1646375595/portfolio/nextjs_logo_qfpyxq.webp"
    },
    {
        key: "9",
        title: "SQL DATABASE",
        image: "https://res.cloudinary.com/blueshomepage/image/upload/v1646375596/portfolio/sql_logo_eqpl1r.webp"
    },
    {
        key: "10",
        title: "C#",
        image: "https://res.cloudinary.com/blueshomepage/image/upload/v1646375595/portfolio/csharp_logo_nf2kso.webp"
    },
    {
        key: "11",
        title: "JAVA",
        image: "https://res.cloudinary.com/blueshomepage/image/upload/v1646375595/portfolio/java_logo_mhhmm1.webp"
    },
    {
        key: "12",
        title: "NATIVE ANDROID DEVELOPMENT",
        image: "https://res.cloudinary.com/blueshomepage/image/upload/v1646375595/portfolio/androidStudio_logo_ewbbuq.webp"
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