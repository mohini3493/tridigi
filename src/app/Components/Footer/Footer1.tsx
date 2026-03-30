import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer1 = () => {
  return (
    <footer
      className="cs_footer cs_style_1 cs_bg_filed cs_heading_bg position-relative"
      data-src="assets/img/footer_bg_1.jpg"
    >
      <div className="cs_footer_top position-relative z-1">
        <div className="container-fluid">
          <div className="cs_footer_content">
            <div className="cs_footer_top_content">
              <div className="wow fadeInLeft">Lets talk!</div>
              <Link
                href="/contact"
                className="cs_footer_top_img cs_radius_50 wow zoomIn"
              >
                <Image
                  src="/assets/img/footer_img_icon.png"
                  alt="img"
                  width={128}
                  height={128}
                />
                <span className="cs_center">
                  <Image
                    src="/assets/img/icons/arrow_right_2.svg"
                    alt="img"
                    width={54}
                    height={56}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_main_footer cs_white_color_2 position-relative z-1">
        <div className="container-fluid">
          <div className="cs_footer_content cs_footer_row">
            <div className="cs_footer_widget cs_footer_text">
              <div className="cs_text_widget">
                <Image
                  src="/assets/img/Lightlogo.png"
                  className="cs_mb_30 wow zoomIn"
                  alt="img"
                  width={200}
                  height={65}
                />
                <p className="cs_mb_37">
                  TRIVIA Digital Agency is a full-service digital marketing and
                  technology company providing innovative solutions to
                  businesses worldwide. We help brands grow through strategy,
                  creativity, and performance-driven execution.
                </p>
              </div>
              <div className="cs_social_btns cs_style_1">
                <a
                  href="https://www.facebook.com/triviadigitalagency"
                  aria-label="Social link"
                  className="cs_center cs_radius_50"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/triviadigital"
                  aria-label="Social link"
                  className="cs_center cs_radius_50"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/trivia-digital-agency"
                  aria-label="Social link"
                  className="cs_center cs_radius_50"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/triviadigitalagency/"
                  aria-label="Social link"
                  className="cs_center cs_radius_50"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
            <div className="cs_footer_links_wrapper">
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">
                  Quick Links
                </h2>
                <ul className="cs_footer_menu cs_mp_0">
                  <li>
                    <Link href="/about" aria-label="Page link">
                      About Digitom
                    </Link>
                  </li>
                  <li>
                    <Link href="/service" aria-label="Page link">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" aria-label="Page link">
                      Our Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" aria-label="Page link">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">
                  Contact Us
                </h2>
                <p className="cs_mb_24">
                  10th Main, BTM Stage 2, Bangalore, 560076
                </p>
                <h3 className="cs_fs_16 cs_white_color cs_mb_10">
                  Phone Call:
                </h3>
                <ul className="cs_footer_contact_list cs_mb_24 list-unstyled">
                  <li>
                    <a href="tel:919550611298" aria-label="Phone call link">
                      +91 9550611298
                    </a>
                  </li>
                </ul>
                <h3 className="cs_fs_16 cs_white_color cs_mb_10">Email:</h3>
                <ul className="cs_footer_contact_list cs_mp_0">
                  <li>
                    <a
                      href="mailto:info@triviadigitalagency.com"
                      aria-label="Email link"
                    >
                      info@triviadigitalagency.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="cs_footer_widget">
                <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_27 position-relative">
                  Newsletter
                </h2>
                <p className="cs_mb_27">
                  Sign up to seargin weekly newsletter to get the latest
                  updates.
                </p>
                <div className="cs_footer_newsletter cs_style_1">
                  <form
                    action="#"
                    className="cs_footer_newsletter_form cs_radius_8"
                  >
                    <input type="text" placeholder="Enter Email Address" />
                    <button
                      aria-label="Subscribe button"
                      className="cs_btn cs_style_1 cs_center"
                    >
                      <span>
                        <i className="bi bi-send"></i>
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_bottom cs_white_color_2 position-relative z-1">
        <div className="container-fluid">
          <div className="cs_footer_bottom_in cs_footer_content">
            <div className="cs_footer_copyright">
              &copy; All Copyright 2026 by{" "}
              <a href="#" aria-label="Site link">
                Trivia Digital Agency Pvt Ltd.
              </a>
            </div>
            <div>
              <ul className="cs_footer_menu cs_mp_0">
                <li>
                  <a href="#" aria-label="Footer link">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Footer link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_footer_shape_1 position-absolute">
        <Image
          src="/assets/img/footer_shape_1.svg"
          alt="img"
          width={148}
          height={556}
        />
      </div>
      <div className="cs_footer_shape_2 position-absolute">
        <Image
          src="/assets/img/footer_shape_1.svg"
          alt="img"
          width={148}
          height={556}
        />
      </div>
    </footer>
  );
};

export default Footer1;
