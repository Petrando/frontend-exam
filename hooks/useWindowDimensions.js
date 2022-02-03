import { useState, useEffect } from 'react';

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({ width:0, height:0 });
    
  useEffect(()=>{
    listenToResize();
    window.addEventListener("resize", listenToResize);

    return ()=>window.removeEventListener("resize", listenToResize);
  }, []);

  const listenToResize = () => {
      const { innerWidth:width, innerHeight:height } = window;
      setWindowDimensions({ width, height });
  }

  return windowDimensions;
}