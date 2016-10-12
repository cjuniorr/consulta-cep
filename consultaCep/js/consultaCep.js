
var cep = document.getElementById('form');


$.getScript("http://cep.republicavirtual.com.br/web_cep.php?cep="+ cep + "&formato=json");
