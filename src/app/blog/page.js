"use client";

import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import c3 from "@/assets/Images/managed.webp";
import c4 from "@/assets/Images/bthumb4.webp";
import c5 from "@/assets/Images/data-backup.webp";
import c6 from "@/assets/Images/bthumb5.webp";
import seo from "@/assets/Images/it-solution.webp";

import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import CardBlog from "@/components/CardBlog/CardBlog";
import ContactFormComp from "@/components/ContactFormComp/ContactFormComp";

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
                    <CardBlog
                      singleBlogImg={seo}
                      alt="Leading IT solutions and web development experts in Singapore office 2026"
                      time=" 02 feb 2026"
                      blogTitle="Top 5 Best IT & Web Development Companies in Singapore (2026)"
                      blogPara="Singapore’s digital landscape is changing quickly with the Smart Nation 2.0 initiative."
                      CommentNum="0"
                      viwer="285"
                      urlSingleBlog="/blog/best-it-company-singapore-2026"
                    />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                    <CardBlog
                      singleBlogImg={c3}
                      alt="Professional IT engineers providing managed IT support and cybersecurity solutions for a small business in Singapore."
                      time=" 03 feb 2026"
                      blogTitle="Best Managed IT Services in Singapore for Small Businesses | Layerex"
                      blogPara="Running a business these days means utilizing technology extensively. We must keep our networks safe, use cloud systems, and manage our data."
                      CommentNum="0"
                      viwer="285"
                      urlSingleBlog="/blog/managed-it-services-singapore-small-business"
                    />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                    <CardBlog
                      singleBlogImg={c4}
                      alt="Digital marketing team planning SEO, Google Ads, and social media strategy for business growth in the Singapore office"
                      time=" 04 feb 2026"
                      blogTitle="Best Digital Marketing Company in Singapore | Layerex"
                      blogPara="Digital marketing team planning SEO, Google Ads, and social media strategy for business growth in the Singapore office"
                      CommentNum="0"
                      viwer="285"
                      urlSingleBlog="/blog/best-digital-marketing-company-singapore"
                    />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                    <CardBlog
                      singleBlogImg={c5}
                      time=" 05 feb 2026"
                      blogTitle="Why Data Backup & Disaster Recovery Is Your
Business Lifeline"
                      blogPara="Imagine this scenario: It is a Monday morning, and your team arrives ready to start the week. Suddenly, the system fails."
                      CommentNum="0"
                      viwer="285"
                      urlSingleBlog="/blog/data-backup-disaster-recovery-singapore"
                    />
                  </Col>
                  <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                    <CardBlog
                      singleBlogImg={c6}
                      alt="web development team designing a responsive business website on a laptop in a modern Singapore office"
                      time=" 05 feb 2026"
                      blogTitle="Website Development Company Singapore | Layerex"
                      blogPara="web development team designing a responsive business website on a laptop in a modern Singapore office"
                      CommentNum="0"
                      viwer="285"
                      urlSingleBlog="/blog/website-development-company-singapore"
                    />
                  </Col>
                  {/* <Col lg={6} md={6} sm={12} xs={12} className="pb-4">
                                       
                                            <CardBlog singleBlogImg={c5} time=' 03 feb 2026' blogTitle='Website Development Company Singapore | Layerex' blogPara='web development team designing a responsive business website on a laptop in a modern Singapore office' CommentNum='0' viwer='285' urlSingleBlog='/blog/website-development-company-singapore' />
                                       
                                    </Col> */}
                </Row>
              </Col>
              <Col lg={4} md={4} sm={12} xs={12}>
                <ContactFormComp />
              </Col>
            </Row>
          </Container>
        </section>
      </main>
    </>
  );
};

export default BlogPage;
