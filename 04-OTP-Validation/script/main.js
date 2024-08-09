// import myOTP:
import myOTP from "./OTP.js";

// create an instance of myOTP:
const OTP = new myOTP();

// create DOM element referances:
const otpBoxes = document.querySelectorAll(".otp-box");
const inputForm = document.querySelector(".otp-boxes-container");

// Load the first OTP:
setTimeout(function() {
   document.querySelector(".generated-otp").textContent = `Your OTP is ${OTP.getOTP()}`;

   document.querySelector("#otp-box-1").focus();
}, 2000);

// handle the user input:
otpBoxes.forEach((box) => {
   box.addEventListener("keyup", (e) => {
      const targetElement = e.target;
      const value = targetElement.value;

      if (e.key === "Backspace") {
         if (value === "") {
            targetElement.previousElementSibling && targetElement.previousElementSibling.focus();
         }
      }
   })
})

inputForm.addEventListener("input", (e) => {
   const targetElement = e.target;
   const value = targetElement.value;

   if (isNaN(value)) {
      targetElement.value = "";
      return;
   }

   if (targetElement.value != "") {
      targetElement.nextElementSibling.focus();
   }

   if (e.inputType === "deleteContentBackward") {
      if (value === "") {
         targetElement.previousElementSibling && targetElement.previousElementSibling.focus();
      }
   }

   // validate the OTP:
   validateOTP();
})


// HELPER FUNCTION: validateOTP():
function validateOTP() {
   let typedOTP = "";
   const generatedOTP = OTP.getOTP();
   const messageElement = document.querySelector(".otp-validation-message");
   let message = "Invalid OTP"

   otpBoxes.forEach((box) => {
      typedOTP += box.value;
   })

   typedOTP = parseInt(typedOTP);

   if (typedOTP === generatedOTP) {
      messageElement.classList.remove("fail")
      messageElement.classList.add("success")
      message = "OTP has been validated successfully!"
      messageElement.textContent = message;

      document.querySelector(".generated-otp").textContent = `Your new OTP is Loading...`

      setTimeout(() => {
         // regenerate OTP:
         OTP.setOTP();
         document.querySelector(".generated-otp").textContent = `Your New OTP ${OTP.getOTP()}`;
         messageElement.textContent = "";
         messageElement.classList.remove("success");

         // clear out the OTP box for new OTP:
         otpBoxes.forEach((box) => {
            box.value = ""
         })
         document.querySelector("#otp-box-1").focus();
      }, 2000);
   } else {
      messageElement.classList.remove("success");
      messageElement.classList.add("fail");
      messageElement.textContent = message;
   }
}







