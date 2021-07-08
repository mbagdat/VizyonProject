
$(function () {
    $("#aciklamaSave").click(function (a) {
        var fieldIDArray = [$("#Description")];
        var spanIDArray = [$("#txtdetayRequired"),
        $("#txtdetayRequired")
        ];
        for (i = 0; i < fieldIDArray.length; i++) {
            if (!fieldIDArray[i].val().length) {
                a.preventDefault();
                fieldIDArray[i].closest('.form-group')
                    .removeClass('has-success').addClass(
                        'has-error');
                spanIDArray[i].show();
            } else {
                fieldIDArray[i].closest('.form-group')
                    .removeClass('has-error').addClass(
                        'has-success');
                spanIDArray[i].hide();
                Detay = $("#Description").val()
                OnayTarihi = $("#onayTarihi").val()
                Puan = $("#puanVer").val()
                if (Puan <= 0 || Puan >= 11) {
                    alert("Girilen Değer 1 ile 10 Arasında Olmalıdır !!!");
                    return;
                }
                if (OnayTarihi == "") {
                    alert("Tarih Seçiniz!")
                    return;
                }

                var aciklama = {
                    Detay: Detay,
                    OnayTarihi: OnayTarihi,
                    Puan: Puan
                };
                $.ajax({
                    type: "POST",
                    data: aciklama,
                    content: "application/json; charset=utf-8",
                    dataType: "Json",
                    url: "/Default/CreateAciklama/",
                    success: function (data) {
                        $(".table").html(data.aciklama);                       
                    }
                });
                
                $("#myAciklamaModal").modal("hide");
                setInterval("location.reload()", 400);
              /*  alert("Kayıt işlemi başarılı");*/
            }
        }
    });
});





