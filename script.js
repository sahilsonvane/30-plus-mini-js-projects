const projects = [
  {
    name: "Weather App",
    icon: "fa-solid fa-temperature-low",
    image: "/30-plus-mini-js-projects/images/weather.png",
    text:"Weather is a program that can show the current weather conditions of any city or country in the world. It uses a weather API to fetch the data from reliable sources and display it in a user-friendly interface.",
    url: "/30-plus-mini-js-projects/weather-app/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/age-calculator-app",
  },
  {
    name: "Age Calculator",
    icon: "fa-solid fa-plus-minus",
    image: "/30-plus-mini-js-projects/images/age-calculator.png",
    text: "This project is a simple and convenient tool for calculating anyone's age based on their birthday. It uses the JavaScript date function to perform the calculation and display the result.",
    url: "/30-plus-mini-js-projects/age-calculator-app/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/age-calculator-app",
  },
  {
    name: "Calculator",
    icon: "fa-solid fa-calculator",
    image: "/30-plus-mini-js-projects/images/calculator.png",
    text:"This project is a basic calculator that uses the eval function to perform basic arithmetic operations, including addition, subtraction, multiplication, division, and parentheses.",
    url: "/30-plus-mini-js-projects/calculator",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/calculator",
  },
  {
    name: "Circular Progress Bar",
    icon: "fa-solid fa-circle-notch",
    image: "/30-plus-mini-js-projects/images/circular-progressbar.png",
    text:"I'm so excited to share with you this custom circular progress bar that I created using complex HTML and CSS and a little JavaScript for functioning. It's a beautiful and dynamic way to display the progress of any task or activity. You can customize the color, size, thickness, and animation of the progress bar to suit your needs. It's also responsive and works well on different screen sizes. Let me show you how I did it.",
    url: "/30-plus-mini-js-projects/circular-progress-bar/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/circular-progress-bar/",
  },
  {
    name: "Coming Soon Page",
    icon: "fa-solid fa-clock",
    image: "/30-plus-mini-js-projects/images/coming-soon-page.png",
    text:  "This project showcases a stunning hero section that captures the attention of the visitors and invites them to explore more. It also features a countdown timer that displays the remaining time until the launch date, creating a sense of urgency and excitement.",
    url: "/30-plus-mini-js-projects/coming-soon-page/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/coming-soon-page/",
  },
  {
    name: "CryptoCurrency Price Webpage",
    icon: "fa-brands fa-bitcoin",
    image: "/30-plus-mini-js-projects/images/cryptocurrency.png",
    text:"This project is a cryptocurrency tracker that displays the live prices of various digital currencies, such as bitcoin, dogecoin, and more. The project uses an API to fetch the latest data from the cryptocurrency market and present it in a user-friendly interface.",
    url: "/30-plus-mini-js-projects/cryptocurrency-price-website/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/cryptocurrency-price-website/",
  },
  {
    name: "Digital Clock",
    icon: "fa-regular fa-clock",
    image: "/30-plus-mini-js-projects/images/digital-clock.png",
    text: "It can show the current time in a digital format. This is achieved by using the date function in JavaScript, which returns the date and time as an object. The webpage then displays the hours, minutes and seconds properties of the object in a user-friendly way.",
    url: "/30-plus-mini-js-projects/digital-clock/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/digital-clock/",
  },
  {
    name: "Drag & Drop",
    icon: "fa-solid fa-hand-pointer",
    image: "/30-plus-mini-js-projects/images/drag-n-drop.png",
    text: "This webpage showcases the drag and drop functionality of a website. I implemented this feature using event listeners such as dragstart and dragover. However, this feature only works on desktop devices.",
    url: "/30-plus-mini-js-projects/drag-and-drop/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/drag-and-drop/",
  },
  {
    name: "Form Validation",
    icon: "fa-brands fa-wpforms",
    image: "/30-plus-mini-js-projects/images/form-validation.png",
    text: "This project is designed to prevent invalid form submission. It ensures that the data entered by the user matches the expected data type and format. This project helps to avoid errors and improve user experience.",
    url: "/30-plus-mini-js-projects/form-validation/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/form-validation/",
  },
  {
    name: "Background Remover Effect",
    icon: "fa-solid fa-images",
    image: "/30-plus-mini-js-projects/images/background-remove-effect.png",
    text: "This website demonstrates an effect where the background of an image changes or appears when the mouse moves over it. This effect is achieved by using the JavaScript mouseover event, which may not work well on mobile devices.",
    url: "/30-plus-mini-js-projects/image-background-change/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/image-background-change/",
  },
  {
    name: "Image Search Engine",
    icon: "fa-solid fa-image",
    image: "/30-plus-mini-js-projects/images/image-search-engine.png",
    text: "This project is a simple and powerful image search engine that can find any open-source images using keywords. It uses the unsplash API to access a large and diverse collection of high-quality photos. You can use this tool to browse, download, or share images for personal or commercial purposes.",
    url: "/30-plus-mini-js-projects/image-search-engine/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/image-search-engine/",
  },
  {
    name: "Mini Calendar",
    icon: "fa-solid fa-calendar-days",
    image: "/30-plus-mini-js-projects/images/mini-calendar.png",
    text: "This mini calendar is a useful tool that can display today's date on your desktop or mobile device.",
    url: "/30-plus-mini-js-projects/mini-calendar/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/mini-calendar/",
  },
  {
    name: "Music Player",
    icon: "fa-solid fa-music",
    image: "/30-plus-mini-js-projects/images/music-player.png",
    text: "This music app allows you to play songs from your device. It has a simple interface with basic functions, such as play, pause, and skip. You can also drag the progress bar to move forward or backward in the song. This app does not have advanced features like playlists, equalizers, or lyrics, but it is easy to use and reliable.",
    url: "/30-plus-mini-js-projects/music-player-app/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/music-player-app/",
  },
  {
    name: "Note App",
    icon: "fa-solid fa-note-sticky",
    image: "/30-plus-mini-js-projects/images/note-app.png",
    text: "This note app is a super useful tool to note anything. It can store your note even the app or website is closed. It uses localstorage to store notes data.",
    url: "/30-plus-mini-js-projects/note-app/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/note-app/",
  },
  {
    name: "Password Generator",
    icon: "fa-solid fa-bolt",
    image: "/30-plus-mini-js-projects/images/password-generator.png",
    text: "A password generator is a JavaScript project that generates secure passwords for users, allowing them to specify length and character type, and a copy button for easy access.",
    url: "/30-plus-mini-js-projects/password-generator/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/password-generator/",
  },
  {
    name: "Password Strength",
    icon: "fa-solid fa-lock",
    image: "/30-plus-mini-js-projects/images/password-strength.png",
    text: "A password strength checker is a useful tool to help users create strong and secure passwords. It can measure the complexity of a password based on various criteria, such as length, character types, and common patterns. In this project, I will use JavaScript to create a simple password strength checker that displays a score and a feedback message for the user's input.",
    url: "/30-plus-mini-js-projects/password-strength/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/password-strength/",
  },
  {
    name: "Photo Gallery",
    icon: "fa-solid fa-photo-film",
    image: "/30-plus-mini-js-projects/images/photo-gallery.png",
    text: "In this project, I will create a photo gallery that can be scrolled horizontally using the mouse wheel. I will use JavaScript to manipulate the CSS properties of the images and the container element. The goal is to create a responsive and user-friendly interface that showcases the photos in an attractive way.",
    url: "/30-plus-mini-js-projects/photo-gallery/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/photo-gallery/",
  },
  {
    name: "Popup Notification",
    icon: "fa-solid fa-comment-dots",
    image: "/30-plus-mini-js-projects/images/popup-notification.png",
    text: "The project outlines a JavaScript-based animated popup notification component, designed to display various types of notifications on web pages using CSS animations, transitions, themes, positions, durations, and callbacks.",
    url: "/30-plus-mini-js-projects/popup-notification/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/popup-notification/",
  },
  {
    name: "Product Page",
    icon: "fa-solid fa-newspaper",
    image: "/30-plus-mini-js-projects/images/product-page.png",
    text: "The project involved creating an online store product page using JavaScript, HTML, CSS, event listeners, DOM manipulation, and a responsive design. The page displays product information, allows user selection, updates image and price, and handles user interaction.",
    url: "/30-plus-mini-js-projects/product-page/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/product-page/",
  },
  {
    name: "Qr Code Generator",
    icon: "fa-solid fa-qrcode",
    image: "/30-plus-mini-js-projects/images/qr-code.png",
    text: "This tool allows you to create various types of QR codes, such as text, links or numbers. You just need to enter the data in the input field and the QR code will be generated quickly. This tool uses an API to perform the operation efficiently and securely.",
    url: "/30-plus-mini-js-projects/qr-code-generator/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/qr-code-generator/",
  },
  {
    name: "Quiz App",
    icon: "fa-regular fa-lightbulb",
    image: "/30-plus-mini-js-projects/images/quiz.png",
    text: "This is a static quiz app that can evaluate the user's answers and provide a score based on the number of correct responses. The app does not require any internet connection or database to function. It is designed to test the user's knowledge on various topics in a simple and interactive way.",
    url: "/30-plus-mini-js-projects/quiz-app/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/quiz-app/",
  },
  {
    name: "Quote Generator",
    icon: "fa-solid fa-quote-left",
    image: "/30-plus-mini-js-projects/images/quote.png",
    text: "This app is a quote generator that can produce motivational quotes for you. You can also tweet them on Twitter with a single click. This app uses a quote API that generates random quotes from various sources. Whether you need some inspiration, encouragement, or wisdom, this app can help you find the right words.",
    url: "/30-plus-mini-js-projects/quote-generator/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/quote-generator/",
  },
  {
    name: "Custom Select Menu",
    icon: "fa-solid fa-bars",
    image: "/30-plus-mini-js-projects/images/select-menu.png",
    text: "This is a custom select menu that I created using HTML, CSS and JavaScript. It allows the user to choose an option from a dropdown list that is dynamically generated by JavaScript. The menu has a simple and elegant design that can be customized with different colors and fonts.",
    url: "/30-plus-mini-js-projects/select-menu-design/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/select-menu-design/",
  },
  {
    name: "Show/Hide Password",
    icon: "fa-regular fa-eye-slash",
    image: "/30-plus-mini-js-projects/images/password-show.png",
    text: "A common feature in many web applications is the ability to show or hide the password entered by the user. This can enhance the user experience and security of the application. To implement this feature using JavaScript, we can use a simple function that toggles the input type of the password field between 'password' and 'text'. The function can be triggered by a checkbox or a button that the user can click to show or hide the password. Here is an example of how to create this feature using JavaScript",
    url: "/30-plus-mini-js-projects/show-password/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/show-password/",
  },
  {
    name: "Stop Watch",
    icon: "fa-solid fa-stopwatch",
    image: "/30-plus-mini-js-projects/images/stop-watch.png",
    text: "This webpage features a simple stop watch that can be controlled by three buttons. The stop watch uses the setInterval function of JavaScript to update the time every seconds. The buttons allow the user to pause, play and reset the stop watch as needed. The webpage is designed with HTML and CSS for a minimalistic look.",
    url: "/30-plus-mini-js-projects/stopwatch/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/",
  },
  {
    name: "Email Subscription",
    icon: "fa-solid fa-envelope-circle-check",
    image: "/30-plus-mini-js-projects/images/email.png",
    text: "One way to gather customer information is to use an email subscription form on your website. This form can be connected to a Google sheet using JavaScript code, so we don't need a backend database to store the data. This is a simple and efficient method to collect and manage your customer data.",
    url: "/30-plus-mini-js-projects/subscription-email/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/subscription-email/",
  },
  {
    name: "Text to Speech",
    icon: "fa-solid fa-volume-low",
    image: "/30-plus-mini-js-projects/images/text-to-speech.png",
    text: "A text to speech app is a software that can transform written text into spoken words. The user can choose from different voices that are available on the device. This can be achieved by using the SpeechSynthesisUtterance function in javascript, which allows creating and configuring speech synthesis utterances.",
    url: "/30-plus-mini-js-projects/text-to-voice-converter/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/text-to-voice-converter/",
  },
  {
    name: "To Do List",
    icon: "fa-solid fa-list-check",
    image: "/30-plus-mini-js-projects/images/to-do.png",
    text: "To Do List is a web app that helps you organize your daily tasks. You can create, delete and mark tasks as completed with a simple click. Your tasks are saved even if you close the website, so you don't have to worry about losing your progress. This app is designed to be user-friendly and efficient.",
    url: "/30-plus-mini-js-projects/to-do-list-app/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/to-do-list-app/",
  },
  {
    name: "Tost Notification",
    icon: "fa-solid fa-chart-bar",
    image: "/30-plus-mini-js-projects/images/toast-notification.png",
    text: "A toast notification is a modern way to notify the user about various events, such as the success, warning, or error of a website operation. This function can be implemented by using JavaScript, which allows creating dynamic and interactive web pages. Toast notifications are usually displayed in a small pop-up window at the corner of the screen, and they disappear after a few seconds or when the user clicks on them.",
    url: "/30-plus-mini-js-projects/toast-notification/",
    code: "https://github.com/Sahil-Sonvane/30-plus-mini-js-projects/tree/main/toast-notification/",
  },
];

let ProjecTile = document.getElementById("project-tile");

// Function to display data for a specific page
function displayData(pageNumber, pageSize, data) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const pageData = data.slice(startIndex, endIndex);

  const ProjecTile = document.getElementById("project-tile");
  ProjecTile.innerHTML = "";
  pageData.forEach((item) => {
    ProjecTile.innerHTML += `<div class="card">
    <div class="visual">
      <img src="${item.image}" />
    </div>
    <div class="info">
      <h3><i class="${item.icon}"></i> ${item.name}</h3>
      <p>${item.text}</p>
      </div>
      <div class="buttons">
        <a href="${item.code}" class="btn">Code</a>
        <a href="${item.url}" class="btn">Live</a>
    </div>
  </div> `;
  });

 
}

// Function to generate pagination links
function generatePaginationLinks(totalPages) {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    li.textContent = i;

    if (i === currentPage) {
      li.classList.add("active");
    }

    li.addEventListener("click", () => {
      currentPage = i;
      displayData(currentPage, pageSize, projects);
      updateActivePage(currentPage);
      detectPage()
    });
    
    paginationContainer.appendChild(li);
  }
}

// Function to update the active page style
function updateActivePage(activePage) {
  const paginationLinks = document.querySelectorAll(".pagination li");
  paginationLinks.forEach((link, index) => {
    link.classList.toggle("active", index + 1 === activePage);
  });
}
// Function to go to the next page
function nextPage() {
  if (currentPage < Math.ceil(projects.length / pageSize)) {
    currentPage++;
    displayData(currentPage, pageSize, projects);
    updateActivePage(currentPage);
    detectPage()

  }
}



function detectPage(){

  let prevBtn = document.getElementById("prev")
let nextBtn = document.getElementById("next")

if (currentPage === 1) {
  prevBtn.disabled = true;
} else {
  prevBtn.disabled = false;
}

if (currentPage === Math.ceil(projects.length / pageSize)) {
  nextBtn.disabled = true;
} else {
  nextBtn.disabled = false;
}
 

}



// Function to go to the previous page
function prevPage() {

  if (currentPage > 1) {
    currentPage--;
    displayData(currentPage, pageSize, projects);
    updateActivePage(currentPage);
  }
  detectPage()

}

// Initial settings
const pageSize = 6; // Number of items per page
let currentPage = 1;

// Display initial data and pagination links
displayData(currentPage, pageSize, projects);
generatePaginationLinks(Math.ceil(projects.length / pageSize), currentPage);
detectPage();
