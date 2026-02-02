"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import c3 from "@/assets/Images/shopi.webp";
import seo from "@/assets/Images/it-solution.webp";

import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import CardBlog from "@/components/CardBlog/CardBlog";

const BlogPage = () => {
  return (
    <>
      <main>
        {/* <section className="blog-banner">
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
        </section> */}

            <section className="blog_banner_content p-5">
                    <Container>
                        <Row>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                      
                                            <CardBlog singleBlogImg={seo} time=' 02 feb 2026' blogTitle='Top 5 Best IT & Web Development Companies in Singapore (2026)' blogPara='Singapore’s digital landscape is changing quickly with the Smart Nation 2.0 initiative.' CommentNum='0' viwer='285' urlSingleBlog='/blog/singleBlog' />
                                       
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
