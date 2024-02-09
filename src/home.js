function homeStyle() {
   const currentTabDiv = document.createElement("div");
   currentTabDiv.id = "currentTabDiv";
   content.appendChild(currentTabDiv);

   const heroContainer = document.createElement("div");
   heroContainer.id = "heroContainer";
   currentTabDiv.appendChild(heroContainer);

   const heroHeader = document.createElement("h1");
   heroHeader.id = "heroHeader";
   heroContainer.appendChild(heroHeader);
   heroHeader.textContent = "Grape Website";

   const heroSlogan = document.createElement("h2");
   heroSlogan.id = "heroSlogan";
   heroContainer.appendChild(heroSlogan);
   heroSlogan.textContent = "Our Grapes are the Best";
}

export default homeStyle;