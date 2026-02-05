"use client";
import BannerButton from "@/components/BannerBtn/BannerButton";
import Link from "next/link";
import React, { useState } from "react";
import { Accordion, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import HeroServices from "@/components/HeroServices/HeroServices";
import Experience from "@/components/Experience/Experience";
import { IoCheckmark } from "react-icons/io5";
import AppImages from "@/config/constant/app.images";
// Images
import EnterprisesBanner from "@/assets/Images/career.png";
import adobe from "@/assets/Images/adobe.webp";
import liferay from "@/assets/Images/liferay.webp";
import siteonly from "@/assets/Images/siteonly.webp";
import Solutions5 from "@/assets/Images/Solutions5.webp";
import Solutions6 from "@/assets/Images/Solutions6.webp";
import B2b from "@/assets/Images/B2b.webp";
import eCommerce from "@/assets/Images/eCommerce.webp";
import CustomerPortals from "@/assets/Images/Customer-portals.webp";
import Emp from "@/assets/Images/Employee.webp";
import SupplierVendor from "@/assets/Images/Supplier-Vendor.webp";
import IntranetPortals from "@/assets/Images/Intranet-Portals.webp";
import Extranet from "@/assets/Images/Extranet.webp";
import Banking from "@/assets/Images/Banking.webp";
import Process from "@/components/ProcessSection/Process";
import CareerApplyModal from "@/components/careersmodal/CareerApplyModal";

const EnterPrisePage = () => {
  const [activeTab, setActiveTab] = useState("B2B");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <main>
        <HeroServices
          home={"Home"}
          pageParent={"Resourses"}
          pageName={"Career"}
          pageHeading={"Architect the Future with Layerex: Join the AI Revolution"}
          pagePara={
            "Step into an ecosystem where AI, Fintech, and IoT converge. We are looking for visionary thinkers to join our team of experts in deploying next-generation SaaS and smart-city infrastructure. At Layerex, your expertise doesn't just build products—it drives global change."
          }
          pageImg={EnterprisesBanner}
          pageAlt={"Enterprise Web Portal Development Services in Singapore"}
          showButton={false}
        />

        <section className="below-banner">
          <Container>
            <Row>
              <div className="col-lg-12">
                <div className="digital-ex text-start">
                  <div className="digi-head">
                    <h2 className="fw-semibold text-center">Open Positions</h2>
                  </div>
                  <div className="mt-4">
                    <div className="position-heading d-flex gap-3">
                      <span>  IT Sales Executive – Web & Mobile Development</span>
                      <span>2 Positions</span>
                    </div>
                    <Accordion className="career-accordion">
                      {/* Job 1 */}
                      <Accordion.Item eventKey="0" className="career-item">
                        <Accordion.Header>
                          <div className="career-header d-flex justify-content-between w-100">
                            IT Sales Executive – Web & Mobile Development
                            <span className="career-meta me-4">
                              Singapore · Full-Time
                            </span>
                          </div>
                        </Accordion.Header>

                        <Accordion.Body className="career-body">
                          <p className="career-desc">
                            Layerex Technologies Pvt Ltd is looking for dynamic
                            IT Sales Executives to generate revenue by selling
                            cutting-edge digital solutions. The role focuses on
                            acquiring new clients, managing leads, and closing
                            deals for global markets.
                          </p>

                          <h6 className="career-title">Key Responsibilities</h6>
                          <ul className="career-list">
                            <li>Generate new business leads and close deals</li>
                            <li>
                              Sell services including
                              <ul>
                                <li>Web Development & Web Designing</li>
                                <li>Mobile App Development (Android & iOS)</li>
                                <li>Custom Software Development</li>
                              </ul>
                            </li>
                            <li>
                              Identify client requirements and propose suitable
                              solutions
                            </li>
                            <li>
                              Maintain strong relationships with clients and
                              partners
                            </li>
                            <li>
                              Achieve monthly and quarterly revenue targets
                            </li>
                            <li>
                              Coordinate with technical and project teams for
                              smooth delivery
                            </li>
                          </ul>

                          <h6 className="career-title">Requirements</h6>
                          <ul className="career-list">
                            <li>
                              1–4 years of experience in IT sales or business
                              development
                            </li>
                            <li>Strong communication and negotiation skills</li>
                            <li>
                              Experience selling IT services to international
                              clients is a plus
                            </li>
                            <li>Knowledge of software development lifecycle</li>
                            <li>Self-motivated and target-driven</li>
                          </ul>
                          <h6 className="career-title">Benefits</h6>
                          <ul className="career-list">
                            <li>Attractive salary + commissiont</li>
                            <li>Performance-based incentives</li>
                            <li>Opportunity to work with global clients</li>
                          </ul>
                          <div className="text-end ">
                            <CareerApplyModal />
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <div className="position-heading d-flex gap-3">
                        <span>IT Sales Executive – Ecommerce & Shopify Solutions</span>
                        <span>1 Positions</span>
                      </div>
                      <Accordion.Item eventKey="1" className="career-item">
                        <Accordion.Header>
                          <div className="career-header d-flex justify-content-between w-100">
                            IT Sales Executive – Ecommerce & Shopify Solutions
                            <span className="career-meta me-4">
                              Singapore · Full-Time
                            </span>
                          </div>
                        </Accordion.Header>

                        <Accordion.Body className="career-body">
                          <p className="career-desc">
                            We are hiring an IT Sales Executive specialized in ecommerce and Shopify solutions to drive global sales growth. The candidate will play a key role in expanding our ecommerce services worldwide.
                          </p>

                          <h6 className="career-title">Key Responsibilities</h6>
                          <p>Sell ecommerce-related services including:</p>
                          <ul className="career-list">
                            <li>Shopify Store Development</li>
                            <li>
                              Shopify App Development
                            </li>
                            <li>
                              Ecommerce Website Development
                            </li>
                            <li>
                              ERP & CRM Development
                            </li>
                            <li>
                              Lead generation through cold calling, email marketing, LinkedIn, and networking
                            </li>
                            <li>
                              Prepare proposals, presentations, and pricing models
                            </li>
                            <li>Close deals and manage post-sales client relationships</li>
                            <li>Track sales performance and market trends</li>
                          </ul>

                          <h6 className="career-title">Requirements</h6>
                          <ul className="career-list">
                            <li>
                              Experience in ecommerce or Shopify sales preferred
                            </li>
                            <li>Strong understanding of digital commerce platforms</li>
                            <li>
                              Excellent verbal and written communication skills
                            </li>
                            <li>Ability to work with international clients</li>
                            <li>Result-oriented mindset</li>
                          </ul>
                          <h6 className="career-title">Benefits</h6>
                          <ul className="career-list">
                            <li>Competitive salary with high commission potential</li>
                            <li>Career growth in a global IT company</li>
                            <li>Exposure to international ecommerce projects</li>
                          </ul>

                          <div className="text-end ">
                            <CareerApplyModal />
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <div className="position-heading d-flex gap-3">
                        <span>Operations Manager – IT Services</span>
                        <span>1 Positions</span>
                      </div>
                      <Accordion.Item eventKey="2" className="career-item">
                        <Accordion.Header>
                          <div className="career-header d-flex justify-content-between w-100">
                            Operations Manager – IT Services
                            <span className="career-meta me-4">
                              Singapore · Full-Time
                            </span>
                          </div>
                        </Accordion.Header>

                        <Accordion.Body className="career-body">
                          <p className="career-desc">
                            Layerex Technologies Pvt Ltd is seeking an experienced Operations Manager to manage and oversee all business operations in Singapore. The role involves handling sales operations, project coordination, compliance, and service delivery across all IT verticals.
                          </p>

                          <h6 className="career-title">Key Responsibilities</h6>
                          <p>Manage end-to-end operations for:</p>
                          <ul className="career-list">
                            <li>Web & Mobile App Development</li>
                            <li>
                              Ecommerce & Shopify Solutions
                            </li>
                            <li>
                              ERP & CRM Development
                            </li>
                            <li>
                              Oversee daily business operations in Singapore
                            </li>
                            <li>
                              Coordinate between sales, technical, and support teams
                            </li>
                            <li>
                              Ensure timely project delivery and client satisfaction
                            </li>
                            <li>Handle vendor management, reporting, and process optimization</li>
                            <li>Maintain compliance with Singapore business regulations</li>
                          </ul>

                          <h6 className="career-title">Requirements</h6>
                          <ul className="career-list">
                            <li>
                              3–7 years of experience in IT operations or project management
                            </li>
                            <li>Strong leadership and team management skills</li>
                            <li>
                              Knowledge of IT services and delivery models
                            </li>
                            <li>Excellent organizational and communication abilities</li>
                            <li>Experience managing global or offshore teams is an advantage</li>
                          </ul>
                          <h6 className="career-title">Benefits</h6>
                          <ul className="career-list">
                            <li>Leadership role in a growing global company</li>
                            <li>Competitive salary package</li>
                            <li>Opportunity to scale international operations</li>
                          </ul>

                          <div className="text-end ">
                            <CareerApplyModal />
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <Process
          heading="Your Journey to Joining Layerex"
          // para="At Asvayuk Technologies, we follow a structured and transparent development process to ensure the delivery of high-quality apps."
          col1Img={AppImages.processImg.posting}
          col1Alt="website developement in Singapore"
          col1head="Strategic Job Posting"
          col1para="We identify specific gaps in our ecosystem and craft roles designed for high-impact innovators who align with our technology-driven mission."
          col2Img={AppImages.processImg.reviewing}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Meticulous Profile Review"
          col2para="Our team carefully evaluates your technical background and experience in AI or infrastructure to ensure a perfect fit for our advanced projects."
          col3Img={AppImages.processImg.interview}
          col3Alt="Web portal development services in Singapore"
          col3head="Collaborative Interview"
          col3para="We engage in deep-dive discussions to understand your vision, problem-solving mindset, and how you can contribute to our multi-disciplinary fintech and IoT solutions."
          col4Img={AppImages.processImg.challenge}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Technical Challenge"
          col4para="Enter the Layerex Innovation Lab for a hands-on assessment. This stage showcases your ability to handle real-world technical complexities and AI-driven workflows in real-time."
          col5Img={AppImages.processImg.joining}
          col5Alt="Responsive web development Singapore"
          col5head="Official Onboarding"
          col5para="Once we identify a match, we extend an invitation for you to join our dynamic team and start building the smart infrastructure of tomorrow."
        />



      </main>
    </>
  );
};

export default EnterPrisePage;
