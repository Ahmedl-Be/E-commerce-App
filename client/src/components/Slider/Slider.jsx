import React, { useState } from 'react';
import   "./Slider.css";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const checkNumber = (num) => {
        if(num > data.length - 1 ){return 0}
        if(num < 0){return data.length - 1}
        return num
    }
    const prev = ()=> setCurrentSlide(checkNumber(currentSlide-1))
    const next = () => setCurrentSlide(checkNumber(currentSlide+1))
return (
    <div className="slider">
        <div className="slider-container">
            <img src= {data[currentSlide]} alt=''/>
        </div>
        <div className='slider-icons'>
            <div className='slider-icon' onClick={next}>
                <WestOutlinedIcon /></div>
            <div className='slider-icon' onClick={prev}>
                <EastOutlinedIcon /> </div>
        </div>
    </div>
)
}

export default Slider;