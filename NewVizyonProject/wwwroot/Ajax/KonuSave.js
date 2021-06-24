$(function () {
    $("#konuSave").click(function () {
        KonuAdi = $('#txtkonuadi').val()
        var konu = {
            KonuAdi: KonuAdi
        };
        $.ajax({
            type: "POST",
            data: konu,
            content: "application/json; charset=utf-8",
            dataType: "json",
            url: "/Sektor/YeniKonu/",
            success: function (data) {
                $(".table").html(data.KonuAdi);
            }
        });
        $("#myKonuModal").modal("hide");
        setInterval('location.reload()', 400);
    });
});