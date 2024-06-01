document.getElementById("modeToggle").addEventListener("change", function () {
  document.body.classList.toggle("light-mode");
});

let string = "";

let buttons = document.querySelectorAll(".button"); //selects all buttons with class button
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target);
    if (e.target.innerHTML == "=") {
      try {string = eval(string);
      document.querySelector(".input").value = string;
      }
      catch (err) {
        // If an error occurs, clear the input and display an error message
        string = "Error!";
        document.querySelector(".input").value = string;
        setTimeout(() => {
          string = "";
          document.querySelector(".input").value = string;
        }, 1500); // Clear the error message after 1.5 seconds
      }
    } else if(e.target.innerHTML == "C") {
        string  = "";
        document.querySelector(".input").value = string;
    }
    
    else {
      string = string + e.target.innerHTML; // takes whatever pressed
      document.querySelector(".input").value = string;
    }
  });
});
