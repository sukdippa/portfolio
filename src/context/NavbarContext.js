'use client';

import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext({
  color: 'default',
  setColor: () => {},
  bgColor: 'default',
  setBgColor: () => {},
});

export const NavbarProvider = ({ children }) => {
  const [color, setColor] = useState('default');
  const [bgColor, setBgColor] = useState('default');

  return (
    <NavbarContext.Provider value={{ color, setColor, bgColor, setBgColor }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarColor = () => useContext(NavbarContext);
