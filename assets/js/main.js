$(window).on("load", function() {

});

$(document).ready(function() {
    $('.parallax').parallax();
    $(".tooltipped").tooltip({exitDelay: 300});
});

function showToast(htmlData, classData = "red white-text", icon = "info") {
    let toastIcon = "<i class='material-icons left'>" + icon + "</i>";
    return M.toast({html: toastIcon + htmlData, classes: classData});
}

function noCode() {
    showToast("Contact administrator for permission.", "red lighten-1 black-text");
}