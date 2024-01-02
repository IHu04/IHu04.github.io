function updateWindowSize() {
    // Get the entire document height
    const documentHeight = document.documentElement.scrollHeight;

    // Apply document height to the div
    const div = document.querySelector('.portfolio-texture');
    div.style.height = documentHeight + 'px';
  }

  // Call the function with a slight delay after the DOM is loaded
  document.addEventListener("DOMContentLoaded", function() {
    setTimeout(updateWindowSize, 50); // Delay for 100 milliseconds
  });

  // Call the function when the window is resized
  window.addEventListener("resize", function() {
    updateWindowSize(); // Call the function when the window is resized
  });