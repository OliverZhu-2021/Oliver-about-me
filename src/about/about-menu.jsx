import { useState } from 'react';
import AboutMenuItem from './about-menu-item';
import AboutSubheading from './about-sub-heading';
import subheadingData from './subheading-data';
import personalIcon from '../assets/pizza.svg';
import educationIcon from '../assets/sushi.svg';
import careerIcon from '../assets/hamburger.svg'; 
import '../style/menu.css'


const AboutMenu = () => {

  const [activeMenuItem, setActiveMenuItem] = useState(1);
  const [activeSubheading, setActiveSubheading] = useState(1);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setActiveSubheading(1);
  };

  const handleSubheadingClick = (subheading) => {
    setActiveSubheading(subheading);
  };

  const menuItems = ['PERSONAL', 'EDUCATION', 'CAREER'];
  const activeMenuTitle = menuItems[activeMenuItem - 1];
  const activeMenuIcon = 
    activeMenuTitle === 'PERSONAL' ? personalIcon : 
    activeMenuTitle === 'EDUCATION' ? educationIcon : careerIcon;
  
  const subheadings = subheadingData[activeMenuItem];

  return(
    <>
      <div className='menu'>
        {
          menuItems.map((item, index) => (
            <AboutMenuItem 
              key={index}
              title={item}
              active={activeMenuItem === index + 1}
              onClick={() => {handleMenuItemClick(index + 1)}}
            />
            )
          )
        }
      </div>
      <div className='sub-container'>
        <div className='icon-title-container'>
          <img 
            src={activeMenuIcon} 
            alt={activeMenuTitle}
            className='icon'
          />
          <h3>{activeMenuTitle}</h3>
        </div>
        {
          subheadings.map((subheading, index) => (
            <AboutSubheading 
              key={index}
              title={subheading.title}
              content={subheading.content}
              active={activeSubheading === index + 1}
              onClick={() => {handleSubheadingClick(index + 1)}}
              menuItem={activeMenuItem}
            />
            )
          )
        }
      </div>
    </>
  )
}


export default AboutMenu