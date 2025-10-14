"use client";

import { useState } from "react";
import { Modal, Row } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import AppImages from "@/config/constant/app.images";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://www.facebook.com/asvayuktechnologies/",
    icon: <FaFacebookF />,
  },
  {
    href: "https://www.linkedin.com/company/asvayuk-technologies-pvt-ltd/posts/?feedView=all",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.instagram.com/asvayuktechnologies/",
    icon: <FaInstagram />,
  },
  { href: "https://x.com/asvayuktech", icon: <FaXTwitter /> },
  { href: "https://www.youtube.com/@AsvayukTechnologies", icon: <FaYoutube /> },
  { href: "https://in.pinterest.com/asvayuktech/", icon: <FaPinterestP /> },
];

const serviceLinks = [
  { href: "/best-ui-ux-designers-in-chandigarh", label: "UI/UX Design" },
  {
    href: "/website-development-company-in-chandigarh-and-mohali",
    label: "Website Development",
  },
  {
    href: "/mobile-app-development-chandigarh",
    label: "Mobile App Development",
  },
  {
    href: "/ecommerce-website-designing-company-chandigarh",
    label: "eCommerce Development",
  },
  {
    href: "/best-seo-services-in-chandigarh",
    label: "Search Engine Optimization",
  },
  {
    href: "/web-portal-development-chandigarh",
    label: "Enterprise Portal Development",
  },
];

const quickLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/privacy-policy", label: "Privacy & Policy" },
];

function Footer() {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClose = () => setShow(false);

  // Memoized components
  const ContactModal = () => (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="">
          <div className="form">
            <Row>
              <div className="contact-info d-none d-lg-block col-lg-6 px-5">
                <h3 className="title">Let's get in touch</h3>
                <p className="text">
                  Ready to grow? Reach out to Asvayuk Technologies for software
                  and digital marketing!
                </p>
                <div className="info">
                  <div className="information">
                    <FaLocationDot />
                    <p>SCO-44, Sector 5-MDC,Panchkula,Haryana</p>
                  </div>
                  <div className="information">
                    <MdMail />
                    <p>info@asvayuktech.com</p>
                  </div>
                  <div className="information">
                    <FaPhone />
                    <p>+91 09876475990</p>
                  </div>
                </div>
                <div className="social-media">
                  <p>Connect with us :</p>
                  <div className="social-icons">
                    <Link
                      href="https://www.facebook.com/asvayuktechnologies/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      href="https://x.com/asvayuktech"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter />
                    </Link>
                    <Link
                      href="https://www.instagram.com/asvayuktechnologies/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/asvayuk-technologies-pvt-ltd/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="contact-form col-lg-6">
                <iframe
                  id="iframeForm"
                  width="100%"
                  height="480px"
                  src="https://crm.asvayuktech.com/forms/wtl/a5631df056d39b1643e1dbdad5c65bca"
                  className="rounded-3"
                  style={{ background: "transparent" }}
                  allowFullScreen
                ></iframe>
              </div>
            </Row>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );

  const FooterLinksSection = () => (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <ul className="list-unstyled d-flex gap-3">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/case-studies">Case Studies</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div>
              <ul className="list-unstyled d-flex gap-3 justify-content-start justify-content-lg-end">
                {socialLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row pt-4">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer_wrapper">
              <div className="img_logo">
                <Link href="/">
                  <Image
                    src={AppImages.brand.footerLogo}
                    alt="Asvayuk Technologies"
                    className="img-fluid"
                    width={200}
                    height={50}
                  />
                </Link>
              </div>
              <div className="footer_left_sec">
                <p className="mb-0 text-light">
                  For cutting-edge technological solutions anywhere in the
                  world, Asvayuk Technologies Private Limited is your go-to
                  partner. With a powerful combination of cutting-edge
                  infrastructure, advanced talents, and next-generation
                  experience, we enable enterprises.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="footer_menuinfo">
              <div className="footer_menu_title pb-2 mt-3 mt-md-0">
                <h4 className="fw-semibold">Our Services</h4>
              </div>
              <div className="footer_menu">
                <ul className="list-unstyled d-flex flex-column gap-2">
                  {serviceLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6 col-6">
            <div className="footer_menuinfo">
              <div className="footer_menu_title pb-2 mt-3 mt-md-0">
                <h4 className="fw-semibold">Quick Links</h4>
              </div>
              <div className="footer_menu">
                <ul className="list-unstyled d-flex flex-column gap-2">
                  {quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer_menuinfo">
              <div className="footer_menu_title pb-2">
                <h3 className="fw-semibold">Contact Us</h3>
              </div>
              <div className="footer_menu pe-5">
                <ul className="list-unstyled d-flex flex-column gap-2 contact_info">
                  <li>
                    <Link
                      href="https://maps.app.goo.gl/4HYCGEiryydf54xdA"
                      target="_blank"
                      className="d-flex gap-3"
                    >
                      <IoLocationSharp className="fs-3 pt-1" />
                      <p className="text-white mb-0">
                        <b>Our Address :</b>
                        <br />
                        SCO-44, Sector 5-MDC, Panchkula, Haryana
                      </p>
                    </Link>
                  </li>
                  <li>
                    <div className="d-flex gap-3 align-items-center">
                      <FaPhoneAlt />
                      <p className="text-white mb-0">
                        <Link href="tel:+9109876475990">+91 09876475990</Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="mailto:info@asvayuktech.com"
                      className="d-flex gap-3 align-items-center"
                    >
                      <FaEnvelope />
                      <p className="text-white mb-0">info@asvayuktech.com</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="//www.dmca.com/Protection/Status.aspx?ID=06d48c27-faa9-4f11-b7e9-5e0e5ccc0c99"
                      title="DMCA.com Protection Status"
                      className="dmca-badge"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        style={{
                          width: "120px",
                          height: "30px",
                          background: "#fff",
                        }}
                      ></div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );

  const FloatingIcons = () => (
    <>
      <section className="call-icons call2">
        <Link href="tel:+9109876475990" aria-label="Call Now for Consultation">
          <div className="content">
            <div className="pulse pulse2">
              <IoCall />
            </div>
          </div>
        </Link>
      </section>

      <section
        className="whatsapp-icon-container"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && <span className="chat-text">Chat with us</span>}
        <Link
          href="https://wa.me/9041065990"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon"
        >
          <FaWhatsapp size={40} />
        </Link>
      </section>
    </>
  );

  return (
    <>
      <ContactModal />

      <FooterLinksSection />

      <section className="footer_bottom bg-light text-center py-2">
        <p className="mb-0 fw-medium">
          © Copyright 2024 - Asvayuk Technologies Private Limited.
        </p>
      </section>

      <FloatingIcons />
    </>
  );
}

export default Footer;
