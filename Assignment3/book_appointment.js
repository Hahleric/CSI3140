let inputIds = ["stylist","service", "name", "email", "phone", "date", "time"];

let checkEmpty = function() {
    for (let i = 0; i < inputIds.length; i++) {
        let input = document.getElementById(inputIds[i]);
        if (input.value === "") {
            input.style.border = "2px solid red";
            return false;
        }
        else {
            input.style.border = "2px solid black";
        }
    }
    return true;
}

let afterCheck = function() {
    if (checkEmpty()) {
        let url = "confirmation_info.html";
        for (let i = 0; i < inputIds.length; i++) {
            let input = document.getElementById(inputIds[i]);
            if (i === 0) {
                url += "?" + inputIds[i] + "=" + input.value;
            }
            else{
                url += "&" + inputIds[i] + "=" + input.value;
            }


        }
        window.location.href = url;
    }
}

