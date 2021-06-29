

$(function () {
    $("#aciklamaSave").click(function () {
        Detay = $("#Description").val()
        OnayTarihi = $("#onayTarihi").val()
        Puan = $("#puanVer").val()
        if (Puan <= 0 || Puan >= 11) {
            alert("Girilen Değer 1 ile 10 Arasında Olmalıdır !!!");
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
            url: "/Sektor/YeniAciklama/",
            success: function (data) {
                $(".table").html(data.aciklama);
            }
        });
        $("#myAciklamaModal").modal("hide");
        setInterval("location.reload()", 400);
    });
});





