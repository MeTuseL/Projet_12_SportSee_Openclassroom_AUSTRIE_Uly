import { NavLink, Link } from 'react-router-dom'

import sportSeeLogo from '../../assets/svg/logo/sportsee-logo.svg'
import relaxIcon from '../../assets/svg/navLeftIcons/relax-icon.svg'
import swimIcon from '../../assets/svg/navLeftIcons/swim-icon.svg'
import cycleIcon from '../../assets/svg/navLeftIcons/cycle-icon.svg'
import trainIcon from '../../assets/svg/navLeftIcons/train-icon.svg'

import styles from './styles/navigationBar.module.scss'

function NavigationBar() {
  const isActiveNav = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  })
  return (
    <>
      <div className={styles.container_top}>
        <nav className={styles.container_top__nav}>
          <Link to="/">
            <img
              className={styles.container_top__nav__logo}
              src={sportSeeLogo}
              alt="Logo de Sportsee"
            />
          </Link>
          <NavLink
            className={styles.container_top__nav__NavLink}
            to="/"
            style={isActiveNav}
          >
            Accueil
          </NavLink>
          <NavLink
            className={styles.container_top__nav__NavLink}
            to={'/tableau-bord/' + process.env.REACT_APP_IDUSER}
            style={isActiveNav}
          >
            Profil
          </NavLink>
          <NavLink
            className={styles.container_top__nav__NavLink}
            to="/reglage"
            style={isActiveNav}
          >
            Réglage
          </NavLink>
          <NavLink
            className={styles.container_top__nav__NavLink}
            to="/communaute"
            style={isActiveNav}
          >
            Communauté
          </NavLink>
        </nav>
      </div>
      <div className={styles.container_left}>
        <nav className={styles.container_left__nav}>
          <Link to="/relaxation">
            <img
              className={styles.container_left__nav__icon}
              src={relaxIcon}
              alt="Relaxation icône"
            />
          </Link>
          <Link to="/natation">
            <img
              className={styles.container_left__nav__icon}
              src={swimIcon}
              alt="Natation icône"
            />
          </Link>
          <Link to="/cyclisme">
            <img
              className={styles.container_left__nav__icon}
              src={cycleIcon}
              alt="Cyclisme icône"
            />
          </Link>
          <Link to="/musculation">
            <img
              className={styles.container_left__nav__icon}
              src={trainIcon}
              alt="Musculation icône"
            />
          </Link>
        </nav>
        <span className={styles.container_left__span}>
          Copiryght, SportSee 2020
        </span>
      </div>
    </>
  )
}
export default NavigationBar
