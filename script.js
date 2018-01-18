let apikey = "d45egyjiyxrlo880glvkfble";

$.ajax({
    type: 'GET',
    url:'https://openapi.etsy.com/v2/findAllShops?api_key=' + apikey;
})