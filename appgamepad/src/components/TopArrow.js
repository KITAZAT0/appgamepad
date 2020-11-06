import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";


function TopArrow() {

  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
      <>
        <FaArrowCircleUp
          className="scrollTop"
          onClick={scrollTop}
          style={{ width: 200 , display: showScroll ? "flex" : "none" }}
        />
    </>
  );
}

export default TopArrow;
