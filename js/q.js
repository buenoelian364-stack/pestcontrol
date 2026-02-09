document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".quiz-submit");
  btn.addEventListener("click", function () {
    var form = document.querySelector(".quiz-form");
    var pestType = form.querySelector('input[name="pest-type"]:checked');
    var frequency = form.querySelector('input[name="frequency"]:checked');
    var residence = form.querySelector('input[name="residence"]:checked');
    var location = form.querySelectorAll('input[name="location"]:checked');
    var residents = form.querySelectorAll('input[name="residents"]:checked');
    if (!pestType || !frequency || !residence || location.length === 0 || residents.length === 0) {
      alert("Please answer all questions.");
      return;
    }
    window.location.href = "contact.html";
  });
});
