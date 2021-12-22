import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const MySlider = ({ setItemPerPage}) => {
  const {width, height} = useWindowDimensions()

  const [marginTop, setMarginTop] = useState({});
  const [currentValue, setCurrentValue] = useState(5);
  const [perPageMarks, setPageMarks] = useState({
    1: {style:{ ...marginTop}, label:"3"},
    2: {style:{ ...marginTop}, label:"6"},
    3: {style:{ ...marginTop}, label:"9"},
    4: {style:{ ...marginTop}, label:"12"},
    5: {style:{ ...marginTop, color:"#FFFFFF"}, label:"15"},
    6: {style:{ ...marginTop}, label:"50"}
  })

  useEffect(()=>{
    setMarginTop(
      width > 0 && width <= 414 ? {marginTop:'7px'} :
      width > 414 && height > 640 ? {marginTop:'7px'} :
      {}
    )
  }, [width, height]);

  useEffect(()=>{
    let updatedMarks = {}
    for(let prop in perPageMarks){
      const style = perPageMarks[prop].style.hasOwnProperty('color')?{...marginTop, color:"#FFFFFF"}:
                                                       {...marginTop} 
      const label = perPageMarks[prop].label;
      updatedMarks[prop] = {style, label}
    }
    setPageMarks(updatedMarks)
  }, [marginTop])

  const changeValue = (newValue) => {
    setCurrentValue(newValue);
    setItemPerPage(parseInt(perPageMarks[newValue].label))
    let updatedMarks = {}
    for(let prop in perPageMarks){
      
      const style = parseInt(prop) === newValue?{...marginTop, color:"#FFFFFF"}:
                                                {...marginTop };
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
      trackStyle={{borderRadius:'20px', height:'5px', backgroundImage:'linear-gradient(to right, #FF5C01, #FFD25F)'}}
      railStyle={{borderRadius:'20px', height:'5px'}}
      handleStyle={{width:'20px', height:'20px', background:'#1B1B1B', border:'6px solid #FFD05D'}}      
    />
  )
}

export default MySlider;