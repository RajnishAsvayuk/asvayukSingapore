'use client'
import React from "react";
import check from "@/assets/Images/check.webp";
import { FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const KeyPointSection = ({
  keyHeading,
  keyPara,
  keyPara2,
  keyPoint1,
  keyPoint2,
  keyPoint3,
  keyPoint4,
  keyPoint5,

  btnTitle,
  Group105518,
  hideKeyPoints,
  altTags = {},
}) => {
  return (
    <>
      <section className="low-code-sec-tool">
        <div className="container">
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="tool-heading">
                  <h2>{keyHeading}</h2>
                  <p className="mt-4">{keyPara}</p>
                  <p className="mt-4">{keyPara2}</p>
                </div>

                <div className="toll-check-items d-flex gap-3">
                  <ul className="list-unstyled py-2">
                    {[
                      keyPoint1,
                      keyPoint2,
                      keyPoint3,
                      keyPoint4,
                      keyPoint5,
                    ].map(
                      (point, index) =>
                        point && (
                          <li key={index} className="d-flex gap-1 py-1 align-items-start">
                            <span>
                              <Image src={check} />
                            </span>

                            <span>{point}</span>
                          </li>
                        )
                    )}
                  </ul>
                </div>

                <div className="heroBtn">
                 <Link href="/contact-us">
                  <div
                    className="d-flex justify-content-between"
                    style={{ cursor: "pointer" }} // ✅ optional
                  >
                    <div className="btnText px-3 py-3 text-light">
                      <span>{btnTitle}</span>
                    </div>
                    <div className="btn_icon px-4 py-2 align-content-center">
                      <FaChevronRight />
                    </div>
                  </div>
                 </Link>
                </div>
                {/* 
                            <Modal show={show} onHide={handleClose} size="lg">
                                <Modal.Header closeButton></Modal.Header>
                                <Modal.Body>
                                    <div className='overflow-hidden w-100 h-100'>
                                        <iframe width="100%" height="510px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" className=' rounded-5' allowfullscreen style={{ background: 'transparent' }}></iframe>
                                    </div>
                                </Modal.Body>
                            </Modal> */}
              </div>

              <div className="col-lg-6 text-end">
                <div className="tool-img">
                  <Image
                    src={Group105518}
                    alt={altTags?.Group105518 || ""}
                    className="img-fluid mt-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyPointSection;
