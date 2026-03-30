import Image from "next/image";
import Link from "next/link";
import React from "react";

const About1 = () => {
  return (
    <section className="cs_about cs_style_1 position-relative overflow-hidden">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_40 cs_tab_reverse">
          <div className="col-lg-6">
            <div className="cs_about_content">
              <div className="cs_section_heading cs_style_1 cs_mb_28">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  Who are we?<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_21 wow fadeInDown">
                  A Full-Service Agency for Digital, Design, Content &
                  Technology
                </h2>
                <p className="cs_section_heading_text mb-0">
                  TRIVIA Digital Agency is a full-service digital solutions
                  company helping brands succeed in an ever-changing digital
                  world. We specialise in delivering integrated marketing,
                  design, content, and technology services that create real
                  business impact.
                </p>
                <p className="cs_section_heading_text mb-0">
                  Our approach is simple: understand your goals, build the right
                  strategy, and execute with precision.
                </p>
                <p className="cs_section_heading_text mb-0">
                  We work closely with clients across industries to improve
                  visibility, increase engagement, and drive sustainable growth.
                  Whether you need brand development, website creation, or
                  performance marketing, our team ensures every solution is
                  aligned with your business objectives.
                </p>
                <p className="cs_section_heading_text mb-0">
                  Over the years, we have successfully delivered hundreds of
                  projects for businesses worldwide, helping them strengthen
                  their digital presence and achieve consistent results.
                </p>
              </div>

              <div className="cs_about_btn_group">
                <Link
                  href="/about"
                  aria-label="Click to visit about us page"
                  className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft"
                >
                  <span>About Us</span>
                </Link>
                <div className="cs_client_info_wrapper wow fadeInRight">
                  <div className="cs_client_info_header cs_mb_15">
                    <Image
                      src="/assets/img/icons/star.svg"
                      alt="img"
                      width={18}
                      height={18}
                    />
                    <span className="cs_fs_20 cs_bold cs_heading_color">
                      Trustipilot
                    </span>
                  </div>
                  <div className="cs_client_review_content">
                    <div className="cs_client_thumb">
                      <Image
                        src="/assets/img/client_group_1.png"
                        alt="img"
                        width={126}
                        height={42}
                      />
                    </div>
                    <div className="cs_client_rating_info">
                      <div className="cs_rating" data-rating="4">
                        <div className="cs_rating_percentage"></div>
                      </div>
                      <p className="cs_fs_14 cs_heading_color mb-0">
                        450+ reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_about_thumbnail_wrapper wow fadeInUp">
              <div className="cs_about_thumbnail position-relative">
                <Image
                  src="/assets/img/about_img_1.jpg"
                  alt="img"
                  width={260}
                  height={353}
                />
                <div className="cs_project_infobox_wrapper">
                  <div className="cs_project_infobox cs_blue_bg">
                    <h3 className="cs_fs_48 cs_white_color">4500+</h3>
                    <p className="cs_white_color mb-0">Projects Delivered</p>
                  </div>
                </div>
                <div className="cs_vector_shape position-absolute">
                  <Image
                    src="/assets/img/vector_line.svg"
                    alt="img"
                    width={57}
                    height={19}
                  />
                </div>
              </div>
              <div className="cs_about_thumbnail position-relative">
                <Image
                  src="/assets/img/about_img_2.jpg"
                  alt="img"
                  width={269}
                  height={453}
                />
                <div className="cs_about_shape_3 position-absolute">
                  <Image
                    src="/assets/img/about_shape_1.svg"
                    alt="img"
                    width={99}
                    height={86}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_about_shape_1 position-absolute">
          <Image
            src="/assets/img/blob_shape.svg"
            alt="img"
            width={831}
            height={932}
          />
        </div>
        <div className="cs_about_shape_2 position-absolute">
          <Image
            src="/assets/img/circle_1.svg"
            alt="img"
            width={93}
            height={93}
          />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default About1;
