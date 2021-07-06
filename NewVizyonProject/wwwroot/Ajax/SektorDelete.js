

function ConfirmDelete(sektorAdi, SektorId) {
  
    $("#sektorname").text(sektorAdi);
  
    $("#myDeleteModal").modal();
    $("#sektorDelete").click(function () {
        
      
        $.ajax({
            type: "POST",
            data: { SektorId: SektorId},
            content: "application/json; charset=utf-8",
            dataType: "json",
            url: "/Default/DeleteSektor/",
            success: function (data) {
                $(".table").html(data.SektorId);
            }
        });
        $("#myDeleteModal").modal("hide");
        setInterval('location.reload()', 400);
    });
} 