document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = [
    ".main_header_my_name",
    ".main_header_about_me",
    ".my_skills_icon",
    ".section_container_box1",
    ".section_container_box2",
    ".section_container_box3",
    ".section_container_box4",
    ".main_section_relative_box_2",
    ".main_header_my_image",
    ".main_header_mytelegram",
    ".main_header_myinstagram",
    ".main_header_myfacebook",
    ".section_container_p",
    ".section_container_h1",
    ".pro_skills_p",
    ".pro_skills_h1" // ✅ siz so‘ragan qism qo‘shildi
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "all 2s ease";
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(50px)";
      observer.observe(el);
    });
  });
});
