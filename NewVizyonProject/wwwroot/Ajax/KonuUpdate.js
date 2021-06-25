
function openDetail(name, id) {
    $("#sektorvekonuupdatename").val(name);
    $("#sektorvekonuupdateid").val(id);
    $("#myUpdateModal").modal("toggle");

    $("#sektorVeKonuUpdate").click(function () {
        konuAdi = $("#sektorvekonuupdatename").val();
        konuId = $("#sektorvekonuupdateid").val();
        var konu = {
            konuAdi: konuAdi,
            konuId: konuId
        };
        $.ajax({
            type: "POST",
            data: konu,
            content: "application/json; charset=utf-8",
            dataType: "json",
            url: "/Sektor/KonuGuncelle/",
            success: function (data) {
                $(".table").html(data.konu);
            }
        });
        $("#myUpdateModal").modal("hide");
        setInterval('location.reload()', 400);
    });
}