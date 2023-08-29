function selectedPerf(objButton) {

    let selBtn = objButton.value;

    document.getElementById('selectedbutton').innerHTML = selBtn

}

function updatePage() {
    document.getElementById("page-1").style.display = "none";
    document.getElementById("page-2").style.display = "block";
}