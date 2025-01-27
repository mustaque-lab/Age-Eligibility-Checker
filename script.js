

document.getElementById("checkButton")
.addEventListener("click", function() {
    const ageValue = parseInt(document.getElementById("ageInput").value);

   const resultDiv = document.getElementById("result");
   resultDiv.innerHTML = "";
   
   if ((ageValue <= 120) && (ageValue > 0)) {
    if (ageValue >= 18) {
        resultDiv.innerHTML += "<i>You are eligible to vote.</i><br/>";
    }else{
        resultDiv.innerHTML += "<i>You are not eligible to vote.</i><br/>";
    }

    if (ageValue >= 16) {
        resultDiv.innerHTML += "<i>You are eligible to drive.</i><br/>";
    }else{
        resultDiv.innerHTML += "<i>You are not eligible to drive.</i><br/>";
    }
   } else {
        resultDiv.innerHTML = "<b>---!Invalid Age!---</b>";
   }
   
});

















