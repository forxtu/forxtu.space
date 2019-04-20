import { useState, useEffect } from "react";

const useScrollHandler = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isHidden, setIsHidden] = useState(true);

  const handleScroll = e => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);
    setIsHidden(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return {
    isHidden
  };
};

export default useScrollHandler;
