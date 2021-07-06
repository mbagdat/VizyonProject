


function ConfirmDelete(Detay, AciklamaId) {

    $("#detaydeletename").text(Detay);

    $("#AciklamaDeleteModal").modal();
    $("#aciklamaDelete").click(function () {


        $.ajax({
            type: "POST",
            data: { AciklamaId: AciklamaId },
            content: "application/json; charset=utf-8",
            dataType: "json",
            url: "/Default/DeleteAciklama/",
            success: function (data) {
                $(".table").html(data.AciklamaId);
            }
        });
        $("#AciklamaDeleteModal").modal("hide");
        setInterval('location.reload()', 400);
    });
}