import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import brandlogo from "@/assets/Images/fortunenftlogo.webp";
import optimization from "@/assets/Images/optimization.png";
import technicalseo from "@/assets/Images/technicalseo.png";
import backlink from "@/assets/Images/backlink.png";
import content from "@/assets/Images/content.png";
import cs1 from "@/assets/Images/fortune1.png";
import conclusion from "@/assets/Images/conclusion.webp";
import AppImages from "@/config/constant/app.images";
import CaseStudySlider from "@/components/CaseStudySlider/CaseStudySlider";

const fortunenft = () => {
  return (
    <>
      <main>
        {/* HERO SECTION */}
        <section>
          <Container fluid>
            <div
              className="row align-items-center"
              style={{ background: "#fff4f4" }}
            >
              <div className="ms-auto col-lg-4 col-md-6 col-12 col-sm-12">
                <div className="fullcase_details">
                  <div className="fullCaseStudy_slider_logo">
                    <Image
                      src={brandlogo}
                      alt="FortuneNFT Web3 Marketplace"
                      style={{ mixBlendMode: "darken" }}
                    />
                  </div>
                  <div className="fullCaseStudy_textContent py-4">
                    <h2 className="fw-semibold lh-base fs-1">
                      REVOLUTIONIZING THE WEB3 MARKETPLACE EXPERIENCE
                    </h2>
                    <div className="subfullCaseStudy d-flex gap-3 py-4">
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Web3 Marketplace</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Utility NFTs</span>
                      </div>
                      <div className="bg-dark text-white py-1 px-2 rounded-2">
                        <span>Decentralized Finance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12 col-sm-12 d-flex justify-content-center justify-content-lg-end align-items-center px-0">
                <div className="fullCaseStudy_img w-75">
                  <Image
                    src={AppImages.casestudySliderImg.caseStu1}
                    alt="FortuneNFT Case Study Hero"
                    width={507}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CONCEPT + PROBLEM */}
        <section style={{ background: "#ECFFFA" }}>
          <Container className="py-5">
            <Row>
              <Col lg={6}>
                <h1 className="fw-bold mb-3">FortuneNFT</h1>
                <p>
                  FortuneNFT.world is a next-generation decentralized ecosystem
                  designed for the Web3 era, focused on high-utility digital
                  assets. The mission was to move beyond static NFT collecting
                  and enable staking, bidding, and cross-network trading.
                </p>
                <p>
                  By delivering a secure and transparent blockchain-based
                  environment, the platform empowers a global community of
                  creators and investors—bridging digital creativity with
                  real-world financial opportunities.
                </p>
              </Col>

              <Col lg="6" md="12" xm="12">
                <div className="problemstatement p-4 bg-dark text-white rounded-4">
                  <div className="head">
                    <h4 className="titletext text-white mb-3 border-bottom pb-2">
                      Our Statement
                    </h4>
                  </div>
                  <div className="content">
                    <p className="text-white">
                      We specialize in building the infrastructure for the
                      future of finance. For FortuneNFT, we engineered a scalable
                      marketplace that prioritizes blockchain-verified ownership
                      and seamless user interaction.
                    </p>
                    <p className="text-white">
                      Every digital asset listed on the platform is designed to
                      offer tangible earning potential and long-term utility,
                      redefining how value is created in the NFT ecosystem.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* STRATEGY */}
        <section style={{ background: "#ECFFFA" }}>
          <Container className="py-5">
            <Row>
              <h2 className="stategy_title fw-bold">
                Strategy and{" "}
                <span style={{ color: "#249F81" }}>Implementation</span>
              </h2>
            </Row>

            <Row className="py-4">
              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={optimization} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Decentralized Architecture
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Implemented a fully decentralized backend ensuring all
                    transactions are transparent, immutable, and verifiable
                    across multiple blockchain networks.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={backlink} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Utility-Driven NFTs
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Built advanced smart contracts enabling NFT staking and
                    reward generation, transforming digital assets into income-
                    producing instruments.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={technicalseo} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Secure Bidding System
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Developed a real-time, on-chain bidding engine that prevents
                    fraud and ensures fair auctions with zero-latency
                    verification.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
                <div className="strategycard">
                  <div className="cardimg mb-3">
                    <Image src={content} alt="" width={60} height={60} />
                  </div>
                  <h6 className="cardtitle mb-2 fw-bold">
                    Seamless Asset Bridging
                  </h6>
                  <p className="cardcontent" style={{ fontSize: "14px" }}>
                    Optimized metadata and legal-tech integrations to support
                    fractionalization and trading of real-world asset-backed
                    NFTs.
                  </p>
                </div>
              </div>
            </Row>
          </Container>
        </section>

        {/* GOALS */}
        <section>
          <Container className="py-5">
            <Row>
              <Col lg={7}>
                <h2 className="sectitle mb-3 fw-bold">Project Goals</h2>
                <p>
                  The primary goal was to create a decentralized marketplace
                  where earning potential, security, and transparency are core
                  to the user experience—scaling seamlessly for global Web3
                  adoption.
                </p>

                <Row>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Utility NFTs</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Blockchain Security</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-6 mb-3">
                    <div className="pr_goals">
                      <span>Scalable Web3 Growth</span>
                    </div>
                  </div>
                </Row>
              </Col>

              <Col lg={5} className="Tech_stack d-none d-lg-block">
                <h2 className="fw-bold text-center">Tech Stack</h2>
                <div className="wrapper">
                  <div className="mongo"><p className="mongo-text">Next</p></div>
                  <div className="express"><p className="express-text">Web3</p></div>
                  <div className="react"><p className="react-text">Typescript</p></div>
                  <div className="node"><p className="node-text">Node</p></div>
                  <div className="circle"></div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* RESULTS */}
        <section>
          <Container className="py-5">
            <h2 className="sectitle mb-3 fw-bold">Results After Launch</h2>
            <p>
              FortuneNFT.world set a new benchmark for decentralized
              marketplaces—attracting sophisticated investors and creators by
              focusing on earning potential over static collectibles.
            </p>

            <Row>
              <div className="col-lg-8 col-md-8 col-12">
                <ul>
                  <li><strong>Next-Gen Engagement:</strong> Increased daily active sessions via staking and bidding.</li>
                  <li><strong>Multi-Network Fluidity:</strong> Seamless cross-chain asset interaction.</li>
                  <li><strong>Verified Ownership Trust:</strong> 100% transparent asset history.</li>
                  <li><strong>Earning Potential Growth:</strong> High retention through staking rewards.</li>
                  <li><strong>Scalable Infrastructure:</strong> Handled peak NFT drops without performance loss.</li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-4 col-12">
                <Image src={cs1} alt="" className="img-fluid h-100 object-fit-cover" />
              </div>
            </Row>
          </Container>
        </section>

        {/* CONCLUSION */}
        <section>
          <Container className="py-5">
            <Row>
              <Col lg={4}>
                <Image src={conclusion} alt="" width={"100%"} />
              </Col>

              <Col lg={8}>
                <h2 className="sectitle fw-bold mb-3">Conclusion</h2>
                <p>
                  The FortuneNFT partnership delivered a cutting-edge Web3
                  marketplace that combines blockchain security with real-world
                  financial utility—empowering users to earn, grow, and invest.
                </p>
                <p>
                  This project stands as a testament to our ability to engineer
                  complex, secure, and scalable decentralized systems that
                  define the future of digital asset ownership.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <CaseStudySlider />
      </main>
    </>
  );
};

export default fortunenft;
