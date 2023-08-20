import "./style.css";

// navigation
let showSearch = false;
const searchInput = document.getElementById("search-input");
const searchIcon = document.getElementById("search-icon");

searchIcon.addEventListener("click", () => {
  showSearch = !showSearch;

  !showSearch && searchInput.classList.replace("w-48", "w-0");
  !showSearch && searchInput.classList.replace("block", "hidden");
  !showSearch && searchInput.classList.replace("px-2", "px-0");

  showSearch && searchInput.classList.replace("w-0", "w-48");
  showSearch && searchInput.classList.replace("hidden", "block");
  showSearch && searchInput.classList.replace("px-0", "px-2");
});

// Initialization for ES Users
import { Carousel, Dropdown, Ripple, initTE } from "tw-elements";

initTE({ Carousel, Dropdown, Ripple });
