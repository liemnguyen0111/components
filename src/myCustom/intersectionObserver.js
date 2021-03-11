import { useEffect } from "react";
import useWindowSize from "./useWindowSize";
const configs = {
  threshold: 0.2,
};

const IntersectionObs = (section, setData) => {
  const size = useWindowSize();
  useEffect(() => {
    const observer = new IntersectionObserver(check, configs);
    document.querySelectorAll(section).forEach((s) => observer.observe(s));

    return () => {
      document.querySelectorAll(section).forEach((s) => observer.unobserve(s));
    };
  }, [size.width]);

  const check = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setData(entry.target.dataset.index);
      }
    });
  };
};

export default IntersectionObs;
