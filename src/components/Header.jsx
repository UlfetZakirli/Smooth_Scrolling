import { useContext } from "react"
import styles from "../styles/Header.module.css"
import { NavContext } from './../context/NavContext';
const Header = () => {
    const { activeLinkId } = useContext(NavContext)
    const navLinks = ['Home', 'Destinations', 'Hotels', 'Flights', 'Bookings']

    const renderNavLink = (content) => {
        const scrollToId = `${content.toLowerCase()}Section`

        const handleClickNav = () => {
            document.getElementById(scrollToId).scrollIntoView({ behavior: 'smooth' })
        }

        return (
            <ul key={content}>
                <li>
                    <button className={activeLinkId === content ? styles.activeClass : ''} onClick={handleClickNav}>{content}</button>
                </li>
            </ul>
        )
    }

    const handleClickLogo = () => {
        document.getElementById('homeSection').scrollIntoView({ behavior: 'smooth' })
    }



    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.navContainer}>
                    <h1 onClick={handleClickLogo}>Scrolling</h1>
                    <nav>
                        {navLinks.map((nav) => renderNavLink(nav))}
                    </nav>
                </div>
            </div>

        </header>
    )
}

export default Header