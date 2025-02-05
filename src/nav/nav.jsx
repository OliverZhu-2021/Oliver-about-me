import { Link, useLocation } from 'react-router-dom';
import kangaroo from '../assets/kangaroo.svg';
import elephant from '../assets/elephant.svg';
import camel from '../assets/camel.svg'
import bear from '../assets/bear.svg'
import '../style/nav.css'


const Nav = () => {

  const location = useLocation();
  
  const getNavPositionClass = () => {
    switch(location.pathname) {
      case '/':
        return 'nav-about';
      case '/skills':
        return 'nav-skills';
      case '/projects':
        return 'nav-projects';
      case '/contact':
        return 'nav-contact';
      default:
        return '';
    }
  }

  const getPageTitle = () => {
    switch(location.pathname) {
        case '/':
          return 'ABOUT';
        case '/skills':
          return 'SKILLS';
        case '/projects':
          return 'PROJECTS';
        case '/contact':
          return 'CONTACT';
        default:
          return '';
      }
  }

  const navPositionClass = getNavPositionClass();
  const pageTitle = getPageTitle();

  const isCurrentPage = (navClass) => {
    return navClass === navPositionClass;
  };

  const renderNavLink = (to, imgSrc, altText, navClass) => {
    const isCurrent = isCurrentPage(navClass);
    const linkClass = isCurrent ? 'nav-link current' : 'nav-link';
    
    return (
      <Link to={to} className={linkClass}>
        <img src={imgSrc} alt={altText} />
        {isCurrent && <h1 className='page-title'>{pageTitle}</h1>}
      </Link>
    );
  };

  return(
    <>
      <nav className={`nav ${navPositionClass}`}>
        {
          renderNavLink(
            '/',
            kangaroo,
            'astronaut helmet icon',
            'nav-about'
          )
        }
        {
          renderNavLink(
            '/skills',
            elephant,
            'astronaut helmet icon',
            'nav-skills'
          )
        }
        {
          renderNavLink(
            '/projects',
            camel,
            'stack icon',
            'nav-projects'
          )
        }
        {
          renderNavLink(
            '/contact',
            bear,
            'envelop icon',
            'nav-contact'
          )
        }

      </nav>
    </>
  )
}

export default Nav
