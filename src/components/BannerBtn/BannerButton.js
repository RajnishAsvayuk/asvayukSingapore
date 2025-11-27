"use client";

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

function BannerButton({ btnTitle, url, blockChainClass, icon }) {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    // e.preventDefault();
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <div className={blockChainClass ? blockChainClass : "heroBtn"}>
        {/* <Link
          href={url || ""}
          className="d-flex justify-content-between align-items-center text-decoration-none"
          onClick={handleShow}
        >
          {blockChainClass ? (
            <span className="d-flex align-items-center gap-2">
              {icon}
              {btnTitle}
            </span>
          ) : (
            <>
              <div className="btnText px-3 py-3 text-light">
                <span>{btnTitle}</span>
              </div>
              <div className="btn_icon px-4 py-2 align-content-center">
                <FaChevronRight />
              </div>
            </>
          )}
        </Link> */}

         <Link
          href={"/contact-us"}
          className="d-flex justify-content-between align-items-center text-decoration-none"
          onClick={handleShow}
        >
          {blockChainClass ? (
            <span className="d-flex align-items-center gap-2">
              {icon}
              {btnTitle}
            </span>
          ) : (
            <>
              <div className="btnText px-3 py-3 text-light">
                <span>{btnTitle}</span>
              </div>
              <div className="btn_icon px-4 py-2 align-content-center">
                <FaChevronRight />
              </div>
            </>
          )}
        </Link>
      </div>

      {/* Modal */}
      {/* <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="overflow-hidden w-100 h-100">
            <iframe
              width="100%"
              height="510"
              src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca"
              className="rounded-5 border-0"
              allowFullScreen
              style={{ background: "transparent" }}
            ></iframe>
          </div>
        </Modal.Body>
      </Modal> */}
    </>
  );
}

export default BannerButton;
