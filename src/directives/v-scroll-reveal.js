// src/directives/v-scroll-reveal.js
export default {
    beforeMount(el) {
      const options = {
        root: null,
        rootMargin: "0px 0px -10% 0px", // Melhora detecção no mobile
        threshold: 0.1, // Reduz o threshold para capturar melhor a entrada
      };
      
      const callback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("reveal-visible");
            el.classList.remove("reveal-hidden");
          } else {
            el.classList.remove("reveal-visible");
            el.classList.add("reveal-hidden");
          }
        });
      };
      
      const observer = new IntersectionObserver(callback, options);
      el.classList.add("reveal-hidden"); // Aplica classe inicial
      observer.observe(el);
    },
  };
  