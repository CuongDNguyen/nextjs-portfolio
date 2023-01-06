import styles from '../styles/Work.module.css'
import { headings, userinfo } from '../Constants/userinfo'
import Experiences from './Experiences';

const Work = ({ currentTheme }) => {
    return (
        <div>
            <div className={styles.workHeading}>{headings.workMainPage}</div>
            {
                userinfo.experience.visible ? <Experiences currentTheme={currentTheme} /> : null
            }
        </div>
    )
}

export default Work
