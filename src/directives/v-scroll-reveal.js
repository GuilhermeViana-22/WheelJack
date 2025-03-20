// src/directives/v-scroll-reveal.js
export default {
    beforeMount(el) {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      };
      
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            el.style.opacity = "1";
            el.style.transform = "translateY(0px)";
          } else {
            el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            el.style.opacity = "0";
            el.style.transform = "translateY(60px)";
          }
        });
      };
      
      const observer = new IntersectionObserver(callback, options);
      el.style.opacity = "0";
      el.style.transform = "translateY(60px)";
      observer.observe(el);
    },
  };