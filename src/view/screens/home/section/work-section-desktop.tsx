import React, { useState, useEffect } from "react";

import Link from "next/link";

import styles from "../main.module.scss";
import SlideLeftIcon from '../assets/slide-left-icon.svg'
import SlideRightIcon from '../assets/slide-right-icon.svg'

export default function WorkSectionDesktop() {
  const [slider, setSlider] = useState({
    index: 0,
  });

  const sliderWorks = [
    {
      image: "/essence slider work@2x.png",
      logo: "/essenceLogo.png",
      description: "An Ecommerce web app featuring daily essential  products inspired from nature for a better future.",
      siteLink: "https://essence-server.web.app/",
      caseLink: "/work/essence",
      accentColor: "#58CF6E",
    },
    {
      image: "/vamyou work slider@2x.png",
      logo: "/vamyouLogo.png",
      description: "A blog featuring all the latest trends and techniques essential for success in the field of business and finance.",
      siteLink: "https://jen-blog-284811.uc.r.appspot.com/",
      caseLink: "/work/vamyou",
      accentColor: "#FC326F",
    },
  ];

  const totalWidth = (sliderWorks.length - 1) * -100;

  function slideLeft() {
    if (slider.index !== totalWidth) {
      setSlider({
        ...slider,
        index: slider.index - 100,
      });
    } else {
      setSlider({
        ...slider,
        index: 0,
      });
    }
  }

  useEffect(() => {
    const intervalID = setInterval(slideLeft, 3500);
    return () => {
      clearInterval(intervalID);
    };
  }, [slider.index]);

  function slideRight() {
    if (slider.index !== 0) {
      setSlider({
        ...slider,
        index: slider.index + 100,
      });
    } else {
      setSlider({
        ...slider,
        index: totalWidth,
      });
    }
  }

  const setSlide: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const index = Number(e.currentTarget.className)
    if (index === 0) {
      setSlider({
        ...slider,
        index: 0,
      });
    } else {
      setSlider({
        ...slider,
        index: index * -100,
      });
    }
  }

  return (
    <section className={styles.workSectionDesktop}>
      <h2>Work</h2>
      <section className={styles.workSlider}>
        <div className={styles.sliderContainer}>
          {sliderWorks.map((work) => (
              <React.Fragment key={work.logo}>
                <div style={{ transform: `translateX(${slider.index}vw)` }} key={work.image}>
                  <div className={styles.imageContainer}>
                    <img src={work.image} alt={work.image} />
                  </div>
                  <section className={styles.infoContainer}>
                    <div className={styles.logoContainer}>
                      <img src={work.logo} alt={work.logo} />
                    </div>
                    <p>{work.description}</p>
                    <div className={styles.buttonContainer}>
                      <a rel='noreferrer' target='_blank' href={work.siteLink}>
                        <button>View Live Project</button>
                      </a>
                      <Link href={work.caseLink}>
                        <button style={{ border: `5px solid ${work.accentColor}` }}>View Case</button>
                      </Link>
                    </div>
                  </section>
                </div>
              </React.Fragment>
            ))}
        </div>
        <div className={styles.sliderButtons}>
          <img onClick={slideRight} alt='Right slider icon' src={SlideLeftIcon} />
          <img onClick={slideLeft} alt='left slider icon' src={SlideRightIcon} />
        </div>
      </section>
      <div className={styles.sliderDotContainer}>
        {sliderWorks.map((work) => <div onClick={setSlide} className={sliderWorks.indexOf(work).toString()} key={work.image} id={slider.index === sliderWorks.indexOf(work) * -100 ? "currentDot" : ""} />)}
      </div>
    </section>
  );
}
