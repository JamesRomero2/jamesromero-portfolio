import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'

import CardStyles from '../styles/components/card.module.scss';
import Image from 'next/image';

const techSkills = [
    {
        key: "1",
        title: "HTML5",
        image: "/assets/html_logo.png"
    },
    {
        key: "2",
        title: "CSS3",
        image: "/assets/css_logo.png"
    },
    {
        key: "3",
        title: "JAVASCRIPT",
        image: "/assets/js_logo.png"
    },
    {
        key: "4",
        title: "SASS/SCSS",
        image: "/assets/sass_logo.png"
    },
    {
        key: "5",
        title: "TAILWIND CSS",
        image: "/assets/tailwind_logo.png"
    },
    {
        key: "6",
        title: "BOOTSTRAP",
        image: "/assets/bootstrap_logo.png"
    },
    {
        key: "7",
        title: "REACT",
        image: "/assets/react_logo.png"
    },
    {
        key: "8",
        title: "NEXT.JS",
        image: "/assets/next_logo.png"
    },
    {
        key: "9",
        title: "SQL DATABASE",
        image: "/assets/sql_logo.png"
    },
    {
        key: "10",
        title: "C#",
        image: "/assets/csharp_logo.png"
    },
    {
        key: "11",
        title: "JAVA",
        image: "/assets/java_logo.png"
    },
    {
        key: "12",
        title: "NATIVE ANDROID DEVELOPMENT",
        image: "/assets/android_logo.png"
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