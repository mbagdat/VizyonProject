

$(function () {
    $("#konuSave").click(function () {
        KonuAdi = $('#txtkonuadi').val()
        if (KonuAdi == "") {
            alert("Konu Adı Boş Olamaz!");
            return;
        }
        var konu = {
            KonuAdi: KonuAdi
        };
        $.ajax({
            type: "POST",
            data: konu,
            content: "application/json; charset=utf-8",
            dataType: "json",
            url: "/Default/CreateKonu/",
            success: function (data) {
                $(".table").html(data.KonuAdi);
            }
        });
        $("#myKonuModal").modal("hide");
        setInterval('location.reload()', 400);
    });
});