import React from 'react'
import Image from "next/image";
const ServicesCard = ({
    ServiceCardImg,
  cardHeading,
  cardParaGraph,
  altText,
}) => {
    
  return (
   <>
    <div className="performance_card2_inner-sec_card">
        <div className="card_img-box-wrapper d-flex align-items-center gap-2">
          <div className="car_box_img ">
            <Image src={ServiceCardImg} alt={altText} />
          </div>
          <div className="card_box_img_heading low-code">
            <h4 className="mb-0 fw-bold">{cardHeading}</h4>
          </div>
        </div>
        <p className="pt-3">{cardParaGraph}</p>
      </div>
   </>
  )
}

export default ServicesCard
