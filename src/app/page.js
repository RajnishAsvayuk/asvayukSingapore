import BannerButton from "@/components/BannerBtn/BannerButton";
import AppImages from "@/config/constant/app.images";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        {/* <!--Banner --> */}
        <section className="banner p-0 p-lg-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner_textInfo pe-0 pe-lg-5 pe-md-5">
                  <h1>Engineering the Next Digital Era</h1>
                  <h2
                    className="py-3"
                    style={{
                      fontSize: "16px",
                      color: "#494949",
                      fontWeight: "500",
                      lineHeight: "1.5rem",
                    }}
                  >
                    At AsvayukTech, we empower businesses with cutting-edge
                    solutions in Ecommerce, Blockchain, AI, and Web Development.
                    From scalable digital platforms to intelligent systems, we
                    help enterprises transform ideas into powerful, data-driven
                    realities.
                  </h2>
                  <BannerButton btnTitle="Free Consultation" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bannerImg">
                  <Image
                    src={AppImages.home.bannerImg}
                    alt="design-development-marketing"
                    width={546}
                    height={546}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
