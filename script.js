document.addEventListener("DOMContentLoaded", () => {

    /*
    ========================================
    LOADING SCREEN
    ========================================
    */

    const loader = document.getElementById("loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.classList.add("hidden");
            }

        }, 1800);

    });


    /*
    ========================================
    SMOOTH SCROLL
    ========================================
    */

    const links = document.querySelectorAll(
        'a[href^="#"]'
    );


    links.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");


            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /*
    ========================================
    ANIMAÇÃO DAS SEÇÕES
    ========================================
    */

    const sections =
        document.querySelectorAll("section");


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    sections.forEach(section => {

        observer.observe(section);

    });

});