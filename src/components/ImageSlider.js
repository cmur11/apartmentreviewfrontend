import React, { useState } from "react";

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

const ImageSlider = ({ listingPhotos }) => { // takes in listingPhotos as props
  const [index, setIndex] = useState(0); // create state to keep track of listingPhotos index, set the default index to 0


  const slideRight = () =>  {
  setIndex((index + 1) % listingPhotos.length); // increases index by 1
};

const slideLeft = () => {
  const nextIndex = index - 1;
  if (nextIndex < 0) {
    setIndex(listingPhotos.length - 1); // returns last index of listingPhotos array if index is less than 0
  } else {
    setIndex(nextIndex);
  }
};





if (listingPhotos){

    return (
        <div>
       
               
       {listingPhotos.length > 0 && (
         <div class="image-slide">
             <div class="image-slide-left"> 
             <FaArrowAltCircleLeft onClick= {slideLeft}/>
               
             </div>
            <div class="image-slide-center">
                <img src={listingPhotos[index]} alt={index} />
            </div>
            <div class="image-slide-right"> 
            <FaArrowAltCircleRight onClick= {slideRight}/>
              
            </div>
         </div>
       )}
         
        </div>
    );
}
else{
    return(
        <div>
            bye
        </div>
    )
}



};

export default ImageSlider;
