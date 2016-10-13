$(document).ready(function() {
    var map;
    var maker;

    $("#map-canvas").show();
    $("#divEndereco").hide();

    $("#btnConsultar").click(function() {

        if (verificaInputVazio($("#texCep").val()) == false) {
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

    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(40.680898, -8.684059),
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    }

    google.maps.event.addDomListener(window, "load", initialize);

    function pesquisarEndereco() {
        var enderecoInput = document.getElementById('texCep').value;

        var geocoder = new google.maps.Geocoder();

        geocoder.geocode({
            address: map-canvas
        }, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                var myResult = results[0].geometry.location;

                criarMarcador(myResult);

                map.setCenter(myResult);

                map.setZoom(17);
            } else {
                alert("O Geocode não foi bem sucedido pela seguinte razão" + status);
            }
        });
    }

    function criarMarcador(latlng) {
        if (marker != undefined && marker != '') {
            marker.setMap(null);
            marker = '';
        }

        marker = new google.maps.Marker({
            map: map,
            position: latlng
        });
    }



});
