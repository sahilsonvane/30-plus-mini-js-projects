const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const showResult = document.getElementById("result");

const regex = /[\s,~`!@#$%^&*()_+\-={}\[\]:;"'<>,.?\/\\|]+/g;

checkBtn.addEventListener("click", () => {
  let string = userInput.value;
  checkPalindrome(string);
});

function checkPalindrome(str) {
  if (str.length === 0) {
    alert("Please input a value");
  } else {
    let cleanstr = str.toLowerCase().replace(regex, "");
    let rev = cleanstr.split("").reverse().join("");

    if (rev === cleanstr) {
      showResult.textContent = `${str} is a palindrome`;
    } else {
      showResult.textContent = `${str} is not a palindrome`;
    }

    // using For Loop
    // let j = cleanstr.length - 1;

    // for (let i = 0; i < cleanstr.length/2; i++) {
    //     if(cleanstr[i] != cleanstr[j]){
    //           return    showResult.textContent = `${str} is not a palindrome`;

    //     }
    //     j--;

    // return showResult.textContent = `${str} is a palindrome`;

    // }
  }
}


// adding another function to input box

userInput.addEventListener('keyup', (e) =>{
    e.preventDefault()
    let string = userInput.value;
    checkPalindrome(string)
})



