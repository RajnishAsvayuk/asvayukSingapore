"use client";

import AppImages from "@/config/constant/app.images";
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
      { href: "/web-portal-development-chandigarh", label: "Enterprise Portal Development" },
      { href: "/lowcode-nocode-app", label: "lowCode/noCode-app" },
      { href: "/blockchain-web-development-chandigarh", label: "Blockchain Development" },
      { href: "/saas-app-development-company-in-chandigarh", label: "Saas Development" },
      { href: "/laravel-development-company-in-chandigarh", label: "Laravel Development" },
    ]
  },
  {
    key: "marketing", 
    title: "Marketing",
    items: [
      { href: "/digital-marketing-services-in-chandigarh", label: "Performance Marketing" },
      { href: "/social-media-marketing-agency-in-chandigarh", label: "Social Media Marketing" },
      { href: "/best-seo-services-in-chandigarh", label: "Search Engine Optimization" },
    ]
  },
  {
    key: "design",
    title: "Design", 
    items: [
      { href: "/best-ui-ux-designers-in-chandigarh", label: "UI UX Design" },
    ]
  },
  {
    key: "products",
    title: "Products",
    items: [
      { href: "/ai-chatbot-chandigarh-panchkula", label: "AI Chat Bot" },
      { href: "/crypto-wallet-solutions-chandigarh-panchkula", label: "Crypto Wallet" },
      { href: "/24-games-panchkula-chandigarh", label: "Game (24 Game)" },
      { href: "/crypto-exchange-chandigarh-panchkula", label: "Crypto Exchange" },
      { href: "/layer1-layer2-blockchain-panchkula-chandigarh", label: "Layer 1/Layer 2 BlockChain" },
    ]
  },
  {
    key: "developers",
    title: "Developers",
    items: [
      { href: "/best-crypto-exchange-developer-chandigarh", label: "Best Crypto Developers" },
      { href: "/best-blockchain-developer-chandigarh", label: "Best Blockchain Developers" },
      { href: "/best-mlm-software-developer-chandigarh", label: "Best MLM Developers" },
    ]
  }
];

const TECHNOLOGY_ITEMS_COL1 = [
  { href: "/web-portal-development-chandigarh", label: "Enterprise Portal Development" },
  { href: "/lowcode-nocode-app", label: "lowCode/noCode-app" },
  { href: "/blockchain-web-development-chandigarh", label: "Blockchain Development" },
  { href: "/saas-app-development-company-in-chandigarh", label: "Saas Development" },
  { href: "/laravel-development-company-in-chandigarh", label: "Laravel Development" },
];

const TECHNOLOGY_ITEMS_COL2 = [
  { href: "/mobile-app-development-chandigarh", label: "Mobile App Development" },
  { href: "/woocommerce-development-services-in-chandigarh", label: "WooCommerce Development" },
  { href: "/best-magento-developers-in-chandigarh", label: "Magento Development" },
  { href: "/shopify-development", label: "Shopify Development" },
  { href: "/ar-vr-development", label: "AR/VR Development" },
];

const TECHNOLOGY_ITEMS_COL3 = [
  { href: "/website-designing-company-in-chandigarh", label: "Website Designing" },
  { href: "/ecommerce-website-designing-company-chandigarh", label: "E-commerce Development" },
  { href: "/react-native-developers-chandigarh", label: "React Native Development" },
  { href: "/software-development-company-in-chandigarh", label: "Software Development" },
];

const PRODUCTS_ITEMS_COL1 = [
  { href: "/ai-chatbot-chandigarh-panchkula", label: "AI Chat Bot" },
  { href: "/crypto-wallet-solutions-chandigarh-panchkula", label: "Crypto Wallet" },
  { href: "/24-games-panchkula-chandigarh", label: "Game (24 Game)" },
  { href: "/crypto-exchange-chandigarh-panchkula", label: "Crypto Exchange" },
  { href: "/layer1-layer2-blockchain-panchkula-chandigarh", label: "Layer 1/Layer 2 BlockChain" },
];

const PRODUCTS_ITEMS_COL2 = [
  { href: "/crm-erp", label: "CRM/ERP" },
  { href: "/trading-bot-chandigarh-panchkula", label: "Trading Bot" },
  { href: "/mlm-software-chandigarh-panchkula", label: "MLM Software" },
  { href: "/school-management-panchkula-chandigarh", label: "School Management" },
  { href: "/hospital-management-panchkula-chandigarh", label: "Hospital Management" },
];

const PRODUCTS_ITEMS_COL3 = [
  { href: "/dap-dao-chandigarh-panchkula", label: "DAP/DAO" },
  { href: "/job-portal-solutions", label: "Job Portal" },
  { href: "/uber-ola-clone-panchkula-chandigarh", label: "Uber/Ola Clone" },
  { href: "/zomato-urbanup-clone-panchkula-chandigarh", label: "Zomato/Urbanup Clone" },
  { href: "/multi-vendor-ecommerce-panchkula-chandigarh", label: "Multivendor Ecommerce" },
];

const DEVELOPERS_ITEMS_COL1 = [
  { href: "/best-crypto-exchange-developer-chandigarh", label: "Best Crypto Developers" },
];

const DEVELOPERS_ITEMS_COL2 = [
  { href: "/best-blockchain-developer-chandigarh", label: "Best Blockchain Developers" },
];

const DEVELOPERS_ITEMS_COL3 = [
  { href: "/best-mlm-software-developer-chandigarh", label: "Best MLM Developers" },
];

const DEVELOPERS_ITEMS_ROW2_COL1 = [
  { href: "/best-shopify-developer-chandigarh", label: "Best Shopify Developers" },
];

const DEVELOPERS_ITEMS_ROW2_COL2 = [
  { href: "/best-smart-contract-developer-chandigarh", label: "Smart Contract Developers" },
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
    <a href="tel:+91 09876475990" aria-label="Call Now for Consultation">
      <div className="content">
        <div className="pulse">
          <IoCall />
        </div>
      </div>
    </a>
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
            <Link href="/digital-marketing-services-in-chandigarh" onClick={handleMegaMenuLinkClick}>
              Performance Marketing
            </Link>
          </div>
        </Col>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            <Link href="/social-media-marketing-agency-in-chandigarh" onClick={handleMegaMenuLinkClick}>
              Social Media Marketing
            </Link>
          </div>
        </Col>
        <Col lg={4}>
          <div className="tab-menus tab_menu_top d-flex flex-column gap-4">
            <Link href="/best-seo-services-in-chandigarh" onClick={handleMegaMenuLinkClick}>
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
            <Link href="/best-ui-ux-designers-in-chandigarh" onClick={handleMegaMenuLinkClick}>
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
          <NavbarCollapse id="basic-navbar-nav" className="menu-list">
            <Nav className="align-items-center">
              <NavLink as={Link} href="/about-us">
                About Us
              </NavLink>

              {/* Dropdown Menu with hover functionality - same structure */}
              <NavLink
                as={Link}
                href="#"
                className="dropdownMenu"
                onMouseEnter={handleMegaMenuMouseEnter}
                onMouseLeave={handleMegaMenuMouseLeave}
              >
                Our Services <FaAngleDown />
                {isMegaMenuOpen && (
                  <div className="megaMenu d-flex justify-content-between">
                    <TabContainer id="left-tabs-example" defaultActiveKey="technology">
                      <div className="side-tab-list">
                        <Row>
                          <Nav variant="pills" className="flex-column">
                            {SERVICE_TABS.map((tab) => (
                              <NavItem key={tab.key}>
                                <NavLink eventKey={tab.key}>
                                  <div className="tabIcons d-flex w-100 justify-content-between align-items-center">
                                    <span>{tab.title}</span>
                                    <FaAngleRight />
                                  </div>
                                </NavLink>
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
                                <Link href="/digital-marketing-services-in-chandigarh" onClick={toggleMenu}>
                                  Performance Marketing
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link href="/social-media-marketing-agency-in-chandigarh" onClick={toggleMenu}>
                                  Social Media Marketing
                                </Link>
                              </li>
                              <li className="py-2 border-bottom">
                                <Link href="/best-seo-services-in-chandigarh" onClick={toggleMenu}>
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
                                <Link href="/best-ui-ux-designers-in-chandigarh" onClick={toggleMenu}>
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