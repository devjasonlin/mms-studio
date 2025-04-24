document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".visible-animation");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const item = entry.target;

        // 添加延迟，基于当前进入视图的卡片在 NodeList 中的顺序
        const delay = Array.from(items).indexOf(item) * 150;

        setTimeout(() => {
          item.classList.add("visible");
        }, delay);

        observer.unobserve(item); // 确保只触发一次
      }
    });
  }, {
    threshold: 0.001 // 触发阈值
  });

  items.forEach(item => observer.observe(item));
});