// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

if ($(location).attr("pathname") == "/Cards/Create") {
    // only on page Cards/Create, this func will populate selects options
    $.ajax({
        type: "GET",
        url: "/Users/GetUsers",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $("#userSelect").append(
                    $("<option>", {
                        value: data[i].name,
                        text: data[i].name
                    })
                )
            }
        }
    });
};

$(".imgButton").on("click", (e) => {
    e.preventDefault();
    $("#imgModal").modal("show");
});