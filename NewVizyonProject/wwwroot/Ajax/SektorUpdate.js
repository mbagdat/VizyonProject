

function openDetail(name, id) {
    $("#sektorvekonuupdatename").val(name);
    /*$("#sektorvekonuupdateid").val(id);*/
    $("#myUpdateModal").modal("toggle");

    $("#sektorVeKonuUpdate").click(function () {
        //sektorAdi = $("#sektorvekonuupdatename").val();
        //sektorId = $("#sektorvekonuupdateid").val();
        //var sek = {
        //    sektorAdi: sektorAdi,
        //    sektorId: sektorId
        //};
        $.ajax({
            type: "POST",
            data: { SektorId: id },
            content: "application/json; charset=utf-8",
            dataType: "json",
            url: "/Sektor/SektorGuncelle/",
            success: function (data) {
                $(".table").html(data.sek);
            }
        });
        $("#myUpdateModal").modal("hide");
        setInterval('location.reload()', 400);
    });
}


