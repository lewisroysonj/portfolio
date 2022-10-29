/** @format */
import styles from "../../styles/work.module.scss";
import EssenceHeroArt from "./essence/essenceHeroArt";
import EssenceHeroArtDesktop from "./essence/essenceHeroArtDesktop";
import EssenceLogo from "./essence/essenceLogo";
import VamyouHeroArt from "./vamyou/vamyouHeroArt";
import VamyouHeroArtDesktop from "./vamyou/vamyouHeroArtDesktop";
import VamyouLogo from "./vamyou/vamyouLogo";

export default function EssenceHero(props) {
  const essence = {
    heroArt: <EssenceHeroArt />,
    heroArtDesktop: <EssenceHeroArtDesktop />,
    logo: "/essence logo.png",
    description: "A daily essential product company Inspired by the nature!",
    link: "https://essence-server.web.app/",
  };

  const vamyou = {
    heroArt: <VamyouHeroArt />,
    heroArtDesktop: <VamyouHeroArtDesktop />,
    logo: "/vamyouLogo@2x.png",
    description: "A blog featuring all the latest trends and techniques essential for success in the field of business and finance.",
    link: "https://jen-blog-284811.uc.r.appspot.com/",
  };

  const { heroArt, heroArtDesktop, logo, description, link } = eval(props.project);

  return (
    <section className={styles.hero}>
      <div className={styles.heroArtMobile}>{heroArt}</div>
      <div className={styles.heroArtDesktop}>{heroArtDesktop}</div>
      <div className={styles.workTitle}>
        {/* {logo} */}
        <img className={styles.logo} src={logo} alt='logo'></img>
        <h4>{description}</h4>
        <a rel='noreferrer' target='_blank' href={link}>
          <button>Launch Project</button>
        </a>
      </div>
    </section>
  );
}
