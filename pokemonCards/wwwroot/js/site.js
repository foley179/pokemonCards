// ajax calls
if ($(location).attr("pathname") == "/Cards/Create") {
    // only on page Cards/Create, this func will populate selects options
    $.ajax({
        type: "GET",
        url: "/Users/GetUsers",
        success: function (data) {

            // clear select
            $("#userSelect").empty();

            // add empty option
            $("#userSelect").append(
                $("<option>", {
                    value: "",
                    disabled: true,
                    default: true,
                    text: "----- Select User -----",
                    class: "text-secondary"
                })
            );

            // populate select
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

// listeners
$(".imgButton").on("click", (e) => {
    e.preventDefault();
    $("#imgModal").modal("show");
});

$("#editSaveButton").on("click", (e) => {
    console.log("test");
    e.preventDefault();
    let user = $("#userOption").val();
    $("#userContainer").text(user);
    $("#confirmModal").modal("show");
});