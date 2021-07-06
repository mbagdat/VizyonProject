

function ConfirmDelete(sektorAdi, SektorId) {

    $("#konuname").text(sektorAdi);

    $("#myDeleteModal").modal();
    $("#konuDelete").click(function () {


        $.ajax({
            type: "POST",
            data: { SektorId: SektorId },
            content: "application/json; charset=utf-8",
            dataType: "json",
            url: "/Default/DeleteKonu/",
            success: function (data) {
                $(".table").html(data.SektorId);
            }
        });
        $("#myDeleteModal").modal("hide");
        setInterval('location.reload()', 400);
    });
}