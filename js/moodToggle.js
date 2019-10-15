var mode = "light";
var moodToggle = function () {
    console.log("Swap!")
    if (mode == "light") {
        makeDark();
    }
    else if (mode == "dark") {
        makeLight();
    }
}

var makeDark = function () {
    // $("#moodToggle").removeClass("").addClass("")
    $("#moodToggle").css("color", "white")
    $("body").css("background-color", "#1B1862")
    $("body").css("color", "#FFFFFF")
    $(".contentbox").css("background", "#0e0d33")
    $(".contentbox").css("box-shadow", "1px 1px 5px 0px #daeefc")
    $(".person").css("background", "#0e0d33")
    $("#nav-placeholder").css("box-shadow", "1px -1px 20px 7px #1B1862")
    $(".bg-light").css("background-color", "#0e0d33")
    $("#footer").css("background", "#0e0d33")
    mode = "dark"
}

var makeLight = function () {
    // $("#moodToggle").removeClass("").addClass("")
    $("#moodToggle").css("color", "white")
    $("body").css("background-color", "#daeefc")
    $("body").css("color", "#1B1862")
    $(".contentbox").css("background", "white")
    $(".contentbox").css("box-shadow", "1px 1px 5px 0px #1B1862")
    $(".person").css("background", "white")
    $("#nav-placeholder").css("box-shadow", "1px -1px 20px 7px #daeefc")
    $(".bg-light").css("background-color", "#1B1862")
    $("#footer").css("background", "#1B1862")
    mode = "light"
}