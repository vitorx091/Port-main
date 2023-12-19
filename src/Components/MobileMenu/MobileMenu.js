import { useState } from 'react';
import './MobileMenu.css';

function MobileMenu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleMenu} className="menu-button">
        ☰
      </button>
      <div className={isOpen ? 'MenuOpen' : 'menu menuClose'}>
      <ul className="menu-list">
        <li><a onClick={toggleMenu} href={props.linkStart}>{props.start}</a></li>
        <li><a onClick={toggleMenu} href={props.linkAboutMe}>{props.AboutMe}</a></li>
        <li><a onClick={toggleMenu} href={props.linkProjects}>{props.Projects}</a></li>
        <li><a onClick={toggleMenu} href={props.linkContact}>{props.Contact}</a></li>
        
      </ul></div>
    </div>
  );
}

export default MobileMenu;
