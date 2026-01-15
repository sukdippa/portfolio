'use client';

import { useEffect } from 'react';
import { useNavbarColor } from '../context/NavbarContext';

export default function SetNavbarColor({ color, bgColor }) {
  const { setColor, setBgColor } = useNavbarColor();

  useEffect(() => {
    if (color) setColor(color);
    if (bgColor) setBgColor(bgColor);

    return () => {
      if (color) setColor('default');
      if (bgColor) setBgColor('default');
    };
  }, [color, bgColor, setColor, setBgColor]);

  return null;
}
