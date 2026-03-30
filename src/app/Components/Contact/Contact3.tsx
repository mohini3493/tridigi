import Image from "next/image";
import React from "react";

const Contact3 = () => {
  return (
    <div>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container-fluid">
        <div className="cs_contact_content">
          <div className="row cs_gap_y_30">
            <div className="col-xl-5 col-lg-6 wow fadeInLeft">
              <div className="cs_contact_desc cs_radius_30">
                <p className="cs_location_subtitle cs_fs_14 cs_bold cs_blue_color text-uppercase mb-0">
                  <span></span> Work With Us
                </p>
                <h2 className="cs_location_title cs_fs_36 cs_semibold cs_mb_13">
                  Let’s working together
                </h2>
                <p className="cs_contact_text cs_mb_22">
                  Thank you for your interest in Trivia Digital Agency. We are
                  excited to hear from you and discuss...
                </p>
                <ul className="cs_contact_info_list cs_type_1 cs_mp_0">
                  <li>
                    <div className="cs_iconbox cs_style_6">
                      <span className="cs_iconbox_icon cs_center cs_radius_50 position-relative">
                        <Image
                          src="/assets/img/icons/head_phone.svg"
                          alt="img"
                          width={26}
                          height={27}
                        />
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_mb_1">Call Us For Query</p>
                        <a
                          href="tel:+919550611298"
                          aria-label="Phone call button"
                        >
                          +91 9550611298
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cs_iconbox cs_style_6">
                      <span className="cs_iconbox_icon cs_center cs_radius_50 position-relative">
                        <Image
                          src="/assets/img/icons/email_2.svg"
                          alt="img"
                          width={26}
                          height={27}
                        />
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_mb_1">Email Anytime</p>
                        <a
                          href="mailto:info@triviadigitalagency.com"
                          aria-label="Click to send email"
                        >
                          info@triviadigitalagency.com
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="cs_iconbox cs_style_6">
                      <span className="cs_iconbox_icon cs_center cs_radius_50 position-relative">
                        <Image
                          src="/assets/img/icons/location.svg"
                          alt="img"
                          width={26}
                          height={27}
                        />
                      </span>
                      <div className="cs_iconbox_info">
                        <p className="cs_mb_1">Visit Our Office</p>
                        <p className="cs_fs_18 cs_semibold cs_heading_color mb-0">
                          10th Main, BTM Stage 2, Bangalore, 560076
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="cs_contact_form_wrapper cs_type_2 cs_radius_30">
                <form className="cs_contact_form cs_type_2 row cs_gap_y_20">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="cs_form_field cs_radius_8 cs_gray_bg_1"
                      placeholder="Your name*"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="cs_form_field cs_radius_8 cs_gray_bg_1"
                      placeholder="Email address*"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      className="cs_form_field cs_radius_8 cs_gray_bg_1"
                      placeholder="Phone number*"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="service"
                      className="cs_form_field cs_radius_8 cs_gray_bg_1"
                      placeholder="Select service*"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      rows={7}
                      className="cs_form_field cs_radius_20 cs_gray_bg_1"
                      placeholder="Write a message*"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button
                      type="submit"
                      aria-label="Submit button"
                      className="cs_btn cs_style_1 cs_fs_14 cs_semibold cs_white_color text-capitalize wow fadeInUp"
                    >
                      <span>Submit Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="cs_height_100 cs_height_lg_80"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact3;
