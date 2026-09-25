/* =====================================================
   ROOM DETAILS MODALS
===================================================== */

function openModal(modalId) {

    const modal = document.getElementById(modalId);

    if (!modal) {
        console.error("Modal not found:", modalId);
        return;
    }

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeModal(modalId) {

    const modal = document.getElementById(modalId);

    if (!modal) {
        console.error("Modal not found:", modalId);
        return;
    }

    modal.classList.remove("active");

    document.body.style.overflow = "";
}


/* =====================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
===================================================== */

document.querySelectorAll(".room-modal").forEach(function (modal) {

    modal.addEventListener("click", function (event) {

        if (event.target === modal) {
            closeModal(modal.id);
        }

    });

});


/* =====================================================
   CLOSE MODAL WITH ESCAPE
===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        document.querySelectorAll(".room-modal").forEach(function (modal) {

            modal.classList.remove("active");

        });

        document.body.style.overflow = "";

    }

});


/* =====================================================
   ROOM CARD CAROUSEL
===================================================== */

const roomTrack = document.querySelector(".room-track");

const prevButton = document.querySelector(".carousel-btn.prev");

const nextButton = document.querySelector(".carousel-btn.next");


if (roomTrack && prevButton && nextButton) {

    /* NEXT ARROW */

    nextButton.addEventListener("click", function () {

        roomTrack.scrollBy({
            left: roomTrack.clientWidth,
            behavior: "smooth"
        });

    });


    /* PREVIOUS ARROW */

    prevButton.addEventListener("click", function () {

        roomTrack.scrollBy({
            left: -roomTrack.clientWidth,
            behavior: "smooth"
        });

    });

}