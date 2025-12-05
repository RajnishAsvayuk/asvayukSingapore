import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import Group_652 from "@/assets/Images/Group-652.webp";
import Group_859 from "@/assets/Images/Group-859.webp";
import Group_105519 from "@/assets/Images/Group-105519.webp";
import Group_649 from "@/assets/Images/Group-649.webp";
import Group_650 from "@/assets/Images/Group-650 (1).webp";

const Feature = ({
  featureheading,
  featurepoint1,
  featurepoint2,
  featurepoint3,
  featurepoint4,
  featurepoint5,
}) => {
  return (
    <>
      <section className="saas-sec py-5">
        <Container>
          <h1 className="text-center fw-medium">{featureheading}</h1>
          <Row className="d-flex justify-content-between pt-5  text-center">
            <Col
              lg={2}
              md={4}
              sm={6}
              className="col-6 d-flex flex-column justify-content-center align-items-center"
            >
              <div className="blockchain-col-img d-flex text-center">
                <Image
                  src={Group_652}
                  className="img-fluid"
                  alt="WooCommerce Development in Chandigarh city"
                />
              </div>
              <div className="blockchain-col-text mt-3">
                <p className="text-center">{featurepoint1}</p>
              </div>
            </Col>
            <Col
              lg={2}
              md={4}
              sm={6}
              className="col-6 d-flex flex-column justify-content-center align-items-center"
            >
              <div className="blockchain-col-img d-flex text-center">
                <Image
                  src={Group_859}
                  className="img-fluid"
                  alt="Woocommerce Website Development Company in Chandigarh"
                />
              </div>
              <div className="blockchain-col-text mt-3">
                <p className="text-center">{featurepoint2}</p>
              </div>
            </Col>
            <Col
              lg={2}
              md={4}
              sm={6}
              className="col-6 d-flex flex-column justify-content-center align-items-center"
            >
              <div className="blockchain-col-img d-flex text-center">
                <Image
                  src={Group_105519}
                  className="img-fluid"
                  alt="e-commerce industry in Chandigarh"
                />
              </div>
              <div className="blockchain-col-text mt-3">
                <p className="text-center">{featurepoint3}</p>
              </div>
            </Col>
            <Col
              lg={2}
              md={4}
              sm={6}
              className="col-6 d-flex flex-column justify-content-center align-items-center"
            >
              <div className="blockchain-col-img d-flex text-center">
                <Image
                  src={Group_649}
                  className="img-fluid"
                  alt="woo commerce development agency in chandigarh"
                />
              </div>
              <div className="blockchain-col-text mt-3">
                <p className="text-center">{featurepoint4}</p>
              </div>
            </Col>
            <Col
              lg={2}
              md={4}
              sm={6}
              className="col-6 d-flex flex-column justify-content-center align-items-center"
            >
              <div className="blockchain-col-img d-flex text-center">
                <Image
                  src={Group_650}
                  className="img-fluid"
                  alt="woo commerce website provider in chandigarh"
                />
              </div>
              <div className="blockchain-col-text mt-3">
                <p className="text-center">{featurepoint5}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Feature;
