/* all inone file for ease of use, i would usually seporate */

// helper funcs
function search() {
    // get vars
    let searchTerm = $("#search").val();
    let filter = $("#searchFilter option:selected").val();

    console.log(searchTerm);

    $.ajax({
        type: "POST",
        url: "/Cards/Search",
        data: {
            searchTerm,
            filter
        },
        success: function (data) {
            // returns partial view
            $("main").html(data);
        }
    });
}

// listeners
$(".imgButton").on("click", (e) => {
    e.preventDefault();
    // TODO: ajax call api to retrieve img
    $("#imgModal").modal("show");
});

$(".editSaveButton").on("click", (e) => {
    // opens modal to confirm edit
    e.preventDefault();
    let user = $("#userOption").val();
    $("#userContainer").text(user);
    $("#confirmModal").modal("show");
});

// search listener
$("#search").on("input", () => {
    search();
})

// TODO: listener for filter change, if searchTerm == "" show index (do in c# if no search term return partialView, full search)

// card "create new" page listener
if ($(location).attr("pathname") == "/Cards/Create") {
    // only on page Cards/Create, this func will populate selects options
    $.ajax({
        type: "GET",
        url: "/Users/GetUsers",
        success: function (data) {

            // clear select
            $("#userSelect").empty();

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