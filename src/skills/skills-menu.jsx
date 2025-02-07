import '../style/skills-menu.css';
import classNames from 'classnames';
import skills from './skills-data';
import frontendIcon from '../assets/coconut.svg';
import backendIcon from '../assets/taco.svg';
import { useState } from 'react';

const SkillsMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(1)

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const menuItems = ['FRONT-END', 'BACK-END'];
  const currentIcon = activeMenuItem === 1 ? frontendIcon : backendIcon;
  
  return (
    <div className='skill-menu'>
      {
        menuItems.map((item, index) => (
          <div
            key={index}
            className={classNames('skill-item', {
              activeSkill: activeMenuItem === index + 1,
            })}
            onClick={() => handleMenuItemClick(index + 1)}
          >
            <h2 className='skill-title'>{item}</h2>
          </div>
        ))
      }
      <img className='skill-icon' src={currentIcon} alt='current skill'/>
      <div
        className='skill-sub-container'
      >
        {
          skills[activeMenuItem].map((skill, index) => (
            <div
              key={index}
              className={`skill-sub-container-${activeMenuItem}`}
            >
              <h3>{skill.title}</h3>
              <div className='level-container'>
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`level-point ${
                      i < skill.level ? 'filled' : 'unfilled'
                    }`}
                  >
                  </div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default SkillsMenu