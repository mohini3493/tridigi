"use client";
import { useState } from "react";

export default function MegaMenu({ children }) {
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  return (
    <>
      {/* Same toggle as DropDown */}
      <span
        className={
          mobileToggle
            ? "cs-munu_dropdown_toggle active"
            : "cs-munu_dropdown_toggle"
        }
        onClick={handleMobileToggle}
      >
        <span></span>
      </span>

      {/* Mega Panel */}
      <div
        className={
          mobileToggle ? "cs-mega-dropdown active" : "cs-mega-dropdown"
        }
      >
        {children}
      </div>
    </>
  );
}
