import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import seoImg from "@/assets/Images/seo_banner.webp";
import shopifyImg from "@/assets/Images/news.png";
import author_thumb from "@/assets/Images/vipasha2.jpg";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import ContactFormComp from "@/components/ContactFormComp/ContactFormComp";

const registerNews = () => {
  return (
    <>
      <main>
        <section className="blog_cads">
          <Container>
            <Row>
              <Col lg={8} className="col-12">
                <div className="blog_card">
                  <h1>
                    <b>
                      {" "}
                      Layerex Technologies Pvt Ltd Registered in Singapore,
                      Ready to Launch Global Operations Singapore
                    </b>
                  </h1>
                  <div className="blog_card_img mt-4">
                    <Image src={shopifyImg} width="100%" />
                  </div>
                  <div className="blog_card_date mt-4">
                    <h6>
                      <span className="published">Published</span> <br />
                      <span className="pb_date">02 Feb, 2026</span>
                    </h6>
                  </div>
                  <div className="blog_card_para mt-3">
                    <p>
                      Layerex Technologies Pvt Ltd, a fast-growing global
                      technology solutions company, has officially been
                      registered in Singapore and is now fully prepared to begin
                      its business operations worldwide. This strategic
                      registration marks a major step in Layerex Technologies’
                      mission to deliver innovative, secure, and scalable
                      digital solutions to clients across international markets.
                      Singapore is widely recognized as one of the top global
                      business and technology hubs, offering a transparent legal
                      system, strong economic stability, and world-class digital
                      infrastructure. By establishing its presence in Singapore,
                      Layerex Technologies strengthens its global credibility
                      and positions itself for rapid international expansion.
                    </p>
                    <h3>
                      <b>
                        Why Singapore is the Ideal Global Base for Layerex
                        Technologies
                      </b>
                    </h3>
                    <p>
                      Registering in Singapore provides Layerex Technologies Pvt
                      Ltd with multiple competitive advantages:
                    </p>
                    <ul>
                      <li>
                        <b>Global Business Hub:</b>Singapore serves as a gateway
                        to Asia-Pacific, Europe, and global markets
                      </li>
                      <li>
                        <b>Business-Friendly Regulations: </b> Simple company
                        laws, investor protection, and ease of compliance
                      </li>
                      <li>
                        <b>Tax Benefits:</b>Competitive corporate tax rates and
                        extensive double-taxation treaties.
                      </li>
                      <li>
                        <b>Advanced Digital Infrastructure:</b>A strong
                        ecosystem for fintech, blockchain, AI, and cloud
                        technologies
                      </li>
                      <li>
                        <b>International Trust & Credibility:</b>
                        Singapore-registered companies are highly trusted
                        worldwideThese benefits allow Layerex Technologies to
                        scale globally while maintaining operational excellence.
                      </li>
                    </ul>
                    <h3>
                      <b>Worldwide Benefits for Clients & Partners</b>
                    </h3>
                    <p>
                      With its Singapore registration, Layerex Technologies
                      delivers enhanced value to global clients:
                    </p>
                    <ul>
                      <li>
                        Improved{" "}
                        <b>international credibility and brand trust</b>
                      </li>
                      <li>
                        Faster and smoother <b>cross-border transactions</b>
                      </li>
                      <li>
                        Compliance with{" "}
                        <b>global data security and regulatory standards</b>
                      </li>
                      <li>
                        Reliable <b>enterprise-grade solutions</b> for startups
                        and large organizations
                      </li>
                      <li>
                        Long-term stability for international partnerships
                      </li>
                    </ul>
                    <p>
                      This global structure enables Layerex Technologies to
                      serve businesses across multiple regions efficiently.
                    </p>
                    <h3>
                      <b>Services Offered by Layerex Technologies Pvt Ltd</b>
                    </h3>
                    <p>
                      Layerex Technologies provides a comprehensive range of
                      advanced IT and digital services, including:
                    </p>
                    <ul>
                      <li>Blockchain Development & Web3 Solutions</li>
                      <li>Custom Software Development</li>
                      <li>Web Application & Mobile App Development</li>
                      <li>Cloud Computing & DevOps Services</li>
                      <li>Artificial Intelligence (AI) & Data Analytics</li>
                      <li>Enterprise IT Consulting & Digital Transformation</li>
                    </ul>
                    <p>
                      Each service is designed to help businesses innovate,
                      scale, and compete in the global digital economy.
                    </p>
                  </div>
                </div>
                <div className="blogditup">
                  <h2>Recent Posts</h2>
                  <ul className="slider-class row">
                    <div className="col-lg-6 col-12">
                      <li className="resent_post">
                        <Link href="#">
                          <Image
                            src={shopifyImg}
                            className="attachment-full size-full wp-post-image"
                            alt="How AR is Reshaping Retail and E-Commerce"
                            decoding="async"
                          />
                          <p className="slider-caption-class">
                            Supercharge Your E-commerce Growth with Shopify
                            Expertise
                          </p>
                        </Link>
                      </li>
                    </div>
                    <div className="col-lg-4 col-12">
                      {/* <li>
                                                <Link href="#">
                                                    <Image
                                                        width="240px"
                                                        height="150px"
                                                        src={c2}
                                                        className="attachment-full size-full wp-post-image"
                                                        alt="How AR is Reshaping Retail and E-Commerce"
                                                        decoding="async"
                                                    />
                                                    <p className="slider-caption-class">
                                                        7 Proven Strategies to Rank Your Website in Google's SGE
                                                    </p>
                                                </Link>
                                            </li> */}
                    </div>
                    <div className="col-lg-4 col-12">
                      {/* <li>
                                                <Link href="#">
                                                    <Image
                                                        width="240px"
                                                        height="150px"
                                                        src={c3}
                                                        className="attachment-full size-full wp-post-image"
                                                        alt="How AR is Reshaping Retail and E-Commerce"
                                                        decoding="async"
                                                    />
                                                    <p className="slider-caption-class">
                                                        Asvayuk Technologies Wins Liferay DXP Implementation Project
                                                        for Dubai CommerCity
                                                    </p>
                                                </Link>
                                            </li> */}
                    </div>
                  </ul>
                </div>
              </Col>
              <div className="col-12 col-lg-4 col-md-4 col-sm-12">
              <ContactFormComp />
              </div>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default registerNews;
