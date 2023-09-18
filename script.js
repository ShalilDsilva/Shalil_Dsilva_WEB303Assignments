/*
    WEB 303 Assignment 1 - jQuery
    {Shalil Dsilva}
*/


$(document).ready(function () {
    $("#yearly-salary, #percent").on("change", function () {
        var yearlySalary = $("#yearly-salary").val();
        var percent = $("#percent").val();
        var amount = (yearlySalary * percent) / 100;
        var roundedAmount = amount.toFixed(2);
        var formattedAmount = "$" + roundedAmount;
        $("#amount").text(formattedAmount);
    });
});
