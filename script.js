document.addEventListener("DOMContentLoaded", function () {
  var resendContainer = document.getElementById("resend-container");
  var timerElement = document.getElementById("timer");
  var timerDuration = 60; // Duration in seconds
  var timerInterval;

  function startTimer() {
    var endTime = Date.now() + timerDuration * 1000;

    timerInterval = setInterval(function () {
      var remainingTime = Math.max(
        0,
        Math.floor((endTime - Date.now()) / 1000)
      );
      var minutes = Math.floor(remainingTime / 60);
      var seconds = remainingTime % 60;

      timerElement.textContent =
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        resendContainer.classList.remove("hidden");
        timerElement.textContent = "";
      }
    }, 1000);
  }

  // Call this function when OTP is sent
  function onOtpSent() {
    resendContainer.classList.add("hidden");
    startTimer();
  }

  // Example function to handle resend OTP
  function send_otp() {
    // Implement your OTP resend logic here
    // For demonstration purposes:
    console.log("Resend OTP");
  }

  // Start the timer when the OTP is initially sent
  onOtpSent();
});
