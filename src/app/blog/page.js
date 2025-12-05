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
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog singleBlogImg={c4} time=' 17 May, 2024' blogTitle='Enhance Efficiency with Custom Enterprise Portals' blogPara='Transform your business with Asvayuk Tech’s enterprise portals. Simplify processes, improve collaboration, and drive growth with a centralized solution tailored to your needs' CommentNum='0' viwer='285' urlSingleBlog='/blog/enterpriseBlog' />
                                       
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog singleBlogImg={mlm} time=' 11 Nov 2024' blogTitle='MLM Software Developer in Singapore' blogPara="Asvayuk Technologies takes pride in developing highly advanced MLM software development for your business to operate streamlined operations. " CommentNum='0' viwer='285' urlSingleBlog='/blog/mlmBlog' />
                                       
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                     
                                            <CardBlog singleBlogImg={smart} time=' 12 Nov 2024' blogTitle='Smart Contract Developer in Singapore' blogPara="With technology revolutionizing industries today by taking agreements with smart contracts open up space for new possibilities." CommentNum='0' viwer='285' urlSingleBlog='/blog/smartContractBlog' />
                                       
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog singleBlogImg={crypto} time='11 Nov 2024' blogTitle='Crypto Software Developer in Singapore' blogPara="Mastering Machine Learning Models (MLMs) is an essential skill for software developers looking to stay competitive in today's tech-driven world." CommentNum='0' viwer='285' urlSingleBlog='/blog/cryptoSoftwareDevBlog' />
                                       
                                    </Col>
                               
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                      
                                            <CardBlog singleBlogImg={BlockChainI} time=' 12 Nov 2024' blogTitle='Blockchain Developer in Singapore' blogPara="Blockchain technology has indeed been revolutionizing the way various industries function worldwide. As the world accelerates and changes." CommentNum='0' viwer='285' urlSingleBlog='/blog/blockchainDevBlog' />
                                       
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                        
                                            <CardBlog
                                                singleBlogImg={MetaverseImage}
                                                time="12 Dec 2024"
                                                blogTitle="Metaverse Developer in Singapore"
                                                blogPara="Explore the emerging field of metaverse development and its impact on the digital world."
                                                CommentNum="0"
                                                viwer="150"
                                                urlSingleBlog="/blog/metaverseBlog"
                                            />
                                       
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog
                                                singleBlogImg={SoftwareDevImage}
                                                time="12 Dec 2024"
                                                blogTitle="Software Developer in Singapore"
                                                blogPara="Learn about the role of software developers and how they are shaping the tech industry."
                                                CommentNum="2"
                                                viwer="200"
                                                urlSingleBlog="/blog/softwareDevBlog"
                                            />
                                       
                                    </Col>

                                    {/* <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog
                                                singleBlogImg={SmartContractImage}
                                                time="12 Dec 2024"
                                                blogTitle="Smart Contract Developer in"
                                                blogPara="Smart contracts are revolutionizing industries by automating processes securely."
                                                CommentNum="3"
                                                viwer="120"
                                                urlSingleBlog="/blog/smart-contract-developer"
                                            />
                                       
                                    </Col> */}

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                     
                                            <CardBlog
                                                singleBlogImg={TokenDevImage}
                                                time="12 Dec 2024"
                                                blogTitle="Token Developer in Singapore"
                                                blogPara="Explore how token developers are transforming the blockchain ecosystem with secure token designs."
                                                CommentNum="0"
                                                viwer="175"
                                                urlSingleBlog="/blog/tokenDevBlog"
                                            />
                                       
                                    </Col>

                                    {/* <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                     
                                            <CardBlog
                                                singleBlogImg={NFTDevImage}
                                                time="12 Dec 2024"
                                                blogTitle="NFT Development in Singapore"
                                                blogPara="NFTs are changing the way digital assets are traded and owned. Learn about the process here."
                                                CommentNum="1"
                                                viwer="230"
                                                urlSingleBlog="/blog/nft-development-Singapore"
                                            />
                                       
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                      
                                            <CardBlog
                                                singleBlogImg={DAppImage}
                                                time="12 Dec 2024"
                                                blogTitle="DApp Development in Singapore"
                                                blogPara="Discover the world of decentralized applications and how they’re reshaping the digital landscape."
                                                CommentNum="0"
                                                viwer="190"
                                                urlSingleBlog="/blog/dapp-development-Singapore"
                                            />
                                       
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                      
                                            <CardBlog
                                                singleBlogImg={MLMImage}
                                                time="12 Dec 2024"
                                                blogTitle="Binary MLM Software in Singapore"
                                                blogPara="Explore binary MLM software solutions and how they help in network marketing."
                                                CommentNum="0"
                                                viwer="220"
                                                urlSingleBlog="/blog/binary-mlm-software-Singapore"
                                            />
                                       
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                      
                                            <CardBlog
                                                singleBlogImg={HybridMLMImage}
                                                time="12 Dec 2024"
                                                blogTitle="Hybrid MLM Software Developer in Singapore"
                                                blogPara="Hybrid MLM software combines the benefits of various MLM models to maximize user engagement."
                                                CommentNum="0"
                                                viwer="210"
                                                urlSingleBlog="/blog/hybrid-mlm-software-developer-Singapore"
                                            />
                                       
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog
                                                singleBlogImg={MLMPlanImage}
                                                time="12 Dec 2024"
                                                blogTitle="MLM Plan Generator in Singapore"
                                                blogPara="Generate customized MLM plans with our efficient MLM plan generator software."
                                                CommentNum="1"
                                                viwer="160"
                                                urlSingleBlog="/blog/mlm-plan-generator-Singapore"
                                            />
                                       
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog
                                                singleBlogImg={Web3DevImage}
                                                time="12 Dec 2024"
                                                blogTitle="Web3 Development: The Future of the Internet"
                                                blogPara="Web3 is revolutionizing the internet with decentralized technologies. Find out more about its potential."
                                                CommentNum="2"
                                                viwer="300"
                                                urlSingleBlog="/blog/web3-development-future-internet"
                                            />
                                       
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog
                                                singleBlogImg={NetworkMarketingImage}
                                                time="12 Dec 2024"
                                                blogTitle="Network Marketing Software Development: Powering Your Business Expansion"
                                                blogPara="Streamline your network marketing business with top-notch software solutions."
                                                CommentNum="0"
                                                viwer="210"
                                                urlSingleBlog="/blog/network-marketing-software"
                                            />
                                       
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                      
                                            <CardBlog
                                                singleBlogImg={CryptoAppImage}
                                                time="12 Dec 2024"
                                                blogTitle="Cryptocurrency App Development: Revolutionizing the Digital Economy"
                                                blogPara="Develop secure and scalable cryptocurrency apps for a seamless user experience."
                                                CommentNum="1"
                                                viwer="250"
                                                urlSingleBlog="/blog/cryptocurrency-app-development"
                                            />
                                       
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                   
                                            <CardBlog
                                                singleBlogImg={UIUXDesignImage}
                                                time="12 Dec 2024"
                                                blogTitle="UI/UX Design Services in Singapore"
                                                blogPara="Create intuitive and visually appealing designs with professional UI/UX design services."
                                                CommentNum="0"
                                                viwer="220"
                                                urlSingleBlog="/blog/ui-ux-design-services-Singapore"
                                            />
                                       
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog
                                                singleBlogImg={ShopifyDevImage}
                                                time="12 Dec 2024"
                                                blogTitle="Shopify Development Services in Singapore"
                                                blogPara="Get top-notch Shopify development services to build your online store efficiently."
                                                CommentNum="2"
                                                viwer="260"
                                                urlSingleBlog="/blog/shopify-development-services-Singapore"
                                            />
                                       
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                     
                                            <CardBlog
                                                singleBlogImg={SEOImage}
                                                time="12 Dec 2024"
                                                blogTitle="SEO Web Design Services in Singapore: Where Creativity Meets Optimization"
                                                blogPara="Improve your website's ranking and design with our expert SEO and web design services."
                                                CommentNum="1"
                                                viwer="240"
                                                urlSingleBlog="/blog/seo-web-design-services-Singapore"
                                            />
                                       
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog
                                                singleBlogImg={CRMImage}
                                                time="12 Dec 2024"
                                                blogTitle="Singapore CRM Software Solutions: Empowering Business Growth"
                                                blogPara="Enhance customer relationships with CRM software designed to manage and automate interactions."
                                                CommentNum="0"
                                                viwer="280"
                                                urlSingleBlog="/blog/Singapore-crm-software-solutions"
                                            />
                                       
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog
                                                singleBlogImg={BlockchainSecurityImage}
                                                time="12 Dec 2024"
                                                blogTitle="Secure Blockchain Software Development: Revolutionizing Digital Security"
                                                blogPara="Develop secure blockchain software with the latest technologies and best practices."
                                                CommentNum="1"
                                                viwer="300"
                                                urlSingleBlog="/blog/secure-blockchain-software-development"
                                            />
                                       
                                    </Col>

                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog
                                                singleBlogImg={ecommerceDeveImg}
                                                time="12 Dec 2024"
                                                blogTitle="E-commerce Web Development in Singapore with Asvayuk Technologies: Your Partner for Success"
                                                blogPara="Singapore is home to a rapidly growing business landscape, with many companies seeking to tap into the advantages of e-commerce. "
                                                CommentNum="1"
                                                viwer="300"
                                                urlSingleBlog="/blog/ecommerce-web-development-Singapore"
                                            />
                                       
                                    </Col>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog
                                                singleBlogImg={webDevServices}
                                                time="12 Dec 2024"
                                                blogTitle="Custom Web Design in Singapore: Tailored Solutions for Your Digital Success"
                                                blogPara="With Asvayuk Technologies, you get a custom web design service in Singapore that represents what you envision, engages with your audience, and brings concrete results."
                                                CommentNum="1"
                                                viwer="300"
                                                urlSingleBlog="/blog/custom-web-design-Singapore"
                                            />
                                       
                                    </Col> */}

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
