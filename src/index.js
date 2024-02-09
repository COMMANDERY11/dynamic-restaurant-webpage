import './style.scss';
import homeStyle from "./home.js";
import menuStyle from "./menu.js";
import aboutStyle from "./about.js";

const content = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

let currentTab = 0;
homeStyle();

function switchTab() {
   switch (currentTab) {
      case 0:
         if (content.childNodes.length > 0) {
            document.querySelector("#currentTabDiv").remove();
         };
         homeStyle();
         break;

      case 1:
         if (content.childNodes.length > 0) {
            document.querySelector("#currentTabDiv").remove();
         }
         menuStyle();
         break;

      case 2:
         if (content.childNodes.length > 0) {
            document.querySelector("#currentTabDiv").remove();
         }
         aboutStyle();
         break;
   }
}

homeButton.addEventListener("click", () => {
   currentTab = 0;
   switchTab();
   console.log(currentTab);
});

menuButton.addEventListener("click", () => {
   currentTab = 1;
   switchTab();
   console.log(currentTab);
});

aboutButton.addEventListener("click", () => {
   currentTab = 2;
   switchTab();
   console.log(currentTab);
});