var language = "English";
var languageToggle = function () {
    if (language == "English") {
        Frenchify();
        console.log("French!")
    }
    else if (language == "French") {
        Englishify();
        console.log("English!")
    }
}

var Frenchify = function () {
    $(".en").css("display", "none")
    $(".fr").css("display", "unset")
    language = "French"
}

var Englishify = function () {
    $(".en").css("display", "unset")
    $(".fr").css("display", "none")
    language = "English"
}