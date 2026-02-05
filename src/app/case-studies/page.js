"use client";
import { Breadcrumb, Container } from "react-bootstrap";
import caseStuBanner from "@/assets/Images/caseStuBanner.webp";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BannerButton from "@/components/BannerBtn/BannerButton";
import CaseCard from "@/components/CaseCard/CaseCard";
import caseLogo1 from "@/assets/Images/caseLogo1.webp";
import caseLogo2 from "@/assets/Images/aryanslogo.webp";
import caseLogo3 from "@/assets/Images/layerextechlogo.webp";
import caseLogo4 from "@/assets/Images/kamconlogo.webp";
import caseLogo5 from "@/assets/Images/s5logo.webp";
import caseLogo6 from "@/assets/Images/fortunenftlogo.webp";
import caseLogo7 from "@/assets/Images/bookmytask_logo.webp";
import caseLogo8 from "@/assets/Images/wibizlogo.webp";
import layerx from "@/assets/Images/layerX.webp";
import btCash from "@/assets/Images/btCash.webp";
import layerlogo from "@/assets/Images/layerLogo.jpg";
import rel20 from "@/assets/Images/rel20.png";
import AppImages from "@/config/constant/app.images";

const caseStudy = () => {
  return (
    <>
      <main>
        <section className="caseStudies_main">
          <Container className="pb-0 pb-lg-5 pb-md-5">
            <div className="Casemain_content">
              <div className="row align-items-center">
                <div className="col-lg-6 col-sm-12 ">
                  <Breadcrumb>
                    <Breadcrumb.Item linkAs="span">
                      <Link href="/">Home</Link>
                    </Breadcrumb.Item>

                    <Breadcrumb.Item active>Case Studies</Breadcrumb.Item>
                  </Breadcrumb>
                  <h1 className="caseStuides_heading pt-3">
                    Technological Innovations: Practical Solutions, Advancing
                    Digital Evolution
                  </h1>
                  <div className="my-3 my-lg-5 my-md-5">
                    <BannerButton
                      btnTitle="Free Consultation"
                      url="/contact-us"
                    />
                  </div>
                </div>
                <div className="caseBanner col-lg-6 col-12">
                  <Image src={caseStuBanner} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="singleCaseplan py-5">
          <Container>


            <CaseCard
              caseLogo={caseLogo2}
              caseTitle="EMPOWERING STUDENTS THROUGH ACCESSIBLE, FUTURE-READY EDUCATION."
              tools1="Wordpress Development"
              tools2="User journey"
              tools3="UX Writing"
              countryName="India"
              url="/case-studies/aryans-group-of-colleges"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu2}
              cardChild="card_child_1 card_child_2"
              cardImgClass="card_img card_img2"
            />

            <CaseCard
              caseLogo={caseLogo3}
              caseTitle="ENGINEERING THE FUTURE OF CONNECTED ECOSYSTEMS"
              tools1="AI Ecosystem
"
              tools2="Fintech & SaaS
"
              tools3="Smart City Infrastructure"
              countryName="Worldwide"
              url="/case-studies/layerextech"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu3}
              cardChild="card_child_1 card_child_3"
              cardImgClass="card_img card_img3"
            />

            <CaseCard
              caseLogo={caseLogo4}
              caseTitle="PRECISION-ENGINEERED DESIGN AND ACOUSTIC SOLUTIONS"
              tools1="Wordpress Development"
              tools2="Elementor"
              tools3="UX Writing"
              countryName="Canada"
              url="/case-studies/kamcon"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu4}
              cardChild="card_child_1 card_child_4"
              cardImgClass="card_img card_img4"
            />

            <CaseCard
              caseLogo={caseLogo5}
              caseTitle="ELEVATING MEDIA PRODUCTION IN THE GTA"
              tools1="Wordpress Development"
              tools2="Elementor"
              tools3="UX Writing"
              countryName="Canada"
              url="/case-studies/s5podcaststudio"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu5}
              cardChild="card_child_1 card_child_5"
              cardImgClass="card_img card_img5"
            />

            <CaseCard
              caseLogo={caseLogo6}
              caseTitle="REVOLUTIONIZING THE WEB3 MARKETPLACE EXPERIENCE"
              tools1="Next js"
              tools2="Web3"
              tools3="Node"
              countryName="Worldwide"
              url="/case-studies/fortunenft"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu1}
              cardChild="card_child_1 card_child_6"
              cardImgClass="card_img card_img6"
            />



            <CaseCard
              caseLogo={caseLogo8}
              caseTitle="AUTOMATING THE FUTURE OF CUSTOMER ENGAGEMENT"
              tools1="AI Workforce"
              tools2="Omnichannel Automation"
              tools3="Lead Management"
              countryName="Worldwide"
              url="/case-studies/wibiz"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu6}
              cardChild="card_child_1 card_child_8"
              cardImgClass="card_img card_img8"
            />




          </Container>
        </section>
      </main>
    </>
  );
};

export default caseStudy;
