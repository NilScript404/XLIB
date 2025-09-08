class Search {
  fromYear;
  untillYear;
  language;
  extension;
}
const search = new Search();

// Search Options Text START
let searchOptionText = document.querySelector(".Search_Option");
let container = document.querySelector(".Search_Options_Container");

let exactMatchContainer = document.createElement("div");
exactMatchContainer.style.color = "#8C8C8C";

let tickBox = document.createElement("input");
tickBox.type = "checkbox";
tickBox.className = "check";

let exactMatchingText = document.createElement("span");
exactMatchingText.textContent = "Exact Matching";
// Search Options Text END

// FromYear option container start
let FromYearOptionContainer = document.createElement("div");
FromYearOptionContainer.className = "FromYear_Option_Container";

let FromYearOptionInputContainer = document.createElement("div");
FromYearOptionInputContainer.className = "FromYear_Option_Input_Container";

let FromYearInput = document.createElement("input");
FromYearInput.className = "FromYear_Input";
FromYearInput.placeholder = "From Year";
FromYearInput.type = "text";
FromYearInput.id = "FromYear";

let triangle = document.createElement("img");
triangle.className = "triangle";
triangle.src = "Triangle.png";
triangle.width = "8";
triangle.height = "8";

FromYearOptionInputContainer.appendChild(FromYearInput);
FromYearOptionInputContainer.appendChild(triangle);

/** @type {HTMLSelectElement} */
let FromYearOptionDropDown = document.querySelector(
  ".FromYear_Option_Dropdown",
);
(FromYearOptionDropDown.addEventListener("click", (e) => {
  search.fromYear = FromYearOptionDropDown.value;
  console.log(search.fromYear);
}),
  { once: false });

exactMatchContainer.appendChild(tickBox);
exactMatchContainer.appendChild(exactMatchingText);

FromYearOptionContainer.appendChild(FromYearOptionInputContainer);
FromYearOptionContainer.appendChild(FromYearOptionDropDown);
// FromYear option container END

// toyearFromContainer START
let toyearFromContainer = document.createElement("div");
toyearFromContainer.className = "toYear_From_Containers";

let toyearFromInput = document.createElement("input");
toyearFromInput.className = "toYear_From_Input";
toyearFromInput.placeholder = "Year to";
toyearFromInput.type = "text";
toyearFromInput.id = "toyear";

let toYearTriangle = document.createElement("img");
toYearTriangle.className = "triangle";
toYearTriangle.src = "Triangle.png";
toYearTriangle.width = "8";
toYearTriangle.height = "8";

let toyearFromInputContainer = document.createElement("div");
toyearFromInputContainer.className = "toyear_From_Input_Container";
toyearFromInputContainer.appendChild(toyearFromInput);
toyearFromInputContainer.appendChild(toYearTriangle);

/** @type {HTMLSelectElement} */
let toYearDropDown = document.querySelector(".toFrom_Year_Dropdown");
(toYearDropDown.addEventListener("click", (e) => {
  search.untillYear = toYearDropDown.value;
  console.log(search.untillYear);
}),
  { once: false });

console.log("IT WORKEDDDD");

toyearFromContainer.appendChild(toyearFromInputContainer);
toyearFromContainer.appendChild(toYearDropDown);
// toyearFromContainer END

// language Selection Container START
let languageOptionContainer = document.createElement("div");
languageOptionContainer.className = "language_Option_Container";

let languageInput = document.createElement("input");
languageInput.className = "language_Input";
languageInput.placeholder = "Select Language";
languageInput.type = "text";
languageInput.id = "language";

let languageOptionTriangle = document.createElement("img");
languageOptionTriangle.className = "triangle";
languageOptionTriangle.src = "Triangle.png";
languageOptionTriangle.width = "8";
languageOptionTriangle.height = "8";

let languageOptionInputContainer = document.createElement("div");
languageOptionInputContainer.className = "language_Option_Input_Container";
languageOptionInputContainer.appendChild(languageInput);
languageOptionInputContainer.appendChild(languageOptionTriangle);

/** @type {HTMLSelectElement} */
let languageOptionDropdown = document.querySelector(
  ".language_Option_Dropdown",
);
(languageOptionDropdown.addEventListener("click", (e) => {
  search.language = languageOptionDropdown.value;
  console.log(search.language);
}),
  { once: false });

languageOptionContainer.appendChild(languageOptionInputContainer);
languageOptionContainer.appendChild(languageOptionDropdown);
// language option container END

// extension option container START
let extensionOptionContainer = document.createElement("div");
extensionOptionContainer.className = "extension_Option_Container";

let extensionInput = document.createElement("input");
extensionInput.className = "extension_Input";
extensionInput.placeholder = "Select Extension";
extensionInput.type = "text";
extensionInput.id = "extension";

let extensionOptionTriangle = document.createElement("img");
extensionOptionTriangle.className = "triangle";
extensionOptionTriangle.src = "Triangle.png";
extensionOptionTriangle.width = "8";
extensionOptionTriangle.height = "8";

let extensionOptionInputContainer = document.createElement("div");
extensionOptionInputContainer.className = "extension_Option_Input_Container";
extensionOptionInputContainer.appendChild(extensionInput);
extensionOptionInputContainer.appendChild(extensionOptionTriangle);

/** @type {HTMLSelectElement} */
let extensionOptionDropdown = document.querySelector(
  ".extension_Option_Dropdown",
);
(extensionOptionDropdown.addEventListener("click", (e) => {
  search.extension = extensionOptionDropdown.value;
  console.log(search.extension);
}),
  { once: false });

extensionOptionContainer.appendChild(extensionOptionInputContainer);
extensionOptionContainer.appendChild(extensionOptionDropdown);
// extension option container END

// content option container START
let contentOptionContainer = document.createElement("div");
contentOptionContainer.className = "content_Option_Container";

let contentInput = document.createElement("input");
contentInput.className = "content_Input";
contentInput.placeholder = "Select Content";
contentInput.type = "text";
contentInput.id = "content";

let contentOptionTriangle = document.createElement("img");
contentOptionTriangle.className = "triangle";
contentOptionTriangle.src = "Triangle.png";
contentOptionTriangle.width = "8";
contentOptionTriangle.height = "8";

let contentOptionInputContainer = document.createElement("div");
contentOptionInputContainer.className = "content_Option_Input_Container";
contentOptionInputContainer.appendChild(contentInput);
contentOptionInputContainer.appendChild(contentOptionTriangle);

/** @type {HTMLSelectElement} */
let contentOptionDropdown = document.querySelector(".content_Option_Dropdown");
(contentOptionDropdown.addEventListener("click", (e) => {
  search.extension = contentOptionDropdown.value;
  console.log(search.extension);
}),
  { once: false });

contentOptionContainer.appendChild(contentOptionInputContainer);
contentOptionContainer.appendChild(contentOptionDropdown);
// content option container END

// build Search Option Container
searchOptionText.addEventListener("click", (e) => {
  searchOptionText.remove();

  container.appendChild(exactMatchContainer);

  container.appendChild(FromYearOptionContainer);
  for (let i = 2000; i < 2026; i++) {
    let e = document.createElement("option");
    e.value = i;
    e.textContent = i;
    FromYearOptionDropDown.appendChild(e);
  }

  container.appendChild(toyearFromContainer);
  for (let i = 2000; i < 2026; i++) {
    let e = document.createElement("option");
    e.value = i;
    e.textContent = i;
    toYearDropDown.appendChild(e);
  }

  container.appendChild(languageOptionContainer);
  for (let i = 2000; i < 2026; i++) {
    let e = document.createElement("option");
    e.value = i;
    e.textContent = i;
    languageOptionDropdown.appendChild(e);
  }

  container.appendChild(extensionOptionContainer);
  for (let i = 2000; i < 2026; i++) {
    let e = document.createElement("option");
    e.value = i;
    e.textContent = i;
    extensionOptionDropdown.appendChild(e);
  }

  container.appendChild(contentOptionContainer);
  for (let i = 2000; i < 2026; i++) {
    let e = document.createElement("option");
    e.value = i;
    e.textContent = i;
    contentOptionDropdown.appendChild(e);
  }
});

FromYearOptionDropDown.style.display = "none";
FromYearOptionContainer.style.height = "40%";
FromYearOptionContainer.style.marginBottom = "15px";
FromYearOptionInputContainer.style.marginTop = "7px";

FromYearOptionInputContainer.addEventListener("click", (e) => {
  FromYearOptionDropDown.style.display = "block";
  FromYearOptionContainer.style.height = "75%";
  FromYearOptionContainer.style.marginBottom = "0";
  FromYearOptionInputContainer.style.marginTop = "0";
});

// manage fromyear showing/hiding
toYearDropDown.style.display = "none";
toyearFromContainer.style.height = "40%";
toyearFromContainer.style.marginBottom = "15px";
toyearFromInputContainer.style.marginTop = "7px";

toyearFromInputContainer.addEventListener("click", (e) => {
  toYearDropDown.style.display = "block";
  toyearFromContainer.style.height = "75%";
  toyearFromContainer.style.marginBottom = "0";
  toyearFromInputContainer.style.marginTop = "0";
});

// manage language option showing/hiding
languageOptionDropdown.style.display = "none";
languageOptionContainer.style.height = "40%";
languageOptionContainer.style.marginBottom = "15px";
languageOptionInputContainer.style.marginTop = "7px";

languageOptionInputContainer.addEventListener("click", (e) => {
  languageOptionDropdown.style.display = "block";
  languageOptionContainer.style.height = "75%";
  languageOptionContainer.style.marginBottom = "0";
  languageOptionInputContainer.style.marginTop = "0";
});

// manage extension option showing/hiding
extensionOptionDropdown.style.display = "none";
extensionOptionContainer.style.height = "40%";
extensionOptionContainer.style.marginBottom = "15px";
extensionOptionInputContainer.style.marginTop = "7px";

extensionOptionInputContainer.addEventListener("click", (e) => {
  extensionOptionDropdown.style.display = "block";
  extensionOptionContainer.style.height = "75%";
  extensionOptionContainer.style.marginBottom = "0";
  extensionOptionInputContainer.style.marginTop = "0";
});

// manage content option showing/hiding
contentOptionDropdown.style.display = "none";
contentOptionContainer.style.height = "40%";
contentOptionContainer.style.marginBottom = "15px";
contentOptionInputContainer.style.marginTop = "7px";

contentOptionInputContainer.addEventListener("click", (e) => {
  contentOptionDropdown.style.display = "block";
  contentOptionContainer.style.height = "75%";
  contentOptionContainer.style.marginBottom = "0";
  contentOptionInputContainer.style.marginTop = "0";
});

let bookCount = 15;
bookListContainer = document.querySelector(".Book_List_Container");
for (let i = 0; i < bookCount; i++) {
  let book = document.createElement("img");
  book.src = "inter.png";
  book.height = 300;
  book.width = 223;
  bookListContainer.appendChild(book);
}

let LoadMoreTextContainer = document.querySelector(".Load_More_Text_Container");
let LoadMoreIcon = document.querySelector(".Load_More_Icon");
let LoadMoreText = document.querySelector(".Load_More_Actual_Text");
let LoadingMoreIcon = document.querySelector(".Loading_More_Icon");

LoadMoreTextContainer.addEventListener("click", (e) => {
  StartLoadingMoreBooks();
});

function StartLoadingMoreBooks() {
  LoadMoreIcon.style.display = "none";
  LoadMoreText.style.display = "none";
  LoadingMoreIcon.style.display = "flex";
  LoadingMoreIcon.style.marginLeft = "8px";
  console.log("handled");
  console.log(LoadingMoreIcon);

  setTimeout(FinishedLoadingBooksCallback, 1000);
}

function FinishedLoadingBooksCallback() {
  AddMoreBooks(15);
  LoadMoreIcon.style.display = "flex";
  LoadMoreText.style.display = "flex";
  LoadingMoreIcon.style.display = "none";
  LoadingMoreIcon.style.marginLeft = "0px";
  console.log("finished callback");
}

function AddMoreBooks(total) {
  for (let i = 0; i < total; i++) {
    let book = document.createElement("img");
    book.src = "inter.png";
    book.height = 300;
    book.width = 223;
    bookListContainer.appendChild(book);
  }
}

let menuBar = document.querySelector(".Menu");
let slider = document.querySelector(".slider");
let showingSlider = false;
let maskMainContainer = document.querySelector(".Mask_Main_Container");
let personalItem = document.querySelector(".Personal_item");

maskMainContainer.addEventListener("click", (e) => {
  if (showingSlider == true) {
    slider.style.animationName = "slide-out-text";
    setTimeout(HideSlider, 480);
    showingSlider = false;
    console.log("did hide the slider");
  }

  console.log("clicked on body");
});

function HideSlider() {
  slider.style.display = "none";
}

menuBar.addEventListener("click", (e) => {
  if (showingSlider == true) {
    slider.style.animationName = "slide-out-text";
    setTimeout(HideSlider, 450);
    showingSlider = false;
  } else {
    slider.style.animationName = "slide-in";
    slider.style.display = "flex";
    showingSlider = true;
  }
});
