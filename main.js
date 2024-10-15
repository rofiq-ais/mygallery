const container = document.querySelector(".container")
const jumbo = document.querySelector(".jumbo")
const thumb = document.querySelector(".gambar")

container.addEventListener("click", function (event){
    if (event.target.className == "gambar"){
        jumbo.src = event.target.src;
        jumbo.classList.add("fade");
        setTimeout(() => {
            jumbo.classList.remove("fade")
        }, 500);
    }
    thumb.forEach(event => {
        event.classList = "gambar"
    });
    event.target.classList.add("active")
})
