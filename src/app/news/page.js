"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import c3 from "@/assets/Images/news.png";
import seo from "@/assets/Images/seo_banner.webp";
import { Col, Container, Form, Row } from "react-bootstrap";
import Link from "next/link";
import CardBlog from "@/components/CardBlog/CardBlog";
import CardNews from "@/components/CardNews/CardNews";
import ContactFormComp from "@/components/ContactFormComp/ContactFormComp";

const news = () => {
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
                   <div  className="pb-4">
                    <CardNews
                      singleBlogImg={c3}
                      time=" February 02, 2026"
                      comment=" No Comment"
                      blogTitle="Layerex Technologies Pvt Ltd Registered in Singapore, Ready to Launch Global Operations
Singapore"
                      blogPara="Layerex Technologies Pvt Ltd, a fast-growing global technology solutions company, has officially been registered in Singapore and is now fully prepared to begin its business operations worldwide. This strategic registration..."
                      CommentNum="0"
                      viwer="285"
                      urlSingleBlog="/news/registerNews"
                      
                    />
                  </div>
               
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                {/* <div className="form-container">
                  <iframe
                    width="100%"
                    height="480px"
                    src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca"
                    frameBorder="0"
                    allowfullscreen
                  ></iframe>
                </div> */}
                  <ContactFormComp />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default news;
