import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { height } from "@mui/system";



const MySlider = () => {
  const [currentValue, setCurrentValue] = useState(5);
  const [perPageMarks, setMarks] = useState({
    1: {style:{}, label:"3"},
    2: {style:{}, label:"6"},
    3: {style:{}, label:"9"},
    4: {style:{}, label:"12"},
    5: {style:{color:"#FFFFFF"}, label:"15"},
    6: {style:{}, label:"50"}
  })

  const changeValue = (newValue) => {
    setCurrentValue(newValue);
    let updatedMarks = {}
    for(let prop in perPageMarks){
      const style = newValue===parseInt(prop)?{color:"#FFFFFF"}:
                                              { };
      const label = perPageMarks[prop].label;

      updatedMarks[prop] = {style, label}
    }

    setMarks(updatedMarks);
  }

  return (
    <Slider
      id={'slider'}
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
      activeDotStyle={{color:'#FFFFFF'}}
    />
  )
}

export default MySlider;