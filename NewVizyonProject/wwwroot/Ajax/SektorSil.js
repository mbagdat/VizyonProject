

//function openSektorDelete(id) {
//    $("#sektorsiladi").val(name);
//    $("#sektorsilid").val(id);
//    $("#myDeleteModal").modal("toggle");

//    $("#sektorSil").click(function () {
//        sektorAdi = $("#sektorsiladi").val();
//        sektorId = $("#sektorsilid").val();
//        var id = {
//            sektorAdi: sektorAdi,
//            sektorId: sektorId
//        };
//        $.ajax({
//            type: "POST",
//            data: id,
//            content: "application/json; charset=utf-8",
//            dataType: "json",
//            url: "/Sektor/SektorSil/",
//            success: function (data) {
//                $(".table").html(data.sek);
//            }
//        });
//        $("#myDeleteModal").modal("hide");
//        setInterval('location.reload()', 400);
//    });
//}