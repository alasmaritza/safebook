var shelterGet = function (onSuccess, onError) {
    var url = "https://5a2c8607d38d3c0012a094c9.mockapi.io/shelter/1";
    var settings = {
        cache: false,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        dataType: "json",
        success: onSuccess,
        error: onError,
        type: "GET"
    }
    $.ajax(url, settings);
}