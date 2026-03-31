"use client";
import { useState } from 'react';

export default function DropDown({
  children,
  isMega = false,
}: {
  children: React.ReactNode;
  isMega?: boolean;
}) {
  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <>
      <span
        className={mobileToggle ? 'cs-munu_dropdown_toggle active' : 'cs-munu_dropdown_toggle'}
        onClick={() => setMobileToggle(!mobileToggle)}
      >
        <span></span>
      </span>

      {isMega ? (
        // Wrapper div fully owned by this component — no cloneElement needed.
        // CSS targets this wrapper to show/hide the mega menu on mobile.
        <div className={mobileToggle ? 'cs-mega-wrap cs-mega-wrap--open' : 'cs-mega-wrap'}>
          {children}
        </div>
      ) : (
        children
      )}
    </>
  );
}
