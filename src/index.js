document.addEventListener("DOMContentLoaded", () => {
  // your code here
    // Get the button and the paragraph elements
    const button = document.getElementById("myButton");
    const paragraph = document.getElementById("myParagraph");
  
    // Add an event listener to the button
    button.addEventListener("click", () => {
      // Toggle the visibility of the paragraph
      if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
      } else {
        paragraph.style.display = "none";
      }
    });

});
