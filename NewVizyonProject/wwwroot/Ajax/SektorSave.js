/*SEKTOR KAYDET*/
$(function () {
    $("#sektorSave").click(function () {
        sektorAdi = $('#txtsektoradi').val()
        var sektor = {
            SektorAdi: sektorAdi
        };
        $.ajax({
            type: "POST",
            data: sektor,
            content: "application/json; charset=utf-8",
            dataType: "json",
            url: "/Sektor/YeniSektor/",
            success: function (data) {
                $(".table").html(data.SektorAdi);
            }
        });
        $("#mySaveModal").modal("hide");
        setInterval('location.reload()', 400);
    });
});