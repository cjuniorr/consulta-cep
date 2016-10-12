var app = angular.module("ConsultaCEP", []);
app.controller("consultaCEPCtrl"), function($scope){

  $scope.cep = $("#texCep").val();
  $scope.url = "http://apps.widenet.com.br/busca-cep/api/cep/" + $scope.cep + ".json";

  $('#btnConsultar').click(function(){

    if(cep.length != 0) return;

    $.get(url, {code: cep},
       function(result){
         if(result.status != 1 ){
           alert(result.message || "Houve um erro desconhecido!");
           return;
         }
         $("#txtRua").val(result.address);
         $("#txtBairro").val(result.district);
         $("#txtCidade").val(result.city);
         $("#txtEstado").val(result.state);
         $("#txtCEP").val(result.code);
    });
  });
};
