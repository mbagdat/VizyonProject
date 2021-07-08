

$(function () {
    $("#konuSave").click(function (k) {
        var fieldIDArray = [$('#txtkonuadi')];
        var spanIDArray = [$('#txtskonuadiRequired'),
        $('#txtskonuadiRequired')
        ];
        for (i = 0; i < fieldIDArray.length; i++) {
            if (!fieldIDArray[i].val().length) {
                k.preventDefault();
                fieldIDArray[i].closest('.form-group')
                    .removeClass('has-success').addClass(
                        'has-error');
                spanIDArray[i].show();
            } else {
                fieldIDArray[i].closest('.form-group')
                    .removeClass('has-error').addClass(
                        'has-success');
                spanIDArray[i].hide();
                KonuAdi = $('#txtkonuadi').val()
                //if (KonuAdi == "") {
                //    alert("Konu Adı Boş Olamaz!");
                //    return;
                //}
                var konu = {
                    KonuAdi: KonuAdi
                };
                $.ajax({
                    type: "POST",
                    data: konu,
                    content: "application/json; charset=utf-8",
                    dataType: "json",
                    url: "/Default/CreateKonu/",
                    success: function (data) {
                        $(".table").html(data.KonuAdi);
                    }
                });
                $("#myKonuModal").modal("hide");
                setInterval('location.reload()', 400);
            }
        }
    });
});

