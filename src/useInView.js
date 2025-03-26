import { useState, useEffect } from "react";

const useInView = (threshold = 0.5) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      { threshold } // Trigger when a certain percentage (50% here) of the element is in view
    );

    const element = document.getElementById("scrollElement");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.disconnect();
    };
  }, [threshold]);

  return isInView;
};

export default useInView;
