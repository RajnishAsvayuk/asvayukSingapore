"use client";

import AppImages from "../../../config/constant/app.images";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useCallback, useMemo } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCall, IoClose } from "react-icons/io5";

// Menu data constants - keeping all original hrefs and structure
const SERVICE_TABS = [
  {
    key: "technology",
    title: "Technology",
    items: [
      { href: "/web-portal-development", label: "Enterprise Portal Development" },
      // { href: "/lowcode-nocode-app", label: "lowCode/noCode-app" },
      { href: "/blockchain-web-development", label: "Blockchain Development" },
      // { href: "/saas-app-development-company-in", label: "Saas Development" },
      // { href: "/laravel-development-company-in", label: "Laravel Development" },
    ]
  },
  {
    key: "marketing",
    title: "Marketing",
    items: [
      { href: "/digital-marketing", label: "Performance Marketing" },
      { href: "/socialMedia-marketing", label: "Social Media Marketing" },
      { href: "/search-engine-optimization", label: "Search Engine Optimization" },
    ]
  },
  {
    key: "design",
    title: "Design",
    items: [
      { href: "/ui-ux-design", label: "UI UX Design" },
    ]
  },
  // {
  //   key: "products",
  //   title: "Products",
  //   items: [
  //     { href: "/ai-chatbot", label: "AI Chat Bot" },
  //     { href: "/crypto-wallet", label: "Crypto Wallet" },
  //     { href: "/game-development", label: "Game (24 Game)" },
  //     { href: "/crypto-exchange", label: "Crypto Exchange" },
  //     { href: "/layer1-layer2-blockchain", label: "Layer 1/Layer 2 BlockChain" },
  //   ]
  // },
  {
    key: "developers",
    title: "Developers",
    items: [
      { href: "/crypto-exchange-developers", label: "Best Crypto Developers" },
      { href: "/blockchain-devlopers", label: "Best Blockchain Developers" },
      { href: "/mlm-developers", label: "Best MLM Developers" },
    ]
  }
];

const TECHNOLOGY_ITEMS_COL1 = [
  { href: "/enterprise-portal-development", label: "Enterprise Portal Development" },
  { href: "/lowcode-nocode-app", label: "lowCode/noCode-app" },
  { href: "/blockchain-development", label: "Blockchain Development" },
  { href: "/saas-development", label: "Saas Development" },
  { href: "/laravel-development", label: "Laravel Development" },
];

const TECHNOLOGY_ITEMS_COL2 = [
  { href: "/mobile-app-development", label: "Mobile App Development" },
  { href: "/woocomerce-development", label: "WooCommerce Development" },
  { href: "/magento-development", label: "Magento Development" },
  { href: "/shopify-development", label: "Shopify Development" },
  { href: "/ar-vr-development", label: "AR/VR Development" },
];

const TECHNOLOGY_ITEMS_COL3 = [
  { href: "/website-designing", label: "Website Designing" },
  { href: "/ecomerce-websites", label: "E-commerce Development" },
  { href: "/react-native", label: "React Native Development" },
  { href: "/software-development", label: "Software Development" },
  //  { href: "/ar-vr-development", label: "AR/VR Development" },
];

const PRODUCTS_ITEMS_COL1 = [
  { href: "/ai-chatbot", label: "AI Chat Bot" },
  { href: "/crypto-wallet", label: "Crypto Wallet" },
  { href: "/game-development", label: "Game (24 Game)" },
  { href: "/crypto-exchange", label: "Crypto Exchange" },
  { href: "/layer1-layer2-blockchain", label: "Layer 1/Layer 2 BlockChain" },
];

const PRODUCTS_ITEMS_COL2 = [
  { href: "/crm-erp", label: "CRM/ERP" },
  { href: "/trading-bot-solution", label: "Trading Bot" },
  { href: "/mlm-software", label: "MLM Software" },
  { href: "/school-management", label: "School Management" },
  { href: "/hospital-management", label: "Hospital Management" },
];

const PRODUCTS_ITEMS_COL3 = [
  { href: "/dap-dao-solution", label: "DAP/DAO" },
  { href: "/job-portal-solution", label: "Job Portal" },
  { href: "/uber-ola-clone", label: "Uber/Ola Clone" },
  { href: "/zomato-urban", label: "Zomato/Urbanup Clone" },
  { href: "/multi-vendor-eccomerce", label: "Multivendor Ecommerce" },
];

const DEVELOPERS_ITEMS_COL1 = [
  { href: "/crypto-exchange-developers", label: "Best Crypto Developers" },
];

const DEVELOPERS_ITEMS_COL2 = [
  { href: "/blockchain-devlopers", label: "Best Blockchain Developers" },
];

const DEVELOPERS_ITEMS_COL3 = [
  { href: "/mlm-developers", label: "Best MLM Developers" },
];

const DEVELOPERS_ITEMS_ROW2_COL1 = [
  { href: "/shopify-developers", label: "Best Shopify Developers" },
];

const DEVELOPERS_ITEMS_ROW2_COL2 = [
  { href: "/smart-contract-developers", label: "Smart Contract Developers" },
];

const Header = () => {
  // State management - keeping all original state variables
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimized handlers with useCallback
  const handleMegaMenuLinkClick = useCallback(() => {
    setIsMegaMenuOpen(false);
  }, []);

  const toggleVisibility = useCallback(() => {
    setIsVisible(prev => !prev);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleMegaMenuMouseEnter = useCallback(() => {
    setIsMegaMenuOpen(true);
  }, []);

  const handleMegaMenuMouseLeave = useCallback(() => {
    setIsMegaMenuOpen(false);
  }, []);

  // Memoized components
  const Logo = useMemo(() => (
    <NavbarBrand as={Link} href="/">
      <Image
        src={AppImages.brand.logo}
        alt="Logo"
        className="logo"
        width={200}
        height={50}
      />
    </NavbarBrand>
  ), []);

  const CallButton = useMemo(() => (
    <Link href="tel:+91 09876475990" aria-label="Call Now for Consultation">
      <div className="content">
        <div className="pulse">
          <IoCall />
        </div>
      </div>
    </Link>
  ), []);

  // Render functions for tab content (keeping original column structure)
  const renderTechnologyTab = () => (
    <TabPane eventKey="technology">
      <Row>
        <h5 className="pb-3 fw-semibold">Technology</h5>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            {TECHNOLOGY_ITEMS_COL1.map((item, index) => (
              <Link key={index} href={item.href} onClick={handleMegaMenuLinkClick}>
                {item.label}
              </Link>
            ))}
          </div>
        </Col>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            {TECHNOLOGY_ITEMS_COL2.map((item, index) => (
              <Link key={index} href={item.href} onClick={handleMegaMenuLinkClick}>
                {item.label}
              </Link>
            ))}
          </div>
        </Col>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            {TECHNOLOGY_ITEMS_COL3.map((item, index) => (
              <Link key={index} href={item.href} onClick={handleMegaMenuLinkClick}>
                {item.label}
              </Link>
            ))}
          </div>
        </Col>
      </Row>
    </TabPane>
  );

  const renderMarketingTab = () => (
    <TabPane eventKey="marketing">
      <Row>
        <h5 className="pb-3 fw-semibold">Marketing</h5>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            <Link href="/digital-marketing" onClick={handleMegaMenuLinkClick}>
              Performance Marketing
            </Link>
          </div>
        </Col>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            <Link href="/socialMedia-marketing" onClick={handleMegaMenuLinkClick}>
              Social Media Marketing
            </Link>
          </div>
        </Col>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            <Link href="/search-engine-optimization" onClick={handleMegaMenuLinkClick}>
              Search Engine Optimization
            </Link>
          </div>
        </Col>
      </Row>
    </TabPane>
  );

  const renderDesignTab = () => (
    <TabPane eventKey="design">
      <Row>
        <h5 className="pb-3 fw-semibold">Design</h5>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            <Link href="/ui-ux-design" onClick={handleMegaMenuLinkClick}>
              UI UX Design
            </Link>
          </div>
        </Col>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            <Link href="#"></Link>
          </div>
        </Col>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            <Link href="#"></Link>
          </div>
        </Col>
      </Row>
    </TabPane>
  );

  const renderProductsTab = () => (
    <TabPane eventKey="products">
      <Row>
        <h5 className="pb-3 fw-semibold">Products</h5>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            {PRODUCTS_ITEMS_COL1.map((item, index) => (
              <Link key={index} href={item.href} onClick={handleMegaMenuLinkClick}>
                {item.label}
              </Link>
            ))}
          </div>
        </Col>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            {PRODUCTS_ITEMS_COL2.map((item, index) => (
              <Link key={index} href={item.href} onClick={handleMegaMenuLinkClick}>
                {item.label}
              </Link>
            ))}
          </div>
        </Col>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            {PRODUCTS_ITEMS_COL3.map((item, index) => (
              <Link key={index} href={item.href} onClick={handleMegaMenuLinkClick}>
                {item.label}
              </Link>
            ))}
          </div>
        </Col>
      </Row>
    </TabPane>
  );

  const renderDevelopersTab = () => (
    <TabPane eventKey="developers">
      <Row>
        <h5 className="pb-3 fw-semibold">Developers</h5>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            {DEVELOPERS_ITEMS_COL1.map((item, index) => (
              <Link key={index} href={item.href} onClick={handleMegaMenuLinkClick}>
                {item.label}
              </Link>
            ))}
          </div>
        </Col>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            {DEVELOPERS_ITEMS_COL2.map((item, index) => (
              <Link key={index} href={item.href} onClick={handleMegaMenuLinkClick}>
                {item.label}
              </Link>
            ))}
          </div>
        </Col>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            {DEVELOPERS_ITEMS_COL3.map((item, index) => (
              <Link key={index} href={item.href} onClick={handleMegaMenuLinkClick}>
                {item.label}
              </Link>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4 mt-4">
            {DEVELOPERS_ITEMS_ROW2_COL1.map((item, index) => (
              <Link key={index} href={item.href} onClick={handleMegaMenuLinkClick}>
                {item.label}
              </Link>
            ))}
          </div>
        </Col>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4 mt-3">
            {DEVELOPERS_ITEMS_ROW2_COL2.map((item, index) => (
              <Link key={index} href={item.href} onClick={handleMegaMenuLinkClick}>
                {item.label}
              </Link>
            ))}
          </div>
        </Col>
      </Row>
    </TabPane>
  );

  return (
    <>
      {/* Desktop Navbar - keeping exact same structure and classes */}
      <Navbar expand="lg" className="header">
        <Container>
          {Logo}
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav" className="menu-list justify-content-end w-100">
            <Nav className="align-items-center ">

              <NavLink as={Link} href="/about-us">
                Home
              </NavLink>
              {/* Dropdown Menu with hover functionality - same structure */}
              {/* <Nav.Item
                className="dropdownMenu"
                onMouseEnter={handleMegaMenuMouseEnter}
                onMouseLeave={handleMegaMenuMouseLeave}
              >

                <div className="nav-link d-flex align-items-center gap-1">
                  Our Services <FaAngleDown />
                </div>

                {isMegaMenuOpen && (
                  <div className="megaMenu d-flex justify-content-between">
                    <TabContainer id="left-tabs-example" defaultActiveKey="technology">
                      <div className="side-tab-list">
                        <Row>
                          <Nav variant="pills" className="flex-column">
                            {SERVICE_TABS.map((tab) => (
                              <NavItem key={tab.key}>
                                <Nav.Link
                                  eventKey={tab.key}
                                  className="tabIcons d-flex w-100 justify-content-between align-items-center"
                                >
                                  <span>{tab.title}</span>
                                  <FaAngleRight />
                                </Nav.Link>
                              </NavItem>
                            ))}
                          </Nav>
                        </Row>
                      </div>
                      <div className="submenu-list px-5 py-5 mx-3">
                        <TabContent>
                          {renderTechnologyTab()}
                          {renderMarketingTab()}
                          {renderDesignTab()}
                          {renderProductsTab()}
                          {renderDevelopersTab()}
                        </TabContent>
                      </div>
                    </TabContainer>
                  </div>
                )}
              </Nav.Item> */}

              <NavLink as={Link} href="/ai-solutions">
                AI Solutions
              </NavLink>
              {/* <NavLink as={Link} href="/about-us">
                Partnerships <FaAngleDown />
              </NavLink> */}
              <Dropdown>
                <Dropdown.Toggle className=" bg-transparent p-0 text-dark border-0 nav-link d-flex align-items-center gap-1" id="dropdown-basic">
                  Our Services <FaAngleDown />
                </Dropdown.Toggle>

                <Dropdown.Menu className="menudropdowns services row">
                  <div class="row align-items-center">


                    <div class="col-lg-10">
                      <div class="row gx-5">


                        <div class="col-md-6">
                          <h5 class="service-title">Software Development</h5>

                        <div className="service-item-parent">
                            <div class="service-item">
                          <li> <Image src="/Images/laptop.svg" width={100} height={100}/> Website Development</li>
                          </div>
                          <div class="service-item">
                              <li> <Image src="/Images/mobile.svg" width={100} height={100}/>Mobile App Development</li>
                          </div>
                          <div class="service-item">
                           
                             <li> <Image src="/Images/enterprise.svg" width={100} height={100}/>Enterprise Portal Development</li>
                          </div>
                          <div class="service-item">
                           
                              <li> <Image src="/Images/blockchain.svg" width={100} height={100}/>Blockchain Development</li>
                          </div>
                          <div class="service-item">
                           
                              <li> <Image src="/Images/low.svg" width={100} height={100}/>Low Code / No Code Development</li>
                          </div>
                          <div class="service-item">
                            
                              <li> <Image src="/Images/ar.svg" width={100} height={100}/> AR / VR Development</li>
                          </div>
                          <div class="service-item">
                            
                              <li> <Image src="/Images/saas.svg" width={100} height={100}/>SAAS Development</li>
                          </div>
                          <div class="service-item">
                            
                              <li> <Image src="/Images/ui.svg" width={100} height={100}/>UI/UX Design</li>
                          </div>
                          <div class="service-item">
                         
                              <li> <Image src="/Images/ux.svg" width={100} height={100}/>UI UX Analysis & Audit</li>
                          </div>
                        </div>
                        </div>

                        <div class="col-md-6">
                          <h5 class="service-title">E-commerce Solutions</h5>

                         <div className="service-item-parent">
                           <div class="service-item">
                           
                             <li> <Image src="/Images/mgento.svg" width={100} height={100}/>Magento Development</li>
                          </div>
                          <div class="service-item">
                          
                             <li> <Image src="/Images/shopy.svg" width={100} height={100}/>Shopify Development</li>
                          </div>
                          <div class="service-item">
                          
                             <li> <Image src="/Images/lara.svg" width={100} height={100}/>Laravel Development</li>
                          </div>
                          <div class="service-item">
                 
                             <li> <Image src="/Images/woo.svg" width={100} height={100}/>WooCommerce Development</li>
                          </div>
                          <div class="service-item">
                          
                             <li> <Image src="/Images/react.svg" width={100} height={100}/>React Native Development</li>
                          </div>
                          <div class="service-item">
                          
                             <li> <Image src="/Images/search.svg" width={100} height={100}/>Search Engine Optimisation</li>
                          </div>
                         </div>
                        </div>

                      </div>
                    </div>

                    <div class="col-lg-2 text-center right-logo mt-4 mt-lg-0">
                      <Image
                        src={AppImages.brand.logo}
                        alt="Logo"
                        className="logo vertical-logo"
                        width={200}
                        height={50}
                      />
                    </div>

                  </div>

                 
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle className=" bg-transparent p-0 text-dark border-0 nav-link d-flex align-items-center gap-1" id="dropdown-basic">
                  Partnerships <FaAngleDown />
                </Dropdown.Toggle>

                <Dropdown.Menu className="menudropdowns">
                  <Dropdown.Item href="/blogs">
                   <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="none"><path d="M37.7792 14.6199C37.7524 14.4489 37.5822 14.3544 37.4415 14.344C37.3011 14.3337 34.3292 14.14 34.3292 14.14C34.3292 14.14 32.2653 12.3382 32.0388 12.1388C31.8121 11.9394 31.3695 12 31.1977 12.0445C31.1722 12.0511 30.7467 12.1666 30.0426 12.3581C29.353 10.6136 28.1364 9.01031 25.9957 9.01031C25.9366 9.01031 25.8758 9.0125 25.8149 9.0155C25.2061 8.30755 24.4519 8 23.8006 8C18.8141 8 16.4317 13.4815 15.6847 16.2672C13.7472 16.7951 12.3706 17.1704 12.1948 17.219C11.1132 17.5173 11.079 17.5473 10.9371 18.4435C10.8299 19.1219 8 38.3668 8 38.3668L30.0516 42L42 39.727C42 39.727 37.8056 14.7909 37.7792 14.6199ZM28.8237 12.6897C28.2699 12.8404 27.6403 13.0117 26.9579 13.1974C26.9585 13.0819 26.9592 12.968 26.9592 12.8437C26.9592 11.7594 26.788 10.8865 26.5134 10.1943C27.6164 10.3162 28.351 11.4196 28.8237 12.6897ZM25.1452 10.4093C25.4518 11.085 25.6512 12.0546 25.6512 13.3632C25.6512 13.4301 25.6506 13.4913 25.6499 13.5533C24.4364 13.8838 23.1179 14.2427 21.7962 14.6027C22.5383 12.0844 23.9292 10.8682 25.1452 10.4093ZM23.6636 9.17611C23.8789 9.17611 24.0957 9.24029 24.3032 9.36593C22.7051 10.0272 20.9921 11.6927 20.2687 15.0187C19.2114 15.3065 18.178 15.5879 17.2226 15.8482C18.0699 13.3113 20.082 9.17611 23.6636 9.17611Z" fill="#95BF46"></path><path d="M37.4415 14.344C37.3011 14.3337 34.3292 14.14 34.3292 14.14C34.3292 14.14 32.2652 12.3382 32.0388 12.1388C31.954 12.0645 31.8397 12.0265 31.7201 12.0101L30.0527 41.9997L41.9999 39.727C41.9999 39.727 37.8055 14.7909 37.7791 14.6199C37.7524 14.4489 37.5822 14.3544 37.4415 14.344Z" fill="#5E8E3E"></path><path d="M25.9957 20.1495L24.5225 24.0031C24.5225 24.0031 23.2316 23.3973 21.6494 23.3973C19.3298 23.3973 19.213 24.6775 19.213 25C19.213 26.7601 24.4305 27.4344 24.4305 31.5571C24.4305 34.8005 22.0911 36.8892 18.9365 36.8892C15.1512 36.8892 13.2155 34.8175 13.2155 34.8175L14.229 31.8728C14.229 31.8728 16.2187 33.3751 17.8979 33.3751C18.9949 33.3751 19.4413 32.6155 19.4413 32.0605C19.4413 29.7645 15.1608 29.6621 15.1608 25.8896C15.1608 22.7145 17.7525 19.6417 22.9841 19.6417C24.9999 19.6417 25.9957 20.1495 25.9957 20.1495Z" fill="white"></path><rect width="50" height="50" rx="10" fill="#95BF46" fill-opacity="0.2"></rect>
                   </svg>
                   Shopify
                   </Dropdown.Item>
                  <Dropdown.Item href="/case-studies"> <Image src="/Images/googlelogo.jpg" width={100} height={100} className="me-3"/> Google</Dropdown.Item>
                  <Dropdown.Item href="/blogs"> Razor Pay</Dropdown.Item>
                  <Dropdown.Item href="#">Grab Pay</Dropdown.Item>
                  <Dropdown.Item href="#"> 
                  <svg className="me-3" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50" fill="none">
                  <path d="M15.155 8.00514C15.3931 8.00429 15.6312 8.00317 15.8693 8.00182C16.5126 7.99898 17.1558 8.00006 17.7991 8.00205C18.4744 8.00364 19.1498 8.00217 19.8252 8.00119C20.9592 8.00005 22.0932 8.00154 23.2272 8.00453C24.5353 8.00793 25.8433 8.00683 27.1514 8.00338C28.2774 8.00054 29.4035 8.00015 30.5296 8.00178C31.2008 8.00275 31.872 8.0029 32.5433 8.00082C33.1747 7.999 33.8061 8.00029 34.4375 8.00388C34.6682 8.0047 34.8989 8.00448 35.1296 8.00309C37.1762 7.99191 38.6521 8.38772 40.158 9.80636C41.6474 11.4158 41.973 12.8751 41.9649 15.0196C41.9663 15.2602 41.9679 15.5008 41.9698 15.7414C41.9739 16.3916 41.9741 17.0416 41.9733 17.6918C41.973 18.2362 41.9745 18.7807 41.976 19.3251C41.9795 20.6106 41.9796 21.896 41.9777 23.1814C41.9759 24.5036 41.9797 25.8257 41.9864 27.1478C41.9919 28.2865 41.9938 29.4251 41.9927 30.5638C41.9922 31.2423 41.993 31.9208 41.9973 32.5993C42.0013 33.2379 42.0007 33.8765 41.9966 34.5151C41.9959 34.7481 41.9967 34.9811 41.9993 35.2141C42.0203 37.2451 41.4673 38.8009 40.0566 40.2954C38.8919 41.3069 37.731 41.8811 36.1985 41.8922C35.9954 41.894 35.7924 41.8958 35.5832 41.8976C35.3584 41.8988 35.1336 41.9 34.9088 41.9012C34.6719 41.9029 34.4349 41.9047 34.1979 41.9066C33.4195 41.9123 32.641 41.9162 31.8626 41.9198C31.7299 41.9204 31.5972 41.921 31.4605 41.9217C30.2074 41.9274 28.9543 41.9323 27.7012 41.9356C26.1023 41.9399 24.5036 41.9478 22.9048 41.9607C21.7786 41.9694 20.6524 41.9739 19.5262 41.9754C18.8547 41.9764 18.1834 41.9792 17.5119 41.9866C16.8788 41.9934 16.2458 41.995 15.6127 41.9927C15.382 41.9928 15.1513 41.9946 14.9207 41.9986C12.7855 42.0335 11.2509 41.4035 9.6506 39.9894C9.37559 39.6601 9.37559 39.6601 9.1617 39.3345C9.0903 39.2291 9.01891 39.1236 8.94536 39.015C8.1547 37.5481 7.99499 36.3149 8.00514 34.6544C8.00429 34.4195 8.00317 34.1845 8.00182 33.9495C7.99898 33.3156 8.00006 32.6817 8.00205 32.0477C8.00365 31.3818 8.00217 30.7159 8.00119 30.0499C8.00005 28.932 8.00154 27.8141 8.00453 26.6962C8.00793 25.4068 8.00683 24.1175 8.00338 22.8281C8.00054 21.7178 8.00015 20.6074 8.00178 19.497C8.00275 18.8353 8.0029 18.1736 8.00082 17.5119C7.999 16.8896 8.00029 16.2673 8.00388 15.645C8.00471 15.4176 8.00448 15.1903 8.00309 14.963C7.99324 13.1868 8.26551 11.8721 9.3377 10.4319C9.42482 10.3029 9.51195 10.1739 9.60171 10.0409C10.1191 9.48182 10.7095 9.085 11.3715 8.71163C11.4593 8.65972 11.547 8.6078 11.6374 8.55431C12.7741 7.95991 13.8991 7.99759 15.155 8.00514Z" fill="#F90F00"></path><path d="M24.5956 15.3816C24.8331 15.379 25.0706 15.3747 25.3081 15.3688C25.6504 15.3602 25.9924 15.3568 26.3349 15.3545C26.5403 15.3514 26.7458 15.3483 26.9575 15.3451C27.4856 15.4363 27.4856 15.4363 27.8573 15.8005C28.1506 16.2827 28.3274 16.7473 28.5025 17.2837C28.7507 18.0142 29.0166 18.6893 29.3789 19.3687C29.5898 19.804 29.7218 20.2601 29.8672 20.7206C29.9853 21.0565 30.1266 21.3573 30.2919 21.6723C30.6142 22.2898 30.8425 22.9255 31.0742 23.5814C31.3617 24.3708 31.6954 25.1408 32.0226 25.9144C32.1531 26.2304 32.2834 26.5464 32.4137 26.8625C32.6655 27.4683 32.9293 28.066 33.2058 28.661C33.5334 29.3712 33.8015 30.0911 34.0595 30.829C34.2045 31.2095 34.3731 31.5571 34.5649 31.9158C34.8122 32.385 34.9062 32.7247 34.8387 33.2646C34.1785 33.5946 33.3245 33.4693 32.5982 33.4758C32.3845 33.4784 32.1708 33.4826 31.9572 33.4886C31.6487 33.4972 31.34 33.5001 31.0314 33.5029C30.7542 33.5075 30.7542 33.5075 30.4714 33.5123C29.9888 33.421 29.9888 33.421 29.6553 33.1275C29.2467 32.4448 28.9495 31.7338 28.6504 30.9976C28.5509 30.7571 28.5509 30.7571 28.4494 30.5118C28.2378 29.9996 28.0279 29.4867 27.8181 28.9737C27.6095 28.4671 27.4005 27.9606 27.1915 27.4542C27.0569 27.1275 26.9225 26.8008 26.7884 26.4739C26.3555 25.4199 25.9095 24.3731 25.445 23.3327C25.2953 22.943 25.2953 22.943 25.2953 22.4738C24.8234 22.5751 24.8234 22.5751 24.6756 22.8764C24.6112 23.0355 24.6112 23.0355 24.5454 23.1979C24.4711 23.3781 24.4711 23.3781 24.3952 23.5618C24.3174 23.7578 24.3174 23.7578 24.2381 23.9577C24.1836 24.0914 24.129 24.225 24.0729 24.3628C23.9577 24.646 23.8433 24.9296 23.7297 25.2135C23.556 25.6477 23.38 26.0809 23.2035 26.514C23.0919 26.7891 22.9805 27.0643 22.8692 27.3396C22.8167 27.4693 22.7642 27.599 22.7102 27.7326C22.6616 27.8542 22.613 27.9757 22.5629 28.101C22.5202 28.2074 22.4775 28.3139 22.4335 28.4237C22.3222 28.731 22.24 29.0366 22.1664 29.3549C22.2618 29.3484 22.3572 29.3418 22.4556 29.3351C22.8903 29.309 23.3249 29.2928 23.7602 29.2767C23.9103 29.2663 24.0605 29.2558 24.2152 29.245C25.3035 29.2149 25.3035 29.2149 25.7166 29.605C25.9246 29.9303 26.0835 30.2507 26.234 30.606C26.3157 30.7728 26.3974 30.9395 26.4815 31.1112C26.5768 31.3402 26.5768 31.3402 26.674 31.5737C26.7724 31.8044 26.7724 31.8044 26.8727 32.0398C27.0158 32.4811 27.058 32.8046 27.0163 33.2646C26.7188 33.5621 26.1905 33.441 25.7962 33.4413C25.6294 33.4417 25.6294 33.4417 25.4593 33.4421C25.0901 33.4428 24.7209 33.4423 24.3518 33.4418C24.0963 33.4419 23.8409 33.4421 23.5854 33.4423C23.0493 33.4425 22.5132 33.4422 21.9772 33.4414C21.2885 33.4405 20.5998 33.441 19.9111 33.442C19.3834 33.4425 18.8557 33.4424 18.328 33.442C18.0739 33.4419 17.8199 33.442 17.5659 33.4424C17.2115 33.4427 16.8572 33.4421 16.5028 33.4413C16.1997 33.4411 16.1997 33.4411 15.8904 33.4409C15.4391 33.421 15.4391 33.421 15.2826 33.2646C15.2034 32.4699 15.4254 31.9227 15.7813 31.2316C16.259 30.2622 16.6339 29.2957 16.9852 28.273C17.1681 27.7689 17.3871 27.3076 17.6367 26.8344C17.9404 26.2346 18.1695 25.6025 18.4116 24.9761C18.5907 24.5133 18.77 24.0507 18.9494 23.5881C18.9968 23.4658 19.0442 23.3434 19.0931 23.2174C19.4215 22.3729 19.7626 21.5347 20.1148 20.6998C20.2815 20.3023 20.4427 19.903 20.6019 19.5024C22.238 15.4004 22.238 15.4004 24.5956 15.3816Z" fill="#FEFCFC">
                  </path>
                  <rect width="50" height="50" rx="10" fill="#F90F00" fill-opacity="0.2"></rect></svg> 
                   Adobe 
                   </Dropdown.Item>
                  <Dropdown.Item href="#"> 
                    
                    Salesforce</Dropdown.Item>
                  <Dropdown.Item href="#">XT.com</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle className=" bg-transparent p-0 text-dark border-0 nav-link d-flex align-items-center gap-1" id="dropdown-basic">
                  Resources <FaAngleDown />
                </Dropdown.Toggle>

                <Dropdown.Menu className="menudropdowns">
                  <Dropdown.Item href="/blogs">Blogs</Dropdown.Item>
                  <Dropdown.Item href="/case-studies">Case Studies</Dropdown.Item>
                  <Dropdown.Item href="/blogs">News Room</Dropdown.Item>
                  <Dropdown.Item href="#">Careers</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <NavLink as={Link} href="/about-us">
                About Us
              </NavLink>






              {/* <NavLink as={Link} href="/blog">
                Blog
              </NavLink>
              <NavLink as={Link} href="/case-studies">
                Case Studies
              </NavLink> */}
              <NavLink as={Link} href="/contact-us">
                Contact Us
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>

      {/* Mobile Header - keeping exact same structure and classes */}
      <section className="mobile-navbar border-bottom py-2">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            {Logo}
            <div className="d-flex gap-2 align-items-center">
              {CallButton}
              <div className="toggle-icon" onClick={toggleMenu}>
                <HiOutlineBars3 />
              </div>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="mobile-menu-list py-3 px-4">
              <div className="text-end">
                <div className="close-menuList" onClick={toggleMenu}>
                  <IoClose />
                </div>
              </div>
              <div className="list-menus py-3">
                <ul className="list-unstyled d-flex flex-column gap-4">
                  <li>
                    <Link href="/" onClick={toggleMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" onClick={toggleMenu}>
                    About Us
                    </Link>
                  </li>
                  <li className="d-flex justify-content-between align-items-center">
                    <div>
                      <span>Our Services</span>
                    </div>
                    <div className="angle-downIcon" onClick={toggleVisibility}>
                      <FaAngleDown />
                    </div>
                  </li>
                  {isVisible && (
                    <Accordion className="sideMobile-tab">
                      <AccordionItem eventKey="0">
                        <AccordionHeader>Technology</AccordionHeader>
                        <AccordionBody>
                          <div>
                            <ul className="list-unstyled d-flex flex-column">
                              {TECHNOLOGY_ITEMS_COL1.map((item, index) => (
                                <li key={index} className="py-2 border-bottom">
                                  <Link href={item.href} onClick={toggleMenu}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                              {TECHNOLOGY_ITEMS_COL2.map((item, index) => (
                                <li key={index} className="py-2 border-bottom">
                                  <Link href={item.href} onClick={toggleMenu}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                              {TECHNOLOGY_ITEMS_COL3.map((item, index) => (
                                <li key={index} className="py-2 border-bottom">
                                  <Link href={item.href} onClick={toggleMenu}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey="1" className="mt-2">
                        <AccordionHeader>Marketing</AccordionHeader>
                        <AccordionBody>
                          <div>
                            <ul className="list-unstyled d-flex flex-column">
                              <li className="py-2 border-bottom">
                                <Link href="/digital-marketing-services-in" onClick={toggleMenu}>
                                  Performance Marketing
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link href="/socialMedia-marketing" onClick={toggleMenu}>
                                  Social Media Marketing
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link href="/search-engine-optimization" onClick={toggleMenu}>
                                  Search Engine Optimization
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey="2" className="mt-2">
                        <AccordionHeader>Design</AccordionHeader>
                        <AccordionBody>
                          <div>
                            <ul className="list-unstyled d-flex flex-column">
                              <li className="py-2 border-bottom">
                                <Link href="/ui-ux-design" onClick={toggleMenu}>
                                  UI UX Design 
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey="3" className="mt-2">
                        <AccordionHeader>Products</AccordionHeader>
                        <AccordionBody>
                          <div>
                            <ul className="list-unstyled d-flex flex-column">
                              {PRODUCTS_ITEMS_COL1.map((item, index) => (
                                <li key={index} className="py-2 border-bottom">
                                  <Link href={item.href} onClick={toggleMenu}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                              {PRODUCTS_ITEMS_COL2.map((item, index) => (
                                <li key={index} className="py-2 border-bottom">
                                  <Link href={item.href} onClick={toggleMenu}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                              {PRODUCTS_ITEMS_COL3.map((item, index) => (
                                <li key={index} className="py-2 border-bottom">
                                  <Link href={item.href} onClick={toggleMenu}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey="4" className="mt-2">
                        <AccordionHeader>Developers</AccordionHeader>
                        <AccordionBody>
                          <div>
                            <ul className="list-unstyled d-flex flex-column">
                              {DEVELOPERS_ITEMS_COL1.map((item, index) => (
                                <li key={index} className="py-2 border-bottom">
                                  <Link href={item.href} onClick={toggleMenu}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                              {DEVELOPERS_ITEMS_COL2.map((item, index) => (
                                <li key={index} className="py-2 border-bottom">
                                  <Link href={item.href} onClick={toggleMenu}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                              {DEVELOPERS_ITEMS_COL3.map((item, index) => (
                                <li key={index} className="py-2 border-bottom">
                                  <Link href={item.href} onClick={toggleMenu}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                              {DEVELOPERS_ITEMS_ROW2_COL1.map((item, index) => (
                                <li key={index} className="py-2 border-bottom">
                                  <Link href={item.href} onClick={toggleMenu}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                              {DEVELOPERS_ITEMS_ROW2_COL2.map((item, index) => (
                                <li key={index} className="py-2 border-bottom">
                                  <Link href={item.href} onClick={toggleMenu}>
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </AccordionBody>
                      </AccordionItem>
                    </Accordion>
                  )}
                  <li>
                    <Link href="/blog" onClick={toggleMenu}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" onClick={toggleMenu}>
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" onClick={toggleMenu}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default Header;