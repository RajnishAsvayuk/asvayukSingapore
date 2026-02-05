import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MdKeyboardArrowRight } from 'react-icons/md'
// Images
import Image from "next/image" ;
import right_logo from '@/assets/Images/right-logo-2.webp'
import about_bg from '@/assets/Images/about-img.jpg'
import circle_1 from '@/assets/Images/circle_1.png'
import circle_2 from '@/assets/Images/circle_2.png'
import iso_img from '@/assets/Images/iso-img.webp'
import shopify_img from '@/assets/Images/shopify-img.webp'
import hubspot_img from '@/assets/Images/hubspot-img.webp'
import good_firms_logo from '@/assets/Images/good-firms-logo.webp'
import clutch_img from '@/assets/Images/clutch-img.webp'
import meydan from '@/assets/Images/meydan.webp'
import it_firms from '@/assets/Images/it-firms.webp'
import msme_img from '@/assets/Images/msme-img.webp'
import silicoon_india from '@/assets/Images/silicoon-india.webp'
import magento_img from '@/assets/Images/magento-img.webp'
import startup_india from '@/assets/Images/startup-india.webp'  
import iso_20 from '@/assets/Images/iso-img.webp'
import container from '@/assets/Images/container.webp'
import planning from '@/assets/Images/planning.webp'
import pen from '@/assets/Images/pen.webp'
import development from '@/assets/Images/development.webp'
import test from '@/assets/Images/test.webp'
import launch from '@/assets/Images/launch.webp'
const page = () => {
  return (
    <>
      <main>
        <div className="about_section ">
          <Container>
            <Row className='align-items-center pt-md-5'>
              <div className="left-box col-lg-6 pt-4 pt-lg-0">
                <nav
                  style={{ bsBreadcrumbDivider: '">"' }}
                  aria-label="breadcrumb"
                  className="border-0"    
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className='fw-semibold'>
                      <MdKeyboardArrowRight />
                      About Us
                    </li>
                  </ol>
                </nav>
                {/* <h1 className="left-para pt-1 fw-bold">
                  <Link href="https://maps.app.goo.gl/sDkN86Cnw1b1W8iK7">
                    Best IT & Website Development company in Singapore
                  </Link>
                </h1> */}
              </div>
              {/* <div className="right-box col-lg-6 mt-4  d-lg-block">
                <Image src={right_logo} alt="Best IT Solutions Company in Chandigarh" className="img-fluid" />
              </div> */}
            </Row>
            <Row className="py-md-5 my-0">
              <Col lg={5} pb={2} pb-lg={0} pb-md={0}>
                <div className="about_img">
                  <Image src={about_bg} className="img-fluid h-md-75 w-100" alt="web designing company in chandigarh it park" />
                </div>
              </Col>
              <Col lg={7} className="partner-para-right">
                <div className="px-3 py-3 py-md-0">
                  <h2>
                    <span>Leading IT Solutions
                    </span> & Website Development Company in Singapore
                  </h2>
                  <p className="para-below mt-4 ">
                    Layerex Technologies is a reliable IT and website development firm in Singapore, providing end-to-end solutions.
                    Our range of expertise includes software development, web design, mobile application development, blockchain, and AI-powered digital transformation. We empower businesses to grow, optimize operations, and drive quantifiable outcomes with cutting-edge technology and experts.

                  </p>
                  <div className="row justify-content-center justify-content-xl-start mb-4">
                    <div className="col col-auto mi-count-col mb-3 mb-md-0 mb-lg-2">
                      <div className="text-center ">
                        <div className="value text-success fw-bold mi-value d-flex align-items-center fs-4 gap-1">12<span className="fs-5">+</span></div>
                        <div className="label fw-  mi-lable-count">Years of Presence</div>
                      </div>
                    </div>
                    <div className="col col-auto mi-count-col mb-3 mb-md-0 mb-lg-2">
                      <div className="text-center ">
                        <div className="value text-success fw-bold mi-value d-flex align-items-center fs-4 gap-1">50 <span className="fs-5">+</span></div>
                        <div className="label fw-  mi-lable-count">Active Clients</div>
                      </div>
                    </div>
                    <div className="col col-auto mi-count-col mb-3 mb-md-0 mb-lg-2">
                      <div className="text-center ">
                        <div className="value text-success fw-bold mi-value d-flex align-items-center fs-4 gap-1">50<span className="fs-5">+</span></div>
                        <div className="label fw-  mi-lable-count">Dedicated Staff</div>
                      </div>
                    </div>

                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <section className='Our-Mission py-1 py-md-4'>
          <Container>
            <Row className="row pb-5 pt-1">
              <Col lg={6} className='our-mission'>

                <div className="core-values d-flex align-items-center gap-3">
                  <h2>Our Mission</h2>
                  <Image src={circle_1} alt='it services in chandigarh' />
                </div>
                <p className="pe-3">
                  Our purpose is to deliver outstanding IT and web development services in Singapore that promote innovation and bring business concepts to life.
                  We strive to:
                  Provide high-performing, scalable, and secure digital solutions.
                  Enable businesses with data-driven and AI-driven technologies.
                </p>
              </Col>
              <Col lg={6} className='our-vision'>
                <div className="core-values d-flex align-items-center gap-3">
                  <h2>Our Vision</h2>
                  <Image src={circle_2} alt='best it services in chandigarh and mohali' />
                </div>
                <p>
                  To be the best IT company and website development company in Singapore, empowering businesses to tap into technology's power for sustainable growth and digital innovation.
                  We envision a future where all organizations can leverage smart digital solutions to make a global impact.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="significance-section py-1 py-md-5">
          <Container>
            <Col xs={12} className="d-flex justify-content-center mt-5">
              <div className="certfication-headline">
                <h2 className="fw-semibold">Our Certifications &amp; Recognitions</h2>
              </div>
            </Col>
            <Row className="py-5 signi-img">
              {/* <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                  <Image src={iso_img} className="img-fluid" alt='it park chandigarh companies list' />
                </div>
              </Col> */}
              <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                  <Image src={shopify_img} className="img-fluid" alt='it companies in chandigarh for freshers' />
                </div>
              </Col>
              <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                  <Image src={hubspot_img} className="img-fluid" alt='top it companies in mohali' />
                </div>
              </Col>
              <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                  <Image className="goodfirm" src={good_firms_logo} alt='best it companies in chandigarh' />
                </div>
              </Col>
              <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                  <Image src={clutch_img} className="img-fluid" alt='web designing company in chandigarh it park' />
                </div>
              </Col>
              <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                  <Image className="dubai" src={meydan} alt='it services in chandigarh' />
                </div>
              </Col>
              <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                  <Image src={it_firms} className="img-fluid" alt='best it services in chandigarh and mohali' />
                </div>
              </Col>
              {/* <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                  <Image src={msme_img} className="img-fluid" alt='top it company in mohali' />
                </div>
              </Col> */}
              {/* <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                  <Image src={silicoon_india} className="img-fluid" alt='it software companies in chandigarh' />
                </div>
              </Col> */}
                {/* <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                  <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                    <Image src={magento_img} className="img-fluid" alt='it solutions chandigarh' />
                  </div>
                </Col> */}
              {/* <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                  <Image className="startup-india" src={startup_india} alt='it park chandigarh companies list' />
                </div>
              </Col> */}
              {/* <Col lg={2} md={3} sm={6} className="px-1 pb-2">
                <div className="bg-white p-4 d-flex align-items-center justify-content-center h-100">
                  <Image src={iso_20} className="img-fluid" alt='it companies in chandigarh for freshers' />
                </div>
              </Col> */}
            </Row>
          </Container>
        </section>

         <section className="bg-section">
          <Container>
            <Row className="d-flex flex-column text-center">
              <div className="main-bg w-100">
                <div className="inside-main py-5">
                  <h1 className="">What We Do Here?</h1>
                  <div className="work-para mt-5 ">
                    <p className='text-center'>
                      At Layerex Technologies, we take pride in our collaborative approach, working hand-in-hand with your team to dive deep into your unique goals and challenges. By fostering this partnership, we craft tailored solutions that harness the power of advanced technology. Our commitment ensures that your journey to success is not just guided but fueled with precision and passion. Together, we will turn your vision into reality!
                    </p>
                  </div>

                  <Row className="curly-img mt-5 d-flex ">
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image src={container} alt='top it companies in mohali'/>
                        <h6 className="mt-3">Info Gathering</h6>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image src={planning} alt='best it companies in chandigarh'/>
                        <h6 className="mt-3">Planning</h6>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image src={pen} alt='web designing company in chandigarh it park'/>
                        <h6 className="mt-3">Design</h6>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image src={development} alt='it services in chandigarh'/>
                        <h6 className="mt-3">Development</h6>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image src={test} alt='best it services in chandigarh and mohali'/>
                        <h6 className="mt-3">Test</h6>
                      </div>
                    </Col>
                    <Col xs={6} lg={2}>
                      <div className="work-images">
                        <Image src={launch} alt='top it company in mohali'/>
                        <h6 className="mt-3">Launch</h6>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

            </Row>
          </Container>
        </section>

      </main>
    </>
  )
}

export default page
