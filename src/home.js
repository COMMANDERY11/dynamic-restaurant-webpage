function homeStyle() {
   const heroContainer = createElement("div");
   heroContainer.id = "heroContainer";
   content.appendChild(heroContainer);

   const heroHeader = createElement("h1");
   heroHeader.id = "heroHeader";
   heroContainer.appendChild(heroHeader);

   const heroSlogan = createElement("h2");
   heroSlogan.id = "heroSlogan";
   heroHeader.appendChild(heroSlogan);
}

export default { homeStyle };