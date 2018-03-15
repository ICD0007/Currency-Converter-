var gbpRate;
var usdRate;
var result;
var mamount;


$(document).ready(function(){
    const eurMoney = 100;
    const key = "1c5e1d44909fc75f9e66f49e3d97ae6d" //
    $.ajax({
        url: 'http://data.fixer.io/api/latest?access_key=' + key,
        dataType: 'jsonp',
        success: function(json) {
            console.log(json);
            gbpRate = json.rates.GBP;
            // eurRate = json.rates.EUR;
            usdRate = json.rates.USD;
        },
        fail: function(xhr, statusText, body) {
            console.log(body);
        }
    });


});
function checktarget() {
    mamaount = $("#youramount")[0].value;
    if ($("#to_convert")[0].value.toUpperCase()=="GBP"){
        console.log(youramount);
        result = gbpRate * mamaount;
        console.log(gbpRate);

    }
    else if ($("#to_convert")[0].value.toUpperCase()=="USD"){
        result = usdRate * mamaount;
        console.log(mamount);
        console.log(usdRate);

    }
    else {
        null;
    }
    // window.alert("The value is "+result);
    console.log("da");


}
function revealresult(){
    checktarget()
    $("#my_result")[0].value =result;
}


