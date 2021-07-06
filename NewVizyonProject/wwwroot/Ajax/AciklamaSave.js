
$(function () {
    $("#aciklamaSave").click(function () {
        Detay = $("#Description").val()
        OnayTarihi = $("#onayTarihi").val()
        Puan = $("#puanVer").val()

        //$("#createAciklama").validate({
        //    rules: {
        //        Description: { required: true },
        //        puanVer: {
        //            range: [0, 11],
        //        },
        //        onayTarihi: { required: true }
        //    },
        //    messages: {
        //        Description: { required: "Lütfen Açıklama giriniz" }
        //    }
        //});

        if (Puan <= 0 || Puan >= 11) {
            alert("Girilen Değer 1 ile 10 Arasında Olmalıdır !!!");
            return;
        }
        if (Detay == "") {
            alert("Açıklama Boş Olamaz!");
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
    });
});





