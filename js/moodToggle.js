function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}


console.log(readCookie("name"));

// document.cookie = "name=light"
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var moodToggle = function () {
    if (readCookie("name") == "light") {
        makeDark();
        document.cookie = "name=dark"
    }
    else if (readCookie("name") == "dark") {
        makeLight();
        document.cookie = "name=light"
    }
    console.log(readCookie("name"))
}

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var makeDark = function () {
    // $("#moodToggle").removeClass("").addClass("")
    $("#moodToggle").css("color", "white")
    $("body").css("background-color", "#1B1862")
    $("body").css("color", "#FFFFFF")
    $(".contentbox").css("background", "#0e0d33")
    $(".contentbox").css("box-shadow", "1px 1px 5px 0px #daeefc")
    $(".person").css("background", "#0e0d33")
    $(".person").css("box-shadow", "1px 1px 5px 0px #daeefc")
    $("#nav-placeholder").css("box-shadow", "1px -1px 20px 7px #1B1862")
    $(".bg-light").css("background-color", "#0e0d33")
    $("#footer").css("background", "#0e0d33")
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
}

var verifyDark = function(){
    if(readCookie("name") == null){
        document.cookie = "name=light";
    }
    else if(readCookie("name") == "dark"){
        makeDark();
    }
}

verifyDark();
