$(".col-pic").click(function(){
    console.log($(this).attr("id"));
    $(".color-box").toggle();
    $(".color-box").attr("status",$(this).attr("id"));
})


$(".colors").click(function (event) {
    let nowColor = $(this).css("background-color");
    $("#col-display").css("background-color", nowColor);
})


function assignColor() {
    for (let j = 1; j < 11; j++) {
        let currentRow = $(`[id$='-${j}']`)
        for (let i = 0; i < currentRow.length; i++) {
            let colH = i * 30;
            $(currentRow[i]).css("background-color", `hsla(${colH},100%,${j*5}%)`);
        }
    }
}

assignColor();