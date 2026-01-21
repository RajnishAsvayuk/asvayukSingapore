"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import c3 from "@/assets/Images/shopi.webp";
import c4 from "@/assets/Images/portal_banner.webp";
import seo from "@/assets/Images/seo_banner.webp";
import mlm from "@/assets/Images/mlm.webp";
import smart from "@/assets/Images/smart.webp";
import crypto from "@/assets/Images/crypto.webp";
import cryptoEx from "@/assets/Images/cryptoEx.webp";
import BlockChainI from "@/assets/Images/BlockchainI.webp";
import MetaverseImage from '@/assets/Images/MetaverseDev.png';
import SoftwareDevImage from '@/assets/Images/softwareDeve.png';
import SmartContractImage from '@/assets/Images/TopSmartContactDevelopment.png';
import TokenDevImage from '@/assets/Images/Token_Dev.png';
import NFTDevImage from '@/assets/Images/NFTDev.png';
import DAppImage from '@/assets/Images/DAPPdev.png';
import MLMImage from '@/assets/Images/mlmBinary.png';
import HybridMLMImage from '@/assets/Images/HybridMLM.png';
import MLMPlanImage from '@/assets/Images/mlmPlanSoftware.png';
import Web3DevImage from '@/assets/Images/web3Dev.png';
import NetworkMarketingImage from '@/assets/Images/networkMarketing.png';
import CryptoAppImage from '@/assets/Images/CryptocurrencyAppDev.png';
import UIUXDesignImage from '@/assets/Images/UIUX_DesignSolutions.png';
import ShopifyDevImage from '@/assets/Images/shopifyDeve.png';
import SEOImage from '@/assets/Images/seoWeb.png';
import CRMImage from '@/assets/Images/crmSoftware.png';
import BlockchainSecurityImage from '@/assets/Images/secureBlockchain.png';
import ecommerceDeveImg from "@/assets/Images/ecommerceDeve.webp";
import webDevServices from "@/assets/Images/webDevServices.png";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import CardBlog from "@/components/CardBlog/CardBlog";

const BlogPage = () => {
  return (
    <>
      <main>
        <section className="blog-banner">
          <Swiper
            modules={[Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            className="blogSwiper"
          >
            <SwiperSlide>
              <div className="blogBannerImg">
                <Image src={seo} className="img-fluid" alt="SEO Banner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="blogBannerImg">
                <Image src={c3} className="img-fluid" alt="Shopify Banner" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="blogBannerImg">
                <Image src={c4} className="img-fluid" alt="Portal Banner" />
              </div>
            </SwiperSlide>
          </Swiper>
        </section>

            <section className="blog_banner_content p-5">
                    <Container>
                        <Row>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                      
                                            <CardBlog singleBlogImg={seo} time=' 6 Nov 2024' blogTitle='Boost Your Business with SEO: Key Tactics to Drive Organic Traffic' blogPara='Your guide to SEO success—explore top tips for ranking higher, increasing traffic, and optimizing your digital strategy.' CommentNum='0' viwer='285' urlSingleBlog='/blog/singleBlog' />
                                       
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog singleBlogImg={c3} time=' 7 Nov 2024' blogTitle='Revolutionize Your Business with Asvayuks Shopify Development' blogPara='Custom Shopify solutions to grow your e-commerce business with expert setup, app development, and ongoing support.' CommentNum='0' viwer='285' urlSingleBlog='/blog/shopifyBlog' />
                                       
                                    </Col>
                                    

                                </Row>
                            </Col>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <div className="form-container">
                                    <iframe width="100%" height="480px" src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca" frameBorder="0" allowfullscreen></iframe>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section >
      </main>
    </>
  );
};

export default BlogPage;
