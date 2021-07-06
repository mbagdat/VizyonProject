/*SEKTOR KAYDET*/
$(function () {
    $("#sektorSave").click(function () {
        sektorAdi = $('#txtsektoradi').val()
        if (sektorAdi=="") {
            alert("Sektor Adı Boş Olamaz!");
            return;
        }
        var sektor = {
            SektorAdi: sektorAdi
        };
        $.ajax({
            type: "POST",
            data: sektor,
            content: "application/json; charset=utf-8",
            dataType: "json",
            url: "/Default/CreateSektor/",
            success: function (data) {
                $(".table").html(data.SektorAdi);
            }
        });
        $("#mySaveModal").modal("hide");
        setInterval('location.reload()', 400);
    });
});