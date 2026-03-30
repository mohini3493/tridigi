import Image from "next/image";
import React from "react";

const HowWeDo = () => {
  return (
    <section className="position-relative overflow-hidden">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1 align-items-center">
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
              How We Do<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0 wow fadeInUp">
              Our Approach to Delivering Smart & Scalable Solutions
            </h2>
          </div>
          <div className="cs_section_heading_right wow fadeInRight">
            <p className="cs_section_heading_text mb-0">
              Successful projects come from clear communication, careful
              planning, and strong teamwork. From the initial discussion to the
              final delivery, our team stays focused on quality, performance,
              and client satisfaction. By combining strategy, design, marketing,
              and technology, we create solutions that are not only visually
              impressive but also effective and reliable.
            </p>
          </div>
        </div>
        <div className="cs_height_60 cs_height_lg_50"></div>
        <div className="row cs_gap_y_40 cs_tab_reverse align-items-center position-relative z-1">
          <div className="col-lg-5">
            <div className="cs_iconbox_wrapper wow fadeInLeft">
              <div className="cs_iconbox cs_style_1">
                <span className="cs_iconbox_icon cs_center cs_blue_bg cs_radius_50">
                  <Image
                    src="/assets/img/icons/dollar_currency.svg"
                    alt="img"
                    width={32}
                    height={32}
                  />
                </span>
                <div className="cs_iconbox_info">
                  <h3 className="cs_fs_24 cs_mb_4">Our Mission</h3>
                  <p className="cs_fs_18 cs_light mb-0">
                    Our mission is to help businesses grow with innovative
                    digital, creative, and technology solutions. We aim to
                    deliver work that adds real value and supports long-term
                    success. Every project we take on is handled with
                    dedication, responsibility, and a focus on results.
                  </p>
                </div>
              </div>
              <div className="cs_iconbox cs_style_1">
                <span className="cs_iconbox_icon cs_center cs_blue_bg cs_radius_50">
                  <Image
                    src="/assets/img/icons/star_2.png"
                    alt="img"
                    width={32}
                    height={32}
                  />
                </span>
                <div className="cs_iconbox_info">
                  <h3 className="cs_fs_24 cs_mb_4">Our Vision</h3>
                  <p className="cs_fs_18 cs_light mb-0">
                    Our vision is to become a trusted global digital agency
                    known for creativity, quality, and performance. We strive to
                    build long-term partnerships with our clients by delivering
                    consistent and reliable solutions. Innovation and continuous
                    improvement are at the core of everything we do.
                  </p>
                </div>
              </div>
              <div className="cs_iconbox cs_style_1">
                <span className="cs_iconbox_icon cs_center cs_blue_bg cs_radius_50">
                  <Image
                    src="/assets/img/icons/shield_check.png"
                    alt="img"
                    width={32}
                    height={32}
                  />
                </span>
                <div className="cs_iconbox_info">
                  <h3 className="cs_fs_24 cs_mb_4">What Makes Us Different?</h3>
                  <p className="cs_fs_18 cs_light mb-0">
                    We combine creativity, technical expertise, and strategic
                    thinking to deliver complete solutions under one roof. Our
                    team works closely with clients to understand their goals
                    and provide customised services. This approach helps us
                    create work that is effective, scalable, and future-ready.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="cs_working_thumbnail_wrapper cs_center position-relative">
              <div className="cs_working_thumbnail position-relative wow fadeInDown">
                <Image
                  src="/assets/img/working_img_1.jpg"
                  alt="img"
                  width={275}
                  height={369}
                />
                <span className="cs_comment">
                  <Image
                    src="/assets/img/icons/comment.svg"
                    alt="img"
                    width={46}
                    height={33}
                  />
                </span>
              </div>
              <div className="cs_working_thumbnail position-relative wow fadeInUp">
                <Image
                  src="/assets/img/working_img_2.jpg"
                  alt="img"
                  width={279}
                  height={369}
                />
                <span className="cs_like">
                  <Image
                    src="/assets/img/icons/like.svg"
                    alt="img"
                    width={40}
                    height={39}
                  />
                </span>
                <span className="cs_wheel_shape position-absolute">
                  <Image
                    src="/assets/img/wheel_1.svg"
                    alt="img"
                    width={121}
                    height={116}
                  />
                </span>
              </div>
              <Image
                src="/assets/img/favicon_2.svg"
                alt="img"
                width={123}
                height={123}
              />
            </div>
          </div>
        </div>
        <div className="cs_blob_1 position-absolute">
          <Image
            src="/assets/img/mission_shape_1.svg"
            alt="img"
            width={449}
            height={1274}
          />
        </div>
        <div className="cs_blob_2 position-absolute">
          <Image
            src="/assets/img/mission_shape_2.svg"
            alt="img"
            width={463}
            height={1274}
          />
        </div>
        <div className="cs_wave_1 position-absolute">
          <Image
            src="/assets/img/spiral_1.svg"
            alt="img"
            width={63}
            height={132}
          />
        </div>
        <div className="cs_wave_2 position-absolute">
          <Image
            src="/assets/img/waves.svg"
            alt="img"
            width={197}
            height={44}
          />
        </div>
        <div className="cs_rings position-absolute">
          <Image
            src="/assets/img/rings.svg"
            alt="img"
            width={191}
            height={161}
          />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default HowWeDo;
