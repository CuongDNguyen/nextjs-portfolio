import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Skills from './Skills'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { userinfo, ctaTexts, headings } from '../Constants/userinfo'
import Experiences from "./Experiences";

const HomePage = ({ currentTheme }) => {
    return (
        <div>
            <div className={styles.homeheading} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.heading}>{userinfo.greeting.title}</h1>
                <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>{userinfo.greeting.subtitle}</h2>
            </div>
            <div className={styles.homeWorkSection} id="work">
                <h1 className={styles.workheading} data-aos="fade-up">{headings.workHomePage}</h1>
                {
                    <Experiences currentTheme={currentTheme} />
                }
            </div>
            <div id="skills" className={styles.homeSkillSection} style={{ backgroundColor: currentTheme.secondary }}>
                <Skills currentTheme={currentTheme} />
            </div>
            <div id="about" className={styles.homeAboutSection} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.workheading} data-aos="fade-up">{headings.about}</h1>
                <p className={styles.aboutText} style={{ color: currentTheme.subtext }} data-aos="fade-up">{userinfo.about.content}</p>
                <div data-aos="fade-up" style={{ textAlign: 'center', padding: '1rem 0', margin: '1rem 0', position: 'relative', display: 'flex', color: currentTheme.subtext }}>
                    <Link href={userinfo.about.resume} target="_blank"><a className={styles.cta4} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`, display: 'flex', alignItems: 'center' }}>{ctaTexts.resumeCTA}&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon width="15px" height="15px" icon={faExternalLinkAlt} /></a></Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
