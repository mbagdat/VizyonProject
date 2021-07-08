
$(function () {
    $("#sektorSave").click(function (s) {
        var fieldIDArray = [$('#txtsektoradi')];
        var spanIDArray = [$('#txtsektoradiRequired'),
        $('#txtsektoradiRequired')
        ];
        for (i = 0; i < fieldIDArray.length; i++) {
            if (!fieldIDArray[i].val().length) {
                s.preventDefault();
                fieldIDArray[i].closest('.form-group')
                    .removeClass('has-success').addClass(
                        'has-error');
                spanIDArray[i].show();
            } else {
                fieldIDArray[i].closest('.form-group')
                    .removeClass('has-error').addClass(
                        'has-success');
                spanIDArray[i].hide();
                sektorAdi = $('#txtsektoradi').val()


                //if (sektorAdi=="") {
                //    alert("Sektor Adı Boş Olamaz!");
                //    return;
                //}
                var sektor = {
                    SektorAdi: sektorAdi
                };
                $.ajax({
                    type: "POST",
                    data: sektor,
                    content: "application/json; charset=utf-8",
                    dataType: "json",
                    url: "/Default/CreateSektor/",
                    success: function (data) {
                        $(".table").html(data.SektorAdi);
                    }
                });
                $("#mySaveModal").modal("hide");
                setInterval('location.reload()', 400);
            }
        }
    });
});

//$(function () {
//    $('#sektorSave').click(function (e) {
//        var fieldIDArray = [$('#txtsektoradi')];
//        var spanIDArray = [$('#txtsektoradiRequired'),
//            $('#txtsektoradiRequired')
//        ]; 
//        for (i = 0; i < fieldIDArray.length; i++) {
//            if (!fieldIDArray[i].val().length) {
//                e.preventDefault();
//                fieldIDArray[i].closest('.form-group')
//                    .removeClass('has-success').addClass(
//                        'has-error');
//                spanIDArray[i].show();
//            } else {
//                fieldIDArray[i].closest('.form-group')
//                    .removeClass('has-error').addClass(
//                        'has-success');
//                spanIDArray[i].hide();
//            }
//        }
//    });
//});
//.requiredField {
//    color: red;
//}