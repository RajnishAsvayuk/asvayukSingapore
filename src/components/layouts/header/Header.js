"use client";

import AppImages from "@/config/constant/app.images";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Container,
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  // Function to close mega menu on link click
  const handleMegaMenuLinkClick = () => {
    setIsMegaMenuOpen(false);
  };
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="header">
        <Container>
          <NavbarBrand as={Link} href="/">
            <Image
              src={AppImages.brand.logo}
              alt="Logo"
              className="logo"
              width={200}
              height={50}
            />
          </NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav" className="menu-list">
            <Nav className="align-items-center">
              <NavLink as={Link} href="/about-us">
                About Us
              </NavLink>

              {/* Dropdown Menu with hover functionality */}
              <NavLink
                as={Link}
                href="#"
                className="dropdownMenu"
                onMouseEnter={() => setIsMegaMenuOpen(true)} // Open on hover
                onMouseLeave={() => setIsMegaMenuOpen(false)} // Close on mouse leave
              >
                Our Services <FaAngleDown />
                {isMegaMenuOpen && (
                  <div className="megaMenu d-flex justify-content-between">
                    <TabContainer
                      id="left-tabs-example"
                      defaultActiveKey="technology"
                    >
                      <div className="side-tab-list">
                        <Row>
                          <Nav variant="pills" className="flex-column">
                            <NavItem>
                              <NavLink eventKey="technology">
                                <div className="tabIcons d-flex w-100 justify-content-between align-items-center">
                                  <span>Technology</span>
                                  <FaAngleRight />
                                </div>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink eventKey="marketing">
                                <div className="tabIcons d-flex w-100 justify-content-between align-items-center">
                                  <span>Marketing</span>
                                  <FaAngleRight />
                                </div>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink eventKey="design">
                                <div className="tabIcons d-flex w-100 justify-content-between align-items-center">
                                  <span>Design</span>
                                  <FaAngleRight />
                                </div>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink eventKey="products">
                                <div className="tabIcons d-flex w-100 justify-content-between align-items-center">
                                  <span>Products</span>
                                  <FaAngleRight />
                                </div>
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink eventKey="developers">
                                <div className="tabIcons d-flex w-100 justify-content-between align-items-center">
                                  <span>Developers</span>
                                  <FaAngleRight />
                                </div>
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </Row>
                      </div>
                      <div className="submenu-list px-5 py-5 mx-3">
                        <TabContent>
                          <TabPane eventKey="technology">
                            <Row>
                              <h5 className="pb-3 fw-semibold">Technology</h5>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                  <Link
                                    href="/web-portal-development-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Enterprise Portal Development
                                  </Link>
                                  <Link
                                    href="/lowcode-nocode-app"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    lowCode/noCode-app
                                  </Link>
                                  <Link
                                    href="/blockchain-web-development-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Blockchain Development
                                  </Link>
                                  <Link
                                    href="/saas-app-development-company-in-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Saas Development
                                  </Link>
                                  <Link
                                    href="/laravel-development-company-in-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Laravel Development
                                  </Link>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                  <Link
                                    href="/mobile-app-development-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Mobile App Development
                                  </Link>
                                  <Link
                                    href="/woocommerce-development-services-in-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    WooCommerce Development
                                  </Link>
                                  <Link
                                    href="/best-magento-developers-in-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Magento Development
                                  </Link>
                                  <Link
                                    href="/shopify-development"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Shopify Development
                                  </Link>
                                  <Link
                                    href="/ar-vr-development"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    AR/VR Development
                                  </Link>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                  <Link
                                    href="/website-designing-company-in-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Website Designing
                                  </Link>
                                  <Link
                                    href="/ecommerce-website-designing-company-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    E-commerce Development
                                  </Link>
                                  <Link
                                    href="/react-native-developers-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    React Native Development
                                  </Link>
                                  <Link
                                    href="/software-development-company-in-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Software Development
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane eventKey="marketing">
                            <Row>
                              <h5 className="pb-3 fw-semibold">Marketing</h5>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                  <Link
                                    href="/digital-marketing-services-in-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Performance Marketing
                                  </Link>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                  <Link
                                    href="/social-media-marketing-agency-in-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Social Media Marketing
                                  </Link>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                  <Link
                                    href="/best-seo-services-in-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Search Engine Optimization
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane eventKey="design">
                            <Row>
                              <h5 className="pb-3 fw-semibold">Design</h5>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                  <Link
                                    href="/best-ui-ux-designers-in-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
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
                          <TabPane eventKey="products">
                            <Row>
                              <h5 className="pb-3 fw-semibold">Products</h5>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                  <Link
                                    href="/ai-chatbot-chandigarh-panchkula"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    AI Chat Bot
                                  </Link>
                                  <Link
                                    href="/crypto-wallet-solutions-chandigarh-panchkula"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Crypto Wallet
                                  </Link>
                                  <Link
                                    href="/24-games-panchkula-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Game (24 Game)
                                  </Link>
                                  <Link
                                    href="/crypto-exchange-chandigarh-panchkula"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Crypto Exchange
                                  </Link>
                                  <Link
                                    href="/layer1-layer2-blockchain-panchkula-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Layer 1/Layer 2 BlockChain
                                  </Link>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                  <Link
                                    href="/crm-erp"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    CRM/ERP
                                  </Link>
                                  <Link
                                    href="/trading-bot-chandigarh-panchkula"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Trading Bot
                                  </Link>
                                  <Link
                                    href="/mlm-software-chandigarh-panchkula"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    MLM Software
                                  </Link>
                                  <Link
                                    href="/school-management-panchkula-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    School Management
                                  </Link>
                                  <Link
                                    href="/hospital-management-panchkula-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Hospital Management
                                  </Link>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                  <Link
                                    href="/dap-dao-chandigarh-panchkula"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    DAP/DAO
                                  </Link>
                                  <Link
                                    href="/job-portal-solutions"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Job Portal
                                  </Link>
                                  <Link
                                    href="/uber-ola-clone-panchkula-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Uber/Ola Clone
                                  </Link>
                                  <Link
                                    href="/zomato-urbanup-clone-panchkula-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Zomato/Urbanup Clone
                                  </Link>
                                  <Link
                                    href="/multi-vendor-ecommerce-panchkula-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Multivendor Ecommerce
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                          </TabPane>
                          <TabPane eventKey="developers">
                            <Row>
                              <h5 className="pb-3 fw-semibold">Developers</h5>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                  <Link
                                    href="/best-crypto-exchange-developer-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Best Crypto Developers
                                  </Link>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                  <Link
                                    href="/best-blockchain-developer-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Best Blockchain Developers
                                  </Link>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
                                  <Link
                                    href="/best-mlm-software-developer-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Best MLM Developers
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4 mt-4">
                                  <Link
                                    href="/best-shopify-developer-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Best Shopify Developers
                                  </Link>
                                </div>
                              </Col>
                              <Col lg={4}>
                                <div className="tab-menus tab_menu_top d-flex flex-column gap-4 mt-3">
                                  <Link
                                    href="/best-smart-contract-developer-chandigarh"
                                    onClick={handleMegaMenuLinkClick}
                                  >
                                    Smart Contract Developers
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                          </TabPane>
                        </TabContent>
                      </div>
                    </TabContainer>
                  </div>
                )}
              </NavLink>

              <NavLink as={Link} href="/blog">
                Blog
              </NavLink>
              <NavLink as={Link} href="/case-studies">
                Case Studies
              </NavLink>
              <NavLink as={Link} href="/contact-us">
                Contact Us
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>

      {/* Mobile Header */}
      <section className="mobile-navbar border-bottom py-2">
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <NavbarBrand as={Link} href="/">
              <Image
                src={AppImages.brand.logo}
                alt="Logo"
                className="logo"
                width={200}
                height={50}
              />
            </NavbarBrand>
            <div className="d-flex gap-2 align-items-center">
              <a
                href="tel:+91 09876475990"
                aria-label="Call Now for Consultation"
              >
                <div className="content">
                  <div className="pulse">
                    <IoCall />
                  </div>
                </div>
              </a>
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
                    <Link href="about-us" onClick={toggleMenu}>
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
                        <AccordionHeader className="">
                          Technology
                        </AccordionHeader>
                        <AccordionBody>
                          <div>
                            <ul className="list-unstyled d-flex flex-column">
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/web-portal-development-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Enterprise Portal Development
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/lowcode-nocode-app"
                                  onClick={toggleMenu}
                                >
                                  lowCode/noCode-app
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/blockchain-web-development-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Blockchain Development
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/saas-app-development-company-in-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Saas Development
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/laravel-development-company-in-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Laravel Development
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/mobile-app-development-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Mobile App Development
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/woocommerce-development-services-in-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  WooCommerce Development
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/best-magento-developers-in-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Magento Development
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/shopify-development"
                                  onClick={toggleMenu}
                                >
                                  Shopify Development
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/ar-vr-development"
                                  onClick={toggleMenu}
                                >
                                  AR/VR Development
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/website-development-company-in-chandigarh-and-mohali"
                                  onClick={toggleMenu}
                                >
                                  Website Development
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/ecommerce-website-designing-company-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  E-commerce Development
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/react-native-developers-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  React Native Development
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/software-development-company-in-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Software Development
                                </Link>
                              </li>
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
                                <Link
                                  href="/digital-marketing-services-in-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Performance Marketing
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/social-media-marketing-agency-in-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Social Media Marketing
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/best-seo-services-in-chandigarh"
                                  onClick={toggleMenu}
                                >
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
                                <Link
                                  href="/best-ui-ux-designers-in-chandigarh"
                                  onClick={toggleMenu}
                                >
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
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/ai-chatbot-chandigarh-panchkula"
                                  onClick={toggleMenu}
                                >
                                  AI Chat Bot
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/crypto-wallet-solutions-chandigarh-panchkula"
                                  onClick={toggleMenu}
                                >
                                  Crypto Wallet
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/24-games-panchkula-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Game (24 Game)
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/crypto-exchange-chandigarh-panchkula"
                                  onClick={toggleMenu}
                                >
                                  Crypto Exchange
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/layer1-layer2-blockchain-panchkula-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Layer 1/Layer 2 BlockChain
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link href="/crm-erp" onClick={toggleMenu}>
                                  CRM/ERP
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/trading-bot-chandigarh-panchkula"
                                  onClick={toggleMenu}
                                >
                                  Trading Bot
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/mlm-software-chandigarh-panchkula"
                                  onClick={toggleMenu}
                                >
                                  MLM Software
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/school-management-panchkula-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  School Management
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/hospital-management-panchkula-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Hospital Management
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/dap-dao-chandigarh-panchkula"
                                  onClick={toggleMenu}
                                >
                                  DAP/DAO
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/job-portal-solutions"
                                  onClick={toggleMenu}
                                >
                                  Job Portal
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/uber-ola-clone-panchkula-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Uber/Ola Clone
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/zomato-urbanup-clone-panchkula-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Zomato/Urbanup Clone
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/multi-vendor-ecommerce-panchkula-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Multivendor Ecommerce
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </AccordionBody>
                      </AccordionItem>
                      <AccordionItem eventKey="4" className="mt-2">
                        <AccordionHeader>Developers</AccordionHeader>
                        <AccordionBody>
                          <div>
                            <ul className="list-unstyled d-flex flex-column">
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/best-crypto-exchange-developer-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Best Crypto Developers
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/best-blockchain-developer-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Best Blockchain Developers
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/best-mlm-software-developer-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Best MLM Developers
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/best-shopify-developer-chandigarh"
                                  onClick={toggleMenu}
                                >
                                  Best Shopify Developers
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link
                                  href="/best-smart-contract-developer-chandigarhh"
                                  onClick={toggleMenu}
                                >
                                  Smart Contract Developers
                                </Link>
                              </li>
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
