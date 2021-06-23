

function openDetail(name, id) {
    $("#sektorname").val(name);
    $("#sektorid").val(id);
    $("#myUpdateModal").modal("toggle");

    $("#sektorUpdate").click(function () {
        sektorAdi = $("#sektorname").val();
        sektorId = $("#sektorid").val();
        var sek = {
            sektorAdi: sektorAdi,
            sektorId: sektorId
        };
        $.ajax({
            type: "POST",
            data: sek,
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