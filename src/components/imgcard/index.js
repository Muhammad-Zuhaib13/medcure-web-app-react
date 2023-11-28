import React from 'react'
import "./style.css"
const ImageCard = (props) => {
    const {srcImg}= props;
    const {srcImage, className} = srcImg;
  return (
    <div className={`image-card-container scale-up-img ${className}`}>
      <img src={srcImage} alt="component"  />
    </div>
  )
}

export default ImageCard
