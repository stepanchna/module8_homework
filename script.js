const loadBtn = document.getElementById("loadBtn");
        const gallery = document.getElementById("gallery");
        const loader = document.getElementById("loader");
        async function fetchImages() {
            loader.style.display = "block";
            gallery.innerHTML = "";
            try {
                const response = await fetch(
                    "https://dog.ceo/api/breeds/image/random/12"
                );
                const data = await response.json();

                data.message.forEach((url) => {
                    const img = document.createElement("img");
                    img.src = url;
                    img.alt = "Dog";
                    img.className = "gallery__image";
                    gallery.appendChild(img);
                });
            } catch (error) {
                console.error("Ошибка загрузки изображений:", error);
            } finally {
                loader.style.display = "none";
            }
        }
        loadBtn.addEventListener("click", (e) => {
            e.preventDefault();
            fetchImages();
        });