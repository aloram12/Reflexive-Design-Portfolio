console.log("Script is running!"); // This will confirm the file is loaded

function openImage(src) {
  console.log("Image clicked:", src); // Confirm function is called
  const overlay = document.getElementById("overlay");
  const fullscreen = document.getElementById("fullscreen-img");

  fullscreen.src = src;
  overlay.classList.remove("hidden");
}

function closeImage() {
  console.log("Overlay closed");
  const overlay = document.getElementById("overlay");
  const fullscreen = document.getElementById("fullscreen-img");

  fullscreen.src = "";
  overlay.classList.add("hidden");
}