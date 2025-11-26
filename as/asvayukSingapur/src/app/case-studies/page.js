"use client";
import { Breadcrumb, Container } from "react-bootstrap";
import caseStuBanner from "../../../public/Images/caseStuBanner.webp";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BannerButton from "@/components/BannerBtn/BannerButton";
import CaseCard from "@/components/CaseCard/CaseCard";
import caseLogo1 from "../../../public/Images/caseLogo1.webp";
import caseLogo2 from "../../../public/Images/moonlight_logo.webp";
import caseLogo3 from "../../../public/Images/caseLogo3.webp";
import caseLogo4 from "../../../public/Images/49thcoffee_logo.webp";
import caseLogo5 from "../../../public/Images/kri_logo.webp";
import caseLogo6 from "../../../public/Images/SpiceTribe_logo.webp";
import caseLogo7 from "../../../public/Images/bookmytask_logo.webp";
import caseLogo8 from "../../../public/Images/kre.webp";
import layerx from "../../../public/Images/layerX.webp";
import btCash from "../../../public/Images/btCash.webp";
import layerlogo from "../../../public/Images/layerLogo.jpg";
import rel20 from "../../../public/Images/rel20.png";
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
              caseLogo={caseLogo1}
              caseTitle="EVERY DAY, EVERY ADVENTURE."
              tools1="shopify Development"
              tools2="User journey"
              tools3="UX Writing"
              countryName="Australia"
              url="/case-studies/quadlock"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu}
              cardChild="card_child_1"
              cardImgClass="card_img"
            />

            <CaseCard
              caseLogo={caseLogo2}
              caseTitle="IT TAKES A CREATIVE MIND TO BE IN THE FASHION BUSINESS."
              tools1="shopify Development"
              tools2="User journey"
              tools3="UX Writing"
              countryName="Qatar"
              url="/case-studies/moonlightconcept"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu2}
              cardChild="card_child_1 card_child_2"
              cardImgClass="card_img card_img2"
            />

            <CaseCard
              caseLogo={caseLogo3}
              caseTitle="Modern lighting, furniture & accessories in Ottawa Canada."
              tools1="shopify Development"
              tools2="User journey"
              tools3="UX Writing"
              countryName="Canada"
              url="/case-studies/themodernshop"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu3}
              cardChild="card_child_1 card_child_3"
              cardImgClass="card_img card_img3"
            />

            <CaseCard
              caseLogo={caseLogo4}
              caseTitle="Small-batch roasting and always fresh."
              tools1="shopify Development"
              tools2="User journey"
              tools3="UX Writing"
              countryName="Canada"
              url="/case-studies/49thcoffee"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu4}
              cardChild="card_child_1 card_child_4"
              cardImgClass="card_img card_img4"
            />

            <CaseCard
              caseLogo={caseLogo5}
              caseTitle="Explore our exquisite collection of pearls jewellery and find your perfect piece today!"
              tools1="shopify Development"
              tools2="User journey"
              tools3="UX Writing"
              countryName="India"
              url="/case-studies/krishnapearlsandjewellers"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu5}
              cardChild="card_child_1 card_child_5"
              cardImgClass="card_img card_img5"
            />

            <CaseCard
              caseLogo={caseLogo6}
              caseTitle="Add Flavors to Your Recipes with the Favorite Spice-Brand of top Chefs."
              tools1="shopify Development"
              tools2="User journey"
              tools3="UX Writing"
              countryName="California"
              url="/case-studies/spicetribe"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu1}
              cardChild="card_child_1 card_child_6"
              cardImgClass="card_img card_img6"
            />

            <CaseCard
              caseLogo={caseLogo7}
              caseTitle="Connecting you with skilled professionals for every task, big or small."
              tools1="shopify Development"
              tools2="User journey"
              tools3="UX Writing"
              countryName="California"
              url="/case-studies/bookmytask"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu8}
              cardChild="card_child_1 card_child_7"
              cardImgClass="card_img card_img7"
            />

            <CaseCard
              caseLogo={caseLogo8}
              caseTitle="Explore our exquisite collection of pearls jewellery and find your perfect piece today!"
              tools1="shopify Development"
              tools2="User journey"
              tools3="UX Writing"
              countryName="California"
              url="/case-studies/kreshya"
              btnTitle="View Case Study"
              caseImg={AppImages.casestudySliderImg.caseStu6}
              cardChild="card_child_1 card_child_8"
              cardImgClass="card_img card_img8"
            />

            <CaseCard
              caseLogo={layerlogo}
              caseTitle="Welcome To LayerEx – Your Gateway To Seamless Crypto Trading!"
              tools1="shopify Development"
              tools2="User journey"
              tools3="UX Writing"
              countryName="California"
              url="/case-studies/layerx"
              btnTitle="View Case Study"
              caseImg={layerx}
              cardChild="card_child_1 card_child_9"
              cardImgClass="card_img card_img9"
            />

            <CaseCard
              caseLogo={rel20}
              caseTitle="MTHT Token Listing"
              tools1="shopify Development"
              tools2="User journey"
              tools3="UX Writing"
              countryName="California"
              url="/case-studies/openseaCap"
              btnTitle="View Case Study"
              caseImg={btCash}
              cardChild="card_child_1 card_child_10"
              cardImgClass="card_img card_img10"
            />
          </Container>
        </section>
      </main>
    </>
  );
};

export default caseStudy;
