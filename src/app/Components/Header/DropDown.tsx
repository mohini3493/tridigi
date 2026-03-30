import { useState, cloneElement, isValidElement } from 'react';

export default function DropDown({ children }: { children: React.ReactNode }) {
  // Mobile Toggle
  const [mobileToggle, setMobileToggle] = useState(false);
  const handelMobileToggle = () => {
    setMobileToggle(!mobileToggle);
  };

  // Inject cs-dropdown-open class directly onto the child element so each
  // mega menu only responds to its own toggle state (not a CSS sibling selector).
  const toggledChildren = isValidElement(children)
    ? cloneElement(children as React.ReactElement<any>, {
        className: `${(children as React.ReactElement<any>).props.className || ''}${mobileToggle ? ' cs-dropdown-open' : ''}`,
      })
    : children;

  return (
    <>
      <span
        className={
          mobileToggle
            ? 'cs-munu_dropdown_toggle active'
            : 'cs-munu_dropdown_toggle'
        }
        onClick={handelMobileToggle}
      >
        <span></span>
      </span>
      {toggledChildren}
    </>
  );
}
