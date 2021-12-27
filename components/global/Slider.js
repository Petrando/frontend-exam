import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const marksFont = {
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "16px",
  //line-height: 150%;
  /* identical to box height, or 24px */  
  letterSpacing: "0.15px"
}

const MySlider = ({ itemPerPage, setItemPerPage}) => {
  const {width, height} = useWindowDimensions()
  
  const [marginTop, setMarginTop] = useState({});
  const [currentValue, setCurrentValue] = useState(5);
  const [perPageMarks, setPageMarks] = useState({
    1: {style:{ ...marginTop, ...marksFont}, label:"3"},
    2: {style:{ ...marginTop, ...marksFont}, label:"6"},
    3: {style:{ ...marginTop, ...marksFont}, label:"9"},
    4: {style:{ ...marginTop, ...marksFont}, label:"12"},
    5: {style:{ ...marginTop, ...marksFont, color:"#FFFFFF"}, label:"15"},
    6: {style:{ ...marginTop, ...marksFont}, label:"50"}
  })

  useEffect(()=>{
    const marginTop = width > 0 && width <= 414 ? {marginTop:'10px'} :
                      width > 414 && height > 640 ? {marginTop:'10px'} :
                      {}
    setMarginTop(marginTop)
  }, [width, height]);

  useEffect(()=>{
    let updatedMarks = {}
    for(let prop in perPageMarks){
      const style = perPageMarks[prop].style.hasOwnProperty('color')?{...marginTop, ...marksFont, color:"#FFFFFF"}:
                                                                     {...marginTop, ...marksFont}       

      const label = perPageMarks[prop].label;
      updatedMarks[prop] = {style, label}
    }
    setPageMarks(updatedMarks)
  }, [marginTop])

  useEffect(()=>{

  }, [itemPerPage])

  const changeValue = (newValue) => {
    setCurrentValue(newValue);
    setItemPerPage(parseInt(perPageMarks[newValue].label))
    let updatedMarks = {}
    for(let prop in perPageMarks){
      
      const style = parseInt(prop) === newValue?{...marginTop, ...marksFont, color:"#FFFFFF"}:
                                                {...marginTop, ...marksFont };
      const label = perPageMarks[prop].label;

      updatedMarks[prop] = {style, label}
    }
    setPageMarks(updatedMarks)
  }

  return (
    <Slider
      defaultValue={currentValue}
      min={1}
      max={6}
      step={null}
      onChange={(e) => {changeValue(parseInt(e))}}
      marks={perPageMarks}
      style={{ width: "100%" }}
      dotStyle={{opacity:0}}
      trackStyle={{borderRadius:'20px', height:'6px', backgroundImage:'linear-gradient(to right, #FF5C01, #FFD25F)'}}
      railStyle={{borderRadius:'20px', height:'6px'}}
      handleStyle={{width:'22.5px', height:'22.5px', background:'#1B1B1B', border:'6px solid #FFD05D'}}      
    />
  )
}

export default MySlider;