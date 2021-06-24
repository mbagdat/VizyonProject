

function ConfirmDelete(sektorAdi, SektorId) {
  
    $("#sektorvekonuname").text(sektorAdi);
  
    $("#myDeleteModal").modal();
    $("#sektorVeKonuDelete").click(function () {
        
      
        $.ajax({
            type: "POST",
            data: { SektorId: SektorId},
            content: "application/json; charset=utf-8",
            dataType: "json",
            url: "/Sektor/SektorSil/",
            success: function (data) {
                $(".table").html(data.SektorId);
            }
        });
        $("#myDeleteModal").modal("hide");
        setInterval('location.reload()', 400);
    });
} 