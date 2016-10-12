$(document).ready(function() {

            $("#divEndereco").hide();
            
            $("#btnConsultar").click(function() {

                    if (verificaInputVazio($("#texCep").val()) == false){
                      return;
                    }
                        var cep = $("#texCep").val();
                        var url = "http://apps.widenet.com.br/busca-cep/api/cep/" + cep + ".json";

                        $.get(url, {
                                code: cep
                            },
                            function(result) {
                                if (result.status != 1) {
                                    alert(result.message || "Houve um erro desconhecido!");
                                    $("#divEndereco").hide();
                                    return;
                                }
                                $("#txtRua").text(result.address);
                                $("#txtBairro").text(result.district);
                                $("#txtCidade").text(result.city);
                                $("#txtEstado").text(result.state);
                                $("#txtCEP").text(result.code);

                                $("#divEndereco").show();
                            });
                    });

            function verificaInputVazio(a) {
                if (a == "" || null) {
                    alert("CEP inválido!");
                    return false;
                }
            }
            });
