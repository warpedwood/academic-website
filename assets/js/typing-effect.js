document.addEventListener("DOMContentLoaded", function() {
  console.log("Typing effect script loaded"); // Debugging statement

  const titles = ["Software Developer", "Machine Learning Engineer", "Connected System Researcher"];
  const bioElement = document.getElementById("author-bio");
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100; // Speed of typing
  const deletingSpeed = 50; // Speed of deleting
  const pauseBetweenTitles = 4000; // Pause before starting the next title

  function type() {
    const currentTitle = titles[titleIndex];

    if (!isDeleting && charIndex < currentTitle.length) {
      bioElement.textContent += currentTitle.charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      bioElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(type, deletingSpeed);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(type, pauseBetweenTitles);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(type, typingSpeed);
    }
  }

  type(); // Start the typing effect
});
