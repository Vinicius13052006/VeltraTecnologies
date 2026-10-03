/* =========================
   VELTRA TECHNOLOGIES
   SCRIPT PRINCIPAL
========================= */


/* =========================
   LOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hidden");
        }

    }, 1800);

});


/* =========================
   SCROLL REVEAL
========================= */

const motionObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    "motion-visible"
                );

                motionObserver.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold: 0.12
    }

);


document
    .querySelectorAll("main > section:not(.hero)")
    .forEach((section, index) => {

        section.classList.add(
            "motion-reveal"
        );

        section.style.transitionDelay =
            Math.min(index * 70, 280) + "ms";

        motionObserver.observe(section);

    });


/* =========================
   MOUSE LIGHT
   Desktop
========================= */

window.addEventListener(
    "pointermove",
    (event) => {

        document.documentElement.style.setProperty(
            "--mx",
            event.clientX + "px"
        );

        document.documentElement.style.setProperty(
            "--my",
            event.clientY + "px"
        );

    }
);


/* =========================
   SUAVIDADE NO SCROLL
========================= */

let lastScroll = 0;

window.addEventListener(
    "scroll",
    () => {

        const currentScroll =
            window.scrollY;

        if (
            Math.abs(currentScroll - lastScroll) > 8
        ) {

            lastScroll = currentScroll;

        }

    },
    {
        passive: true
    }
);


