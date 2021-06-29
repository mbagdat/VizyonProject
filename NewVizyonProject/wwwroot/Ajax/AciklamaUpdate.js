
function openDetail(detay, onaytarihi, puan, id) {
    $("#detayupdatename").val(detay);
    $("#detayupdatedate").val(onaytarihi);
    $("#puanver").val(puan);
    $("#aciklamaupdateid").val(id);

    $("#AciklamaUpdateModal").modal("toggle");

    $("#aciklamaUpdate").click(function () {
        Detay = $("#detayupdatename").val();
        OnayTarihi = $("#detayupdatedate").val();
        Puan = $("#puanver").val();
        AciklamaId = $("#aciklamaupdateid").val();
        if (Puan <= 0 || Puan >= 11) {
            alert("Girilen Değer 1 ile 10 Arasında Olmalıdır !!!");
            return;
        }

        var aciklama = {
            Detay: Detay,
            OnayTarihi: OnayTarihi,
            Puan: Puan,
            AciklamaId: id
        };
        $.ajax({
            type: "POST",
            data: aciklama,
            content: "application/json; charset=utf-8",
            dataType: "json",
            url: "/Sektor/AciklamaGuncelle/",
            success: function (data) {
                $(".table").html(data.aciklama);
            }
        });
        $("#AciklamaUpdateModal").modal("hide");
        setInterval('location.reload()', 400);
    });
}