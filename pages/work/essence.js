/** @format */

import styles from "../../styles/work.module.scss";
import dynamic from "next/dynamic";
import LazyLoad from "react-lazyload";
import Head from "next/head";
import { useEffect, useState } from "react";

const CaseHero = dynamic(() => import("../../components/Work/caseHero"));
const ProjectInfo = dynamic(() => import("../../components/Work/projectInfo"));
const ProjectCase = dynamic(() => import("../../components/Work/projectCase"));
const Results = dynamic(() => import("../../components/Work/results"));
const Conclusion = dynamic(() => import("../../components/Work/conclusion"));
const ContactSection = dynamic(() => import("../../components/contactSection"));

export default function Essence() {
  function goToTop() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  // const [topScroll, setScroll] = useState({
  //   scrollingUp: false,
  //   scrollingDown: false,
  //   showButton: false,
  // });
  // useEffect(() => {
  //   let currentScrollPosition = 0;
  //   if (window) {
  //     window.onscroll = () => {
  //       let newScrollPosition = window.pageYOffset;
  //       if (newScrollPosition > currentScrollPosition) {
  //         setScroll({
  //           ...topScroll,
  //           scrollingUp: false,
  //           scrollingDown: true,
  //         });
  //       } else {
  //         setScroll({
  //           ...topScroll,
  //           scrollingUp: true,
  //           scrollingDown: false,
  //         });
  //       }
  //       if (window.pageYOffset > 1600) {
  //         setScroll({
  //           showButton: true,
  //         });
  //       } else {
  //         setScroll({
  //           showButton: false,
  //         });
  //       }
  //       currentScrollPosition = newScrollPosition;
  //     };
  //   }
  //   return () => {};
  // }, []);
  return (
    <>
      <Head>
        <title>Project - Essence Naturals</title>
        <meta name='description' content='Essence Naturals, An Ecommerce Web App for daily skincare and Nutrition Essentials' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content='Project - Essence Naturals' />
        <meta property='og:description' content='Essence Naturals, An Ecommerce Web App for daily skincare and Nutrition Essentials' />
        <meta property='og:url' content='https://www.roysonlewis.com/work/essence' />
        <meta property='og:site_name' content='Royson Lewis' />
        <meta property='og:image' content='/essence results mockup@2x.png' />
      </Head>
      <main className={styles.work} id='top'>
        {/* {topScroll.showButton ? (
          <button className='goToTop' onClick={goToTop}>
            <svg xmlns='http://www.w3.org/2000/svg' width='17.164' height='15.921' viewBox='0 0 17.164 15.921'>
              <g id='Icon_feather-arrow-up' data-name='Icon feather-arrow-up' transform='translate(2.121 1.5)'>
                <path id='Path_1275' data-name='Path 1275' d='M18,20.422V7.5' transform='translate(-11.539 -7.5)' fill='none' stroke='#3f3d56' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' />
                <path id='Path_1276' data-name='Path 1276' d='M7.5,13.961,13.961,7.5l6.461,6.461' transform='translate(-7.5 -7.5)' fill='none' stroke='#3f3d56' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' />
              </g>
            </svg>
          </button>
        ) : null} */}
        <CaseHero project='essence' />
        <ProjectInfo project='essence' />
        <ProjectCase project='essence' />
        <LazyLoad>
          <Results project='essence' height={400} />
        </LazyLoad>
        <LazyLoad height={400}>
          <Conclusion project='essence' />
        </LazyLoad>

        <section style={{ backgroundColor: "#f6f6f6", paddingBottom: "3rem" }}>
          <LazyLoad height={400}>
            <ContactSection />
          </LazyLoad>
        </section>
      </main>
    </>
  );
}
