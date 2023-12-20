document.addEventListener("DOMContentLoaded", function () {
            var rows = document.querySelectorAll(".row");
    
            rows.forEach(function (row) {
                row.addEventListener("click", function () {
                    var detailsRow = this.nextElementSibling;
                    if (detailsRow.classList.contains("details")) {
                        detailsRow.style.display = detailsRow.style.display === "table-row" ? "none" : "table-row";
                    }
                });
            });
        });





        document.addEventListener("DOMContentLoaded", function () {
    var imageContainers = document.querySelectorAll(".image-container img");
    var rows = document.querySelectorAll(".row");
    var details = document.querySelectorAll(".details");

    imageContainers.forEach(function (image) {
        image.addEventListener("click", function () {
            var category = this.getAttribute("data-category");

            rows.forEach(function (row) {
                row.style.display = "none";
            });
            details.forEach(function (details) {
                details.style.display = "none";
            });

            rows.forEach(function (row) {
                var dataCategory = row.getAttribute("data-category");
                if (dataCategory === category) {
                    row.style.display = "table-row";
                }
            });
            
        });
    });
});

function resetFilter() {
    var rows = document.querySelectorAll(".row");

    rows.forEach(function (row) {
        row.style.display = "table-row";
    });
}
