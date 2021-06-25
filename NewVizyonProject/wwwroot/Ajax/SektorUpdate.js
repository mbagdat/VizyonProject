

function openDetail(name, id) {
    $("#sektorupdatename").val(name);
    $("#sektorupdateid").val(id);
    $("#mySektorUpdateModal").modal("toggle");

    $("#sektorUpdate").click(function () {
        sektorAdi = $("#sektorupdatename").val();
        sektorId = $("#sektorupdateid").val();
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
        $("#mySektorUpdateModal").modal("hide");
        setInterval('location.reload()', 400);
    });
}




