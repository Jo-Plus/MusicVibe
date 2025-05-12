'use client'
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { IoSunnySharp } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";

const ThemeToggle = () => {
  const [mounted , setMounted] = useState(false);
  const { theme , setTheme , systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className='p-2 transition'
    >
      {currentTheme === 'dark' ? (
        <IoSunnySharp className='text-white w-8 h-8 cursor-pointer' />
      ) : (
        <IoMdMoon className='text-black w-8 h-8 cursor-pointer' />
      )}
    </button>
  );
}

export default ThemeToggle;
