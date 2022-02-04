import { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useWindowDimensions } from '../../hooks/useWindowDimensions.js';

export const PageSlider = ({ pageSize, setPageSize}) => {
  const {width, height} = useWindowDimensions();
  const marksFont = {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    letterSpacing: '0.15px'
  };
  
  const [marginTop, setMarginTop] = useState({});
  const [currentValue, setCurrentValue] = useState(5);
  const [perPageMarks, setPageMarks] = useState({
    1: {style:{ ...marginTop, ...marksFont}, label:'3'},
    2: {style:{ ...marginTop, ...marksFont}, label:'6'},
    3: {style:{ ...marginTop, ...marksFont}, label:'9'},
    4: {style:{ ...marginTop, ...marksFont}, label:'12'},
    5: {style:{ ...marginTop, ...marksFont, color:'#FFFFFF'}, label:'15'},
    6: {style:{ ...marginTop, ...marksFont}, label:'50'}
  })

  useEffect(()=>{
    const marginTop = width > 0 && width <= 414 ? {marginTop:'10px'} :
                          width > 414  && height <= 700 ? 
                              { marginTop:'10.5px' } :
                                  width > 414  && height > 700 ? 
                                      {marginTop:'10px'} :
                                          {}

    setMarginTop(marginTop);
  }, [width, height]);

  useEffect(()=>{
    let updatedMarks = {};

    for(let prop in perPageMarks){
      const style = perPageMarks[prop].style.hasOwnProperty('color') ?
          { color:'#FFFFFF', ...marginTop, ...marksFont, } :
              {...marginTop, ...marksFont}       

      const label = perPageMarks[prop].label;
      updatedMarks[prop] = {style, label};
    }

    setPageMarks(updatedMarks);
  }, [ marginTop] );

  const changeValue = (newValue) => {
    setCurrentValue(newValue);
    setPageSize(parseInt(perPageMarks[newValue].label));
    let updatedMarks = {};

    for(let prop in perPageMarks) {  
      const style = parseInt(prop) === newValue ?
          {...marginTop, ...marksFont, color:'#FFFFFF'} :
              {...marginTop, ...marksFont };
                                                
      const label = perPageMarks[prop].label;

      updatedMarks[prop] = { style, label };
    }

    setPageMarks(updatedMarks);
  }

  /*
  * Slider styling depends on window.innnerWidth & window.innerHeight
  * if both are still 0, which means window object not accessible yet,
  * do not render the slider
  */
  if ( width === 0 && height === 0 ) {
    return (
      <></>
    );
  }

  return (
    <Slider
      defaultValue={currentValue}
      min={1}
      max={6}
      step={null}
      onChange={(e) => {changeValue(parseInt(e));}}
      marks={perPageMarks}
      style={{ width: '100%' }}
      dotStyle={{opacity:0}}
      trackStyle={{
          borderRadius:'20px', 
          height:'6px', 
          backgroundImage:'linear-gradient(to right, #FF5C01, #FFD25F)'
      }}
      railStyle={{borderRadius:'20px', height:'6px'}}
      handleStyle={{
          width:'22.5px', 
          height:'22.5px', 
          background:'#1B1B1B', 
          border:'6px solid #FFD05D'
      }}      
    />
  );
}