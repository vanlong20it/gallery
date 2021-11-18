document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementsByClassName("gallery")[0];
    const modal = document.getElementById("modal");
    const imgModal = modal.getElementsByTagName("img")[0];
    const list = gallery.getElementsByClassName("item");
    const btnClose = modal.getElementsByClassName("btn-close")[0];
    const btnLeft = modal.querySelector(".btn-move.left");
    const btnRight = modal.querySelector(".btn-move.right");

    let current = 0;
    let src = null;
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", () => {
            current = i;
            gallery.classList.toggle("show");
            src = list[current]
                .getElementsByTagName("img")[0]
                .getAttribute("src");
            imgModal.setAttribute("src", src);
        });
    }

    btnLeft.addEventListener("click", () => {
        current -= 1;
        if (current < 0) {
            current = list.length - 1;
        }
        src = list[current].getElementsByTagName("img")[0].getAttribute("src");
        imgModal.setAttribute("src", src);
    });

    btnRight.addEventListener("click", () => {
        current += 1;
        if (current >= list.length) {
            current = 0;
        }
        console.log(current);

        src = list[current].getElementsByTagName("img")[0].getAttribute("src");
        imgModal.setAttribute("src", src);
    });

    btnClose.addEventListener("click", () => {
        gallery.classList.remove("show");
    });
});
