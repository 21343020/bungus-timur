// Efek smooth scrolling untuk menu
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

function smoothScroll(e) {
  e.preventDefault();

  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  const targetPosition = targetElement.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
}

// Efek parallax saat menggulir halaman
window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop - sectionHeight / 3) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });

  // Menampilkan/menyembunyikan tombol "Back to Top"
  const backToTopButton = document.querySelector("#backToTop");

  if (scrollPosition > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

// Tombol "Back to Top" - fungsi untuk kembali ke atas halaman
const backToTopButton = document.querySelector("#backToTop");

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
