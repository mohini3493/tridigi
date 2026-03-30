import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services1 = () => {
  const chooseContent = [
    {
      img: "/assets/img/service_item_bg.jpg",
      title: "Brand Identity & Design",
      content:
        "Your brand is more than just a logo; it is the way people recognise and remember your business. We create strong brand identities that reflect your values, vision, and personality. Our design team works on logos, brand guidelines, marketing creatives, and visual assets to ensure consistency across all platforms. A well-designed brand builds trust, improves recognition, and makes your business stand out in the market.",
    },
    {
      img: "/assets/img/service_item_bg.jpg",
      title: "Website Design & Development",
      content:
        "A modern website is the foundation of your digital presence. We design and develop fast, responsive, and user-friendly websites that deliver excellent performance on all devices. Our development team uses the latest technologies to build secure, scalable, and SEO-friendly websites tailored to your business needs. Whether it is a corporate website, portfolio, or custom platform, we ensure it looks professional and works perfectly.",
    },
    {
      img: "/assets/img/service_item_bg.jpg",
      title: "Data-Driven Digital Marketing",
      content:
        "We help businesses reach the right audience with effective, data-driven marketing strategies. Our digital marketing services include SEO, social media marketing, paid advertising, and performance campaigns. Every campaign is planned carefully to increase visibility, generate leads, and improve conversions. Our goal is not just traffic, but real growth for your business.",
    },
    {
      img: "/assets/img/service_item_bg.jpg",
      title: "Content Marketing",
      content:
        "Quality content plays a key role in building trust and attracting the right audience. Our content team creates engaging, informative, and SEO-friendly content for websites, blogs, social media, and marketing campaigns. We focus on delivering content that aligns with your brand voice and resonates with your audience. Good content improves search rankings, increases engagement, and supports long-term growth.",
    },
    {
      img: "/assets/img/service_item_bg.jpg",
      title: "UI/UX Design",
      content:
        "A good design is not only about appearance; it is about user experience. We create clean, modern, and user-friendly interfaces that make websites and applications easy to use. Our UI/UX design process focuses on usability, accessibility, and smooth navigation to ensure visitors enjoy every interaction. Better user experience leads to higher engagement and improved conversions.",
    },
    {
      img: "/assets/img/service_item_bg.jpg",
      title: "App Development",
      content:
        "We develop high-performance mobile and web applications for businesses of all sizes. Our team builds secure, scalable, and easy-to-use apps that meet modern user expectations. From idea to launch, we handle planning, design, development, and testing to ensure your application runs smoothly. Our solutions are built to support long-term growth and future upgrades.",
    },
    {
      img: "/assets/img/service_item_bg.jpg",
      title: "E-commerce Solutions",
      content:
        "We create powerful e-commerce platforms that help businesses sell online with confidence. Our team builds secure, fast, and easy-to-manage online stores with a smooth user experience. From product setup to payment integration and optimisation, we provide complete solutions that help increase sales and improve customer satisfaction.",
    },
    {
      img: "/assets/img/service_item_bg.jpg",
      title: "Technology & Automation",
      content:
        "Modern businesses need smart systems to work faster and more efficiently. We develop custom technology solutions and automation tools that improve workflow and reduce manual effort. From software development to business automation, our solutions help companies save time, increase productivity, and scale operations with ease.",
    },
    {
      img: "/assets/img/service_item_bg.jpg",
      title: "Consulting & Strategy",
      content:
        "Every successful project starts with the right plan. We provide expert consulting to understand your business goals, challenges, and opportunities before creating any solution. Our strategic approach ensures that every decision is aligned with long-term growth. With proper planning and guidance, businesses can achieve better results with less risk.",
    },
  ];

  return (
    <section className="cs_heading_bg">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
              Services<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 cs_white_color cs_mb_21 wow fadeInUp">
              Smart Services to Power Your Digital Growth
            </h2>
            <p className="cs_section_heading_text cs_white_color_2 mb-0 wow fadeInUp">
              Our team combines strategy, creativity, and advanced technology to
              deliver solutions that are not only visually impressive but also
              performance-driven. From brand development to software solutions,
              we offer everything you need to build a strong and future-ready
              business.{" "}
            </p>
          </div>
        </div>
        <div className="cs_height_60 cs_height_lg_50"></div>
        <div className="cs_service_item_wrapper">
          {chooseContent.map((item, i) => (
            <div
              key={i}
              className="cs_service_item cs_style_1 position-relative wow fadeInDown"
            >
              <div className="cs_service_content">
                <h3 className="cs_service_title cs_fs_24 cs_white_color mb-0">
                  <Link
                    href="/service/service-details"
                    aria-label="Click to view service details"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="cs_service_subtitle cs_medium cs_white_color_2 mb-0">
                  {item.content}
                </p>
                <Link
                  href="/service/service-details"
                  aria-label="Click to view service details"
                  className="cs_service_btn cs_center cs_radius_50"
                >
                  <Image
                    src="/assets/img/icons/arrow_right.svg"
                    alt="img"
                    width={23}
                    height={23}
                  />
                </Link>
              </div>
              <div className="cs_service_item_bg position-absolute">
                <Image src={item.img} alt="img" width={1904} height={147} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Services1;
