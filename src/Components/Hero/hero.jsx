import React, { useState, useEffect } from 'react';
import arrow from '../assets/arrow_icon.png';

const Hero = ({ heroData, setHeroCount, heroCount, setplayStatus, playStatus }) => {
  const { text1, text2, text3 } = heroData || {};
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const textArray = [text1, text2, text3].filter(Boolean);
  
  useEffect(() => {
    if (!textArray.length) return;
    
    const currentText = textArray[currentTextIndex];
    let timer;
    
    if (isTyping) {
      if (currentIndex < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev + currentText.charAt(currentIndex));
          setCurrentIndex(currentIndex + 1);
        }, 100);
      } else {
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (currentIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
          setCurrentIndex(currentIndex - 1);
        }, 50);
      } else {
        setIsTyping(true);
        setCurrentTextIndex((currentTextIndex + 1) % textArray.length);
      }
    }
    
    return () => clearTimeout(timer);
  }, [currentIndex, currentTextIndex, isTyping, textArray]);
  return (
    // Container utama - Atur margin, padding, dan posisi
    <div className="ml-0 px-4 md:px-0 mt-[700px] relative max-w-7xl text-center flex flex-col justify-center items-center">
      {/* Container text - Atur tinggi dan posisi */}
      <div className="relative h-[100px] mb-20">
        {/* Typewriter text container */}
        <div className="relaive top-0 left-0 w-full">
          {/* Text dengan styling */}
          <p className="text-white text-5xl md:text-7xl lg:text-[90px] font-bold leading-tight relative inline-block whitespace-nowrap overflow-hidden">
            {displayText}
            {/* Cursor dengan animasi */}
            <span className="inline-block ml-[5px] w-1 md:w-[3px] h-[60px] md:h-[80px] bg-white animate-blink align-middle"></span>
          </p>  
        </div>
      </div>
      
      {/* Button Let's Explore dengan hover effect */}
      <div 
        className="relative flex items-center gap-4 md:gap-[10px] w-fit mt-5 px-6 md:px-[30px] py-4 md:py-[10px] 
                   rounded-full bg-white cursor-pointer 
                   transition-all duration-300 ease-in-out 
                   hover:text-blue-900 hover:translate-x-2 hover:shadow-lg
                   active:transform active:translate-y-1
                   z-[2]"
        onClick={() => setplayStatus(!playStatus)}
      >
        <p className="text-lg md:text-xl font-medium">Let's Explore</p>
        <img 
          src={arrow} 
          alt="Explore arrow" 
          className="w-[40px] md:w-[60px] h-auto transition-transform duration-300 ease-in-out hover:translate-x-2"
        />
      </div>
    </div>
  );
};

export default Hero;