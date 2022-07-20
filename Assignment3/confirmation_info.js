let inputIds = ["stylist","service", "name", "email", "phone", "date", "time"];


function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        console.log(sParameterName);
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

let setStar = function() {
    for (let i = 0; i < inputIds.length; i++) {
        let input = document.getElementById(inputIds[i]);
        input.innerText = GetURLParameter(inputIds[i]);

    }
}

window.onload = setStar();