import React, { useContext } from 'react';
import { NavContext } from './context/NavContext';

const NavLink = ({ closeOnNavigate, navLinkId, scrollToId }) => {
  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const handleClick = () => {
    closeOnNavigate();
    setActiveNavLinkId(navLinkId);

    var element = document.getElementById(scrollToId);
    var headerOffset = 60;
    var elementPosition = element?.getBoundingClientRect().top;
    var offsetPosition = elementPosition
      ? elementPosition + window.pageYOffset - headerOffset
      : 0;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <span
      id={navLinkId}
      className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  );
};

export default NavLink;
