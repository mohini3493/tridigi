import Link from "next/link";
import DropDown from "./DropDown";
import Image from "next/image";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children cs-mega_parent">
        <Link href="#" onClick={() => setMobileToggle(false)}>
          Digital Marketing
        </Link>

        <DropDown>
          <div className="cs-mega_menu">
            <div className="container">
              <div className="cs-mega_wrapper">
                {/* Column 1 */}
                <div className="cs-mega_col">
                  <h4 className="cs-mega_title">
                    <Image
                      src="/assets/img/bullhorn.png"
                      alt="img"
                      width={32}
                      height={32}
                    />
                    <span>Digital Marketing</span>
                  </h4>
                  <ul>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Creative Advertising
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Email Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        B2B Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        B2B Lead Generation
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Online Reputation Management
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="cs-mega_col">
                  <h4 className="cs-mega_title">
                    <Image
                      src="/assets/img/statistics.png"
                      alt="img"
                      width={32}
                      height={32}
                    />
                    <span>Brand Performance</span>
                  </h4>
                  <ul>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Performance Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        PPC Services
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Media Buying
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="cs-mega_col">
                  <h4 className="cs-mega_title">
                    <Image
                      src="/assets/img/social-media.png"
                      alt="img"
                      width={32}
                      height={32}
                    />
                    <span>Social Media Marketing</span>
                  </h4>
                  <ul className="cs-mega_submenu">
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Social Media Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Facebook Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Linkedin Marketing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Youtube Marketing
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="cs-mega_col">
                  <h4 className="cs-mega_title">
                    <Image
                      src="/assets/img/seo.png"
                      alt="img"
                      width={32}
                      height={32}
                    />
                    <span>Search Engine Optimization</span>
                  </h4>
                  <ul className="cs-mega_submenu">
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        SEO Overview
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Ecommerce SEO
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        SEO Audit Services
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        AI SEO
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Generative Engine Optimisation
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Google Penalty Removal
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Local SEO
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Link Building
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Conversion Rate Optimization
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link href="#" onClick={() => setMobileToggle(false)}>
          Design
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                Brand Identity
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                Brand Strategy & Consulting
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                Logo Design
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                Corporate Branding
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                Marketing Collateral
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link href="#" onClick={() => setMobileToggle(false)}>
          Content
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                Content Writing
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                Guest Posting
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                Press Release
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children cs-mega_parent">
        <Link href="#" onClick={() => setMobileToggle(false)}>
          Technology
        </Link>

        <DropDown>
          <div className="cs-mega_menu">
            <div className="container">
              <div className="cs-mega_wrapper cs-mega_wrapper--5col">
                {/* Column 1 */}
                <div className="cs-mega_col">
                  <h4 className="cs-mega_title">
                    <Image
                      src="/assets/img/development.png"
                      alt="img"
                      width={32}
                      height={32}
                    />
                    <span>Website Development</span>
                  </h4>
                  <ul className="cs-mega_submenu">
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Website Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Ecommerce Website
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Wordpress Website
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Magento Website
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Website Maintenance Service
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div className="cs-mega_col">
                  <h4 className="cs-mega_title">
                    <Image
                      src="/assets/img/app-development.png"
                      alt="img"
                      width={32}
                      height={32}
                    />
                    <span>Mobile App Development</span>
                  </h4>
                  <ul className="cs-mega_submenu">
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Mobile App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        iOS App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Cross Platform Mobile App
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Hybrid Mobile App
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Flutter App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Native App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Android App Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        App Store Optimization
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Mobile App Maintenance
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="cs-mega_col">
                  <h4 className="cs-mega_title">
                    <Image
                      src="/assets/img/ai.png"
                      alt="img"
                      width={32}
                      height={32}
                    />
                    <span>Technologies</span>
                  </h4>
                  <ul className="cs-mega_submenu">
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        AngularJS Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Django Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Java Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        NodeJS Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Python Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        ReactJS Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Rest API Development
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        VueJS Development
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 4 */}
                <div className="cs-mega_col">
                  <h4 className="cs-mega_title">
                    <Image
                      src="/assets/img/cloud-application.png"
                      alt="img"
                      width={32}
                      height={32}
                    />
                    <span>Cloud Services</span>
                  </h4>
                  <ul className="cs-mega_submenu">
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Cloud Consulting
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        AWS Managed Services
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Azure Managed Services
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        GCP Managed Services
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 5 */}
                <div className="cs-mega_col">
                  <h4 className="cs-mega_title">
                    <Image
                      src="/assets/img/self-service.png"
                      alt="img"
                      width={32}
                      height={32}
                    />
                    <span>Custom Solution</span>
                  </h4>
                  <ul className="cs-mega_submenu">
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Custom Web App
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Enterprise Web App
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Website And App Design
                      </Link>
                    </li>
                    <li>
                      <Link href="#" onClick={() => setMobileToggle(false)}>
                        Full Stack Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link href="#" onClick={() => setMobileToggle(false)}>
          Resources
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#" onClick={() => setMobileToggle(false)}>
                Case Study
              </Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setMobileToggle(false)}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMobileToggle(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
    </ul>
  );
}
