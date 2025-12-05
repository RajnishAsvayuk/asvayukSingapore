"use client";
import BannerButton from "@/components/BannerBtn/BannerButton";
import Link from "next/link";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import HeroServices from "@/components/HeroServices/HeroServices";
import Experience from "@/components/Experience/Experience";
import { IoCheckmark } from "react-icons/io5";
import AppImages from "@/config/constant/app.images";
// Images
import EnterprisesBanner from "@/assets/Images/EnterprisesBanner.webp";
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
          pageParent={"Technology"}
          pageName={"Enterprise Portal Development"}
          pageHeading={
            "Enterprise Web Portal Development Services in Singapore"
          }
          pagePara={
            "Asvayuk Technologies is a leading web portal development company specializing in creating dynamic and highly functional corporate portals tailored to meet diverse Singapore business needs."
          }
          pageImg={EnterprisesBanner}
          pageAlt={"Enterprise Web Portal Development Services in Singapore"}
        />

        <section className="below-banner">
          <Container>
            <Row>
              <div className="col-lg-12">
                <div className="digital-ex text-start">
                  <div className="digi-head">
                    <h2 className="fw-semibold">
                      Open a Combined Digital Experience for Success in B2B and
                      B2C B2C
                    </h2>
                  </div>
                  <p className="mt-4 text-start">
                    In today's fast-paced business environment, fragmented
                    information and isolated processes impede productivity. Our
                    Enterprise Portal Development serves as a centralized web
                    platform, providing unified access to crucial information,
                    applications, and functionalities. We specialize in
                    developing customized portals that seamlessly integrate with
                    existing enterprise systems such as CRM, ERP, and HR,
                    offering a cohesive user experience. Our enterprise portals
                    act as digital nerve centers, linking your digital ecosystem
                    to enhance collaboration, accessibility, and business
                    agility in Singapore.
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section className="cards-section">
          <div className="customer-ex text-center pb-5">
            <h2>Transforming Digital Experiences for Singapore B2B/B2C</h2>
            <p className="pt-2">
              Our custom-built enterprise portals empower B2B and B2C businesses
              to:
            </p>
          </div>
          <Container>
            <Row>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                <div className="digi-cards bg-white px-3 py-2">
                  <h5 className="fw-semibold mt-4 ">Enhanced Productivity</h5>
                  <p>
                    Enhanced Productivity: Simplify workflows and automate tasks
                    to empower employees to focus on high-impact activities,
                    crucial for efficiency in the Singapore market.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                <div className="digi-cards bg-white px-3 py-2">
                  <h5 className="fw-semibold mt-4">
                    Improved Customer Experience
                  </h5>
                  <p>
                    Improved Customer Experience: Provide self-service portals
                    for customers, enabling 24/7 access to account data,
                    knowledge bases, and support resources.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                <div className="digi-cards bg-white px-3 py-2">
                  <h5 className="fw-semibold mt-4">Real-time Collaboration</h5>
                  <p>
                    Real-time Collaboration: Facilitate seamless communication
                    and collaboration across departments and teams to enhance
                    productivity and innovation across your organization.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                <div className="digi-cards bg-white px-3 py-2">
                  <h5 className="fw-semibold mt-4">
                    Data-Driven Decision-Making
                  </h5>
                  <p>
                    Data-Driven Decision-Making: Integrate analytics dashboards
                    and reporting tools to support informed decision-making and
                    enhance overall business strategy.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                <div className="digi-cards bg-white px-3 py-2">
                  <h5 className="fw-semibold mt-4">
                    Increased Visibility and Control
                  </h5>
                  <p>
                    Centralize oversight of business processes and user
                    activities to ensure transparency and efficiency.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                <div className="digi-cards bg-white px-3 py-2">
                  <h5 className="fw-semibold mt-4">Personalized Dashboards</h5>
                  <p>
                    Tailor dashboards for B2B users to track order statuses, and
                    for B2C customers to view personalized product
                    recommendations and loyalty program updates.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                <div className="digi-cards bg-white px-3 py-2">
                  <h5 className="fw-semibold mt-4">Content Management</h5>
                  <p>
                    Deliver targeted content based on customer behavior and
                    preferences, enhancing engagement and satisfaction through
                    Enterprise Portal Development in Singapore
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                <div className="digi-cards bg-white px-3 py-2">
                  <h5 className="fw-semibold mt-4">
                    Comprehensive Analytics Dashboard
                  </h5>
                  <p>
                    Gain valuable insights into user behavior and content
                    performance through robust analytics. Analyze customer
                    journeys, identify areas for improvement, and optimize both
                    B2B and B2C portal experiences.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12 inside-cards mb-4">
                <div className="digi-cards bg-white px-3 py-2">
                  <h5 className="fw-semibold mt-4">Security Features</h5>
                  <p>
                    Security Features: Implement robust security measures to
                    safeguard sensitive B2B and B2C customer data within your
                    enterprise portal, ensuring trust and compliance.
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        <section className="choice-section">
          <Container>
            <div className="choice text-center pb-5 px-md-5 text-center">
              <h2>
                The Advantage of Option: Sitecore, Liferay, and AEM Solutions
              </h2>
              <p className="pt-2">
                Asvayuk Technologies offers unparalleled expertise in developing
                enterprise portals on three of the industry's most powerful
                platforms:
              </p>
            </div>
          </Container>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <Image className="img-fluid pb-2" src={adobe} />
                <p>
                  Leverage AEM's robust content management capabilities and
                  personalization features to deliver exceptional customer
                  experience
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <Image className="img-fluid pb-2" src={liferay} />
                <p>
                  Benefit from Liferay's open-source flexibility and scalability
                  to build secure and scalable enterprise portals.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                <Image className="img-fluid pb-2" src={siteonly} />
                <p className="mt-2">
                  Utilize Sitecore's powerful experience management tools to
                  create engaging and interactive user interfaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Experience   --> */}
        <Experience
          expTitle="Why Choose Our Custom Web Portal Development Services in Singapore?"
          ExpPara="At Asvayuk Technologies Private Ltd, we take pride in delivering top-notch website portal services designed to offer seamless user experiences. Our team of expert web developers for website portal development in Singapore leverages the latest technologies to build responsive and scalable portals that align with your business goals"
          point1="Custom Web Portal Development"
          pointPara1="Custom Web Portal Development: Tailored solutions designed precisely to meet your unique business processes and specific requirements."
          point2="Secure & Scalable Architecture"
          pointPara2="Secure & Scalable Architecture: High-end security measures and scalable framework ensure reliable, high-volume transactions for your growing enterprise."
          point3="User-Friendly Interface"
          pointPara3="User-Friendly Interface: Intuitive navigation and modern design for better user engagement, training adoption, and client satisfaction."
          point4="SEO-Optimized Portals"
          pointPara4="SEO-Optimized Portals: Built with performance in mind to improve search engine ranking and drive organic traffic to public-facing portal features."
          altTags={{
            group1: "Best IT Solutions Company in Singapore",
            group2: "Custom Software Development in Singapore",
            group3: "Top Website Design Company in Singapore",
            group4: "Custom Magento Development Singapore",
            mockups: "Best SaaS Development Company in Singapore",
            whiteLogo: "Reliable E-commerce Development Services in Singapore",
          }}
        />

        {/* <!-- Empowering  --> */}
        <section className="Empowering_demo">
          <div className="container magentoCon">
            <div className="Empowering_demo_title text-center pb-2 pb-md-5">
              <h1 className="fw-semibold pt-5">
                Expert Web Portal Development in Singapore <br /> for Scalable
                Business Solutions
              </h1>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0 justify-center">
                <div className="bg_demo_empowering rounded-4 p-4">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                      <div className="Empowering_content text-white">
                        <h5>Website Development in Singapore</h5>
                        <p className="text-white py-1">
                          Apart from Singapore, we extend our website
                          development services in Singapore, ensuring businesses
                          in the Tricity region have access to cutting-edge web
                          solutions. Whether you need website development in
                          Singapore or custom portal solutions in Singapore, our
                          team is ready to assist. Our web portal development
                          Singapore services cater to businesses of all sizes.
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="solution_img">
                        <Image
                          src={Solutions5}
                          alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12 px-2 pb-3 pb-lg-0 pb-md-0 justify-center">
                <div className="bg_demo_empowering rounded-4 p-4">
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-12">
                      <div className="Empowering_content text-white">
                        <Link href="/web-portal-development-Singapore">
                          <h5>
                            Get the Best Web Portal Development Services Today!
                          </h5>
                        </Link>
                        <p className="text-white py-1">
                          If you're looking for a web designing company in
                          Singapore that excels in website development provider
                          Singapore, look no further than
                          <b>
                            <i>
                              <u>
                                <Link
                                  href={
                                    "https://maps.app.goo.gl/cpxwrvwmx5cdUScg7"
                                  }
                                ></Link>{" "}
                                Asvayuk Technologies Private Ltd
                              </u>
                            </i>
                          </b>{" "}
                          . We offer end-to-end web portal development services
                          in Singapore, helping businesses thrive in the digital
                          world. Contact us today to get started!
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="solution_img">
                        <Image
                          src={Solutions6}
                          alt="Web portal development services in Singapore"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Section */}
        <section className="tabs-section">
          <div className="container">
            <div className="row">
              <div className="choice d-flex justify-content-center flex-column">
                <h2 className="fw-semibold">
                  Beyond the Basics: Multifaceted Enterprise Portal Solutions
                </h2>
                <p className="pt-2">
                  We understand that every business has unique needs. Asvayuk
                  Technologies offers a comprehensive approach to web portal
                  development in Singapore, encompassing various portal types:
                </p>
              </div>
              <div className="tabs">
                <div>
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link border-0 text-dark fw-bold fs-6 ${
                          activeTab === "B2B" ? "active" : ""
                        }`}
                        id="home-tab"
                        type="button"
                        role="tab"
                        aria-controls="B2B"
                        aria-selected={activeTab === "B2B"}
                        onClick={() => handleTabClick("B2B")}
                      >
                        B2B Portal
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link border-0 text-dark fw-bold fs-6 ${
                          activeTab === "ecomm" ? "active" : ""
                        }`}
                        id="profile-tab"
                        type="button"
                        role="tab"
                        aria-controls="ecomm"
                        aria-selected={activeTab === "ecomm"}
                        onClick={() => handleTabClick("ecomm")}
                      >
                        E-commerce Portals
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link border-0 text-dark fw-bold fs-6 ${
                          activeTab === "custp" ? "active" : ""
                        }`}
                        id="customer-tab"
                        type="button"
                        role="tab"
                        aria-controls="custp"
                        aria-selected={activeTab === "custp"}
                        onClick={() => handleTabClick("custp")}
                      >
                        Customer Portals
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link border-0 text-dark fw-bold fs-6 ${
                          activeTab === "employeee" ? "active" : ""
                        }`}
                        id="employee-tab"
                        type="button"
                        role="tab"
                        aria-controls="employeee"
                        aria-selected={activeTab === "employeee"}
                        onClick={() => handleTabClick("employeee")}
                      >
                        Employee Portals
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link border-0 text-dark fw-bold fs-6 ${
                          activeTab === "suppli-ven" ? "active" : ""
                        }`}
                        id="supplier-tab"
                        type="button"
                        role="tab"
                        aria-controls="suppli-ven"
                        aria-selected={activeTab === "suppli-ven"}
                        onClick={() => handleTabClick("suppli-ven")}
                      >
                        Supplier and Vendor Portals
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link border-0 text-dark fw-bold fs-6 ${
                          activeTab === "intranet" ? "active" : ""
                        }`}
                        id="intranet-tab"
                        type="button"
                        role="tab"
                        aria-controls="intranet"
                        aria-selected={activeTab === "intranet"}
                        onClick={() => handleTabClick("intranet")}
                      >
                        Intranet Portals
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link border-0 text-dark fw-bold fs-6 ${
                          activeTab === "extranet" ? "active" : ""
                        }`}
                        id="extranet-tab"
                        type="button"
                        role="tab"
                        aria-controls="extranet"
                        aria-selected={activeTab === "extranet"}
                        onClick={() => handleTabClick("extranet")}
                      >
                        Extranet and Partner Portals
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className={`nav-link border-0 text-dark fw-bold fs-6 ${
                          activeTab === "banking" ? "active" : ""
                        }`}
                        id="banking-tab"
                        type="button"
                        role="tab"
                        aria-controls="banking"
                        aria-selected={activeTab === "banking"}
                        onClick={() => handleTabClick("banking")}
                      >
                        Banking and Insurance Portals
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className={`tab-pane fade ${
                        activeTab === "B2B" ? "show active" : ""
                      }`}
                      id="B2B"
                      role="tabpanel"
                      aria-labelledby="home-tab"
                    >
                      <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                        <div className="b2b-left">
                          <h1>B2B portals</h1>
                          <p className="mt-4">
                            Streamline communication and collaboration with
                            partners, vendors,<br></br> and suppliers. Includes
                            secure document sharing, real-time inventory
                            visibility, collaborative project tools, and vendor
                            onboarding functionalities.
                          </p>
                          <div className="check-para">
                            <div className="check-one d-flex gap-3">
                              <div className="checkone-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkone-right gap-3">
                                <p>
                                  Secure document sharing and collaboration
                                  tools for proposals,
                                  <br />
                                  contracts, and project documents.
                                </p>
                              </div>
                            </div>
                            <div className="check-two d-flex gap-3">
                              <div className="checktwo-left">
                                <IoCheckmark />
                              </div>
                              <div className="checktwo-right">
                                <p>
                                  Real-time inventory visibility and order
                                  tracking for vendors and
                                  <br />
                                  suppliers.
                                </p>
                              </div>
                            </div>
                            <div className="check-three d-flex gap-3">
                              <div className="checkthree-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkthree-right">
                                <p>
                                  Online forums and discussion boards for
                                  fostering communication
                                  <br />
                                  and knowledge sharing.
                                </p>
                              </div>
                            </div>
                            <div className="check-four d-flex gap-3">
                              <div className="checkfour-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkfour-right">
                                <p>
                                  Collaborative project management tools for
                                  joint ventures and
                                  <br />
                                  projects.
                                </p>
                              </div>
                            </div>
                            <div className="check-five d-flex gap-3">
                              <div className="checkfive-left gap-3">
                                <IoCheckmark />
                              </div>
                              <div className="checkfive-right">
                                <p>
                                  Vendor onboarding and management
                                  functionalities.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="b2b-right">
                          <Image
                            src={B2b}
                            alt="website portal services"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        activeTab === "ecomm" ? "show active" : ""
                      }`}
                      id="ecomm"
                      role="tabpanel"
                      aria-labelledby="profile-tab"
                    >
                      <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                        <div className="b2b-left">
                          <h1>E-commerce Portals</h1>
                          <p className="mt-4">
                            Enhance your B2B or B2C online store with integrated
                            functionalities
                          </p>
                          <div className="check-para">
                            <div className="check-one d-flex gap-3">
                              <div className="checkone-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkone-right gap-3">
                                <p>
                                  Secure and user-friendly online storefront
                                  with product catalogs and
                                  <br />
                                  search functionalities.
                                </p>
                              </div>
                            </div>
                            <div className="check-two d-flex gap-3">
                              <div className="checktwo-left">
                                <IoCheckmark />
                              </div>
                              <div className="checktwo-right">
                                <p>
                                  Personalized shopping experiences with
                                  customer account <br />
                                  management and order history.
                                </p>
                              </div>
                            </div>
                            <div className="check-three d-flex gap-3">
                              <div className="checkthree-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkthree-right">
                                <p>
                                  Shopping cart functionality with secure
                                  payment gateways.
                                </p>
                              </div>
                            </div>
                            <div className="check-four d-flex gap-3">
                              <div className="checkfour-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkfour-right">
                                <p>
                                  Order tracking and fulfillment management
                                  tools.
                                </p>
                              </div>
                            </div>
                            <div className="check-five d-flex gap-3">
                              <div className="checkfive-left gap-3">
                                <IoCheckmark />
                              </div>
                              <div className="checkfive-right">
                                <p>
                                  Real-time inventory management and stock
                                  updates.
                                </p>
                              </div>
                            </div>
                            <div className="check-five d-flex gap-3">
                              <div className="checkfive-left gap-3">
                                <IoCheckmark />
                              </div>
                              <div className="checkfive-right">
                                <p>
                                  Content management system for managing product
                                  descriptions, <br />
                                  marketing materials, and promotions.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="b2b-right">
                          <Image
                            src={eCommerce}
                            alt="Best web portal agency in Singapore"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        activeTab === "custp" ? "show active" : ""
                      }`}
                      id="custp"
                      role="tabpanel"
                      aria-labelledby="customer-tab"
                    >
                      <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                        <div className="b2b-left">
                          <h1>Customer Portals</h1>
                          <p className="mt-4">
                            Empower customers with self-service options, account
                            management,
                            <br /> and knowledge bases.
                          </p>
                          <div className="check-para">
                            <div className="check-one d-flex gap-3">
                              <div className="checkone-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkone-right gap-3">
                                <p>
                                  Secure self-service portal for tasks like
                                  account management, order
                                  <br /> tracking, and service requests.
                                </p>
                              </div>
                            </div>
                            <div className="check-two d-flex gap-3">
                              <div className="checktwo-left">
                                <IoCheckmark />
                              </div>
                              <div className="checktwo-right">
                                <p>
                                  Online knowledge base with FAQs,
                                  troubleshooting guides, and <br />
                                  product manuals.
                                </p>
                              </div>
                            </div>
                            <div className="check-three d-flex gap-3">
                              <div className="checkthree-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkthree-right">
                                <p>
                                  Secure document download center for invoices,
                                  receipts, and other
                                  <br /> account-related documents.
                                </p>
                              </div>
                            </div>
                            <div className="check-four d-flex gap-3">
                              <div className="checkfour-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkfour-right">
                                <p>
                                  Live chat or ticketing system for customer
                                  support inquiries.
                                </p>
                              </div>
                            </div>
                            <div className="check-five d-flex gap-3">
                              <div className="checkfive-left gap-3">
                                <IoCheckmark />
                              </div>
                              <div className="checkfive-right">
                                <p>
                                  Personalized dashboards displaying relevant
                                  account information
                                  <br />
                                  and order history.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="b2b-right">
                          <Image
                            src={CustomerPortals}
                            alt="Web developers for website portal development in Singapore"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        activeTab === "employeee" ? "show active" : ""
                      }`}
                      id="employeee"
                      role="tabpanel"
                      aria-labelledby="employee-tab"
                    >
                      <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                        <div className="b2b-left">
                          <h1>Employee Portals</h1>
                          <p className="mt-4">
                            Centralize HR resources, company announcements, and
                            internal
                            <br />
                            communication tools.
                          </p>
                          <div className="check-para">
                            <div className="check-one d-flex gap-3">
                              <div className="checkone-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkone-right gap-3">
                                <p>
                                  Secure access to company policies, employee
                                  handbooks, and <br />
                                  benefits information.
                                </p>
                              </div>
                            </div>
                            <div className="check-two d-flex gap-3">
                              <div className="checktwo-left">
                                <IoCheckmark />
                              </div>
                              <div className="checktwo-right">
                                <p>
                                  Internal directory for employee contact
                                  information.
                                </p>
                              </div>
                            </div>
                            <div className="check-three d-flex gap-3">
                              <div className="checkthree-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkthree-right">
                                <p>Company news and announcements feed.</p>
                              </div>
                            </div>
                            <div className="check-four d-flex gap-3">
                              <div className="checkfour-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkfour-right">
                                <p>
                                  Internal communication tools like forums,
                                  message boards, and
                                  <br />
                                  polls.
                                </p>
                              </div>
                            </div>
                            <div className="check-five d-flex gap-3">
                              <div className="checkfive-left gap-3">
                                <IoCheckmark />
                              </div>
                              <div className="checkfive-right">
                                <p>
                                  Self-service HR functionalities like timesheet
                                  management, leave
                                  <br />
                                  requests, and payroll information access.
                                </p>
                              </div>
                            </div>
                            <div className="check-five d-flex gap-3">
                              <div className="checkfive-left gap-3">
                                <IoCheckmark />
                              </div>
                              <div className="checkfive-right">
                                <p>
                                  Training and development resources with
                                  document libraries and
                                  <br />
                                  online courses.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="b2b-right">
                          <Image
                            src={Emp}
                            alt="web designing company in Singapore"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        activeTab === "suppli-ven" ? "show active" : ""
                      }`}
                      id="suppli-ven"
                      role="tabpanel"
                      aria-labelledby="supplier-tab"
                    >
                      <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                        <div className="b2b-left">
                          <h1>
                            Supplier and Vendor <br /> Portals
                          </h1>
                          <p className="mt-4">
                            Streamline procurement processes and improve vendor
                            collaboration.
                          </p>
                          <div className="check-para">
                            <div className="check-one d-flex gap-3">
                              <div className="checkone-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkone-right gap-3">
                                <p>
                                  Secure portal for submitting bids and
                                  proposals electronically.
                                </p>
                              </div>
                            </div>
                            <div className="check-two d-flex gap-3">
                              <div className="checktwo-left">
                                <IoCheckmark />
                              </div>
                              <div className="checktwo-right">
                                <p>
                                  Online portal for receiving purchase orders
                                  and managing invoices.
                                </p>
                              </div>
                            </div>
                            <div className="check-three d-flex gap-3">
                              <div className="checkthree-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkthree-right">
                                <p>
                                  Real-time order tracking and status updates.
                                </p>
                              </div>
                            </div>
                            <div className="check-four d-flex gap-3">
                              <div className="checkfour-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkfour-right">
                                <p>
                                  Collaboration tools for communication and
                                  exchange of documents
                                  <br />
                                  related to purchase orders.
                                </p>
                              </div>
                            </div>
                            <div className="check-five d-flex gap-3">
                              <div className="checkfive-left gap-3">
                                <IoCheckmark />
                              </div>
                              <div className="checkfive-right">
                                <p>
                                  Performance feedback and evaluation mechanisms
                                  for vendors.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="b2b-right">
                          <Image
                            src={SupplierVendor}
                            alt="website development provider Singapore"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        activeTab === "intranet" ? "show active" : ""
                      }`}
                      id="intranet"
                      role="tabpanel"
                      aria-labelledby="intranet-tab"
                    >
                      <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                        <div className="b2b-left">
                          <h1>Intranet Portals</h1>
                          <p className="mt-4">
                            Facilitate internal communication, knowledge
                            sharing, and document
                            <br /> management.
                          </p>
                          <div className="check-para">
                            <div className="check-one d-flex gap-3">
                              <div className="checkone-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkone-right gap-3">
                                <p>
                                  Secure platform for company-wide announcements
                                  and news <br />
                                  updates.
                                </p>
                              </div>
                            </div>
                            <div className="check-two d-flex gap-3">
                              <div className="checktwo-left">
                                <IoCheckmark />
                              </div>
                              <div className="checktwo-right">
                                <p>
                                  Internal discussion boards and forums for
                                  employee engagement
                                  <br />
                                  and knowledge sharing.
                                </p>
                              </div>
                            </div>
                            <div className="check-three d-flex gap-3">
                              <div className="checkthree-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkthree-right">
                                <p>
                                  Document management system for centralized
                                  storage, access, and
                                  <br />
                                  version control of company documents.
                                </p>
                              </div>
                            </div>
                            <div className="check-four d-flex gap-3">
                              <div className="checkfour-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkfour-right">
                                <p>
                                  Internal social networking features for
                                  fostering employee <br />
                                  collaboration and building connections.
                                </p>
                              </div>
                            </div>
                            <div className="check-five d-flex gap-3">
                              <div className="checkfive-left gap-3">
                                <IoCheckmark />
                              </div>
                              <div className="checkfive-right">
                                <p>
                                  Company calendar and event management tools.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="b2b-right">
                          <Image
                            src={IntranetPortals}
                            alt="Classified Website Development in Singapore"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        activeTab === "extranet" ? "show active" : ""
                      }`}
                      id="extranet"
                      role="tabpanel"
                      aria-labelledby="extranet-tab"
                    >
                      <div className="b2b-main d-flex flex-column flex-lg-row flex-md-row mt-5">
                        <div className="b2b-left">
                          <h1>
                            Extranet and Partner <br /> Portals
                          </h1>
                          <p className="mt-4">
                            Securely collaborate with external partners and
                            manage joint projects.
                          </p>
                          <div className="check-para">
                            <div className="check-one d-flex gap-3">
                              <div className="checkone-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkone-right gap-3">
                                <p>
                                  Secure access for authorized external partners
                                  to collaborate
                                  <br /> on projects.
                                </p>
                              </div>
                            </div>
                            <div className="check-two d-flex gap-3">
                              <div className="checktwo-left">
                                <IoCheckmark />
                              </div>
                              <div className="checktwo-right">
                                <p>
                                  Secure document sharing and co-editing
                                  functionalities.
                                </p>
                              </div>
                            </div>
                            <div className="check-three d-flex gap-3">
                              <div className="checkthree-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkthree-right">
                                <p>
                                  Project management tools for tracking
                                  progress, deadlines, and
                                  <br />
                                  tasks.
                                </p>
                              </div>
                            </div>
                            <div className="check-four d-flex gap-3">
                              <div className="checkfour-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkfour-right">
                                <p>
                                  Communication tools like instant messaging and
                                  online meetings for
                                  <br /> real-time collaboration.
                                </p>
                              </div>
                            </div>
                            <div className="check-five d-flex gap-3">
                              <div className="checkfive-left gap-3">
                                <IoCheckmark />
                              </div>
                              <div className="checkfive-right">
                                <p>
                                  Joint reporting and analytics dashboards for
                                  shared project <br />
                                  insights.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="b2b-right">
                          <Image
                            src={Extranet}
                            alt="Responsive web development Singapore"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className={`tab-pane fade ${
                        activeTab === "banking" ? "show active" : ""
                      }`}
                      id="banking"
                      role="tabpanel"
                      aria-labelledby="banking-tab"
                    >
                      <div className="b2b-main d-flex mt-5">
                        <div className="b2b-left">
                          <h1>Banking and Insurance Portals</h1>
                          <p className="mt-4">
                            Provide secure access to customer accounts,
                            financial information, and <br /> self-service
                            options.
                          </p>
                          <div className="check-para">
                            <div className="check-one d-flex gap-3">
                              <div className="checkone-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkone-right gap-3">
                                <p>
                                  Secure login for online banking or insurance
                                  policy management.
                                </p>
                              </div>
                            </div>
                            <div className="check-two d-flex gap-3">
                              <div className="checktwo-left">
                                <IoCheckmark />
                              </div>
                              <div className="checktwo-right">
                                <p>
                                  Account dashboards displaying account
                                  balances, transaction <br />
                                  history, and policy details.
                                </p>
                              </div>
                            </div>
                            <div className="check-three d-flex gap-3">
                              <div className="checkthree-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkthree-right">
                                <p>
                                  Bill payment and fund transfer
                                  functionalities.
                                </p>
                              </div>
                            </div>
                            <div className="check-four d-flex gap-3">
                              <div className="checkfour-left">
                                <IoCheckmark />
                              </div>
                              <div className="checkfour-right">
                                <p>
                                  Secure online forms for submitting claims,
                                  requesting policy changes,
                                  <br /> or contacting customer support.
                                </p>
                              </div>
                            </div>
                            <div className="check-five d-flex gap-3">
                              <div className="checkfive-left gap-3">
                                <IoCheckmark />
                              </div>
                              <div className="checkfive-right">
                                <p>
                                  Personalized financial management tools and
                                  budgeting resources.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="b2b-right">
                          <Image
                            src={Banking}
                            alt="website development in Singapore "
                            className="img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ProcessSec */}
        <Process
          heading="Our Web Portal Development Process"
          para="At Asvayuk Technologies, we follow a structured and transparent development process to ensure the delivery of high-quality apps."
          col1Img={AppImages.processImg.container}
          col1Alt="website developement in Singapore"
          col1head="Requirement Analysis"
          col1para="We take time to understand your specific requirements, business objectives, and target audience. This helps us design the perfect app strategy."
          col2Img={AppImages.processImg.planning}
          col2Alt="WEB PORTAL DEVELOPMENT COMPANY IN Singapore"
          col2head="Design & Prototyping"
          col2para="Our designers craft intuitive and engaging designs. We create wireframes and prototypes to give you an idea of how the final app will function."
          col3Img={AppImages.processImg.pen}
          col3Alt="Web portal development services in Singapore"
          col3head="Development"
          col3para="Using cutting-edge technologies, our development team brings your app to life, ensuring it is optimized for speed, security, and scalability."
          col4Img={AppImages.processImg.development}
          col4Alt="Web developers for website portal development in Singapore"
          col4head="Quality Assurance & Testing"
          col4para="Our rigorous testing procedures help ensure that your app is bug-free and functions as expected on all devices and platforms."
          col5Img={AppImages.processImg.test}
          col5Alt="Responsive web development Singapore"
          col5head="Launch & Post-Launch Support"
          col5para="Our team of mobile testing experts performs testing and debugging to ensure a reliable and optimal functioning app."
        />
      </main>
   </>
  )
}

export default EnterPrisePage
