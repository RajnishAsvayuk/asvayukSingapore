import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import Image from "next/image";

const PortfolioItem = ({
     workImage,
  projectTitle,
  projectCategory,
  projectLink,
  altText,
}) => {
      const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  return (
    <>
     <div className="portfolio_box col-lg-4 col-md-4 col-sm-12 col-12">
      <div className="portfolio_item col-12 p-0">
        <div className="portfolio_img col-12 p-0" onClick={togglePopup}>
          <Image alt={altText} src={workImage} className="img-fluid" />
        </div>
        <div className="portfolio_content col-12 p-0">
          <div className="pc_plusicon text-right col-12 p-0">
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              <div className="post-overlay-icon"></div>
            </a>
          </div>
          <div className="pc_info text-left col-12">
            <div className="pc_info_cate font_16 font_weight_medium col-12 p-0">
              <span className="color_white font_weight_light">
                {projectCategory}
              </span>
            </div>
            <div className="pc_info_title col-12 p-0">
              <a href={projectLink} target="_blank" rel="noopener noreferrer">
                <h5 className="font_20 font_weight_400 color_white">
                  {projectTitle}
                </h5>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <Image src={workImage} alt={projectTitle} className="popup-image" />
            <h3 className="popup-title">{projectTitle}</h3>
            <p>{projectCategory}</p>
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="popup-link"
            >
              Visit Project
            </a>
            <button onClick={togglePopup} className="popup-close">
              <IoCloseCircleOutline />
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default PortfolioItem
