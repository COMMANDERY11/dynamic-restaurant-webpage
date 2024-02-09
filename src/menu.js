function menuStyle() {
   const currentTabDiv = document.createElement("div");
   currentTabDiv.id = "currentTabDiv";
   content.appendChild(currentTabDiv);

   const plainText = document.createElement("p");
   plainText.id = "plainText";
   currentTabDiv.appendChild(plainText);
   plainText.textContent = "coffee is overrated";
}

export default menuStyle;