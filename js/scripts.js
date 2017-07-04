//Backend Logic

function BankAccount(name, initialAmount) {
  this.name = name;
  this.initialAmount = initialAmount;
}

//if statement needed in prototype to allow for blank deposits or withdrawls

BankAccount.prototype.change = function(deposit, withdrawl) {
  this.initialAmount = this.initialAmount + deposit - withdrawl;
}

//User Interface Logic
$(document).ready(function() {
  $("#setup").submit(function(event) {
    event.preventDefault();
    var userName = $("#name").val();
    var userAmount = parseInt($("#initialDeposit").val());
    var newUser = new BankAccount(userName, userAmount);
    $(".display").text(newUser.initialAmount);
    $("#transactions").submit(function(event) {
      event.preventDefault();
      var deposit = parseInt($("#deposit").val());
      var withdrawl = parseInt($("#withdrawl").val());
      newUser.change(deposit, withdrawl);
      $(".display").text(newUser.initialAmount);
    })
  });


});
