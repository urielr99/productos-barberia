const WHATSAPP_PHONE = "5491156170042"; 

document.addEventListener("DOMContentLoaded", () => {
    const phoneDisplay = document.getElementById('phoneDisplay');
    if (phoneDisplay) {
        phoneDisplay.textContent = "+" + WHATSAPP_PHONE.replace(/(\d{2})(\d{1})(\d{2})(\d{4})(\d{4})/, "$1 $2 $3 $4-$5");
    }

    // LISTA DE PRODUCTOS 
    const productos = [
        {
            id: 1,
            nombre: "secadora",
            descripcion: "para secar pelo",
            precio: "$85.000",
            imagen: "https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2,
            nombre: "Set Tijeras",
            descripcion: "Tijera de corte",
            precio: "$45.500",
            imagen: "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3,
            nombre: "Navaja ",
            descripcion: "navajas",
            precio: "$22.000",
            imagen: "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4,
            nombre: "Gel  500ml",
            descripcion: "Gel ",
            precio: "$12.900",
            imagen: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5,
            nombre: "Capa de Corte",
            descripcion: "Capa extra grande .",
            precio: "$15.000",
            imagen: "https://images.unsplash.com/photo-1593726853243-d9f7831d8e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 6,
            nombre: "Cepillo",
            descripcion: "Especial para limpieza de degradados ",
            precio: "$8.500",
            imagen: "https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 7,
            nombre: "fijador",
            descripcion: "Fijación para el pelo.",
            precio: "$14.200",
            imagen: "https://images.unsplash.com/photo-1621607512214-68297480165e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 8,
            nombre: "cera para pelo",
            descripcion: "para peinaditos",
            precio: "$11.500",
            imagen: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        }
    ];

    const productsGrid = document.getElementById('productsGrid');
    const searchInput = document.getElementById('searchInput');
    const noResults = document.getElementById('noResults');

    // Función para renderizar los productos en la cuadrícula
    function renderProducts(productsList) {
        productsGrid.innerHTML = "";
        
        if (productsList.length === 0) {
            noResults.style.display = "block";
            return;
        } else {
            noResults.style.display = "none";
        }

        productsList.forEach(prod => {
            // Crear el mensaje personalizado para WhatsApp
            const mensajeText = `Hola, me interesa comprar el producto: *${prod.nombre}* (${prod.precio}). ¿Tienen stock disponible?`;
            const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(mensajeText)}`;

            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="image-container">
                    <img src="${prod.imagen}" alt="${prod.nombre}" class="product-img">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${prod.nombre}</h3>
                    <p class="product-desc">${prod.descripcion}</p>
                    <div class="product-price">${prod.precio}</div>
                    <a href="${whatsappUrl}" target="_blank" class="btn-order">
                        <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Consulta por WhatsApp
                    </a>
                </div>
            `;
            productsGrid.appendChild(card);
        });
    }


    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        const productosFiltrados = productos.filter(prod => 
            prod.nombre.toLowerCase().includes(searchTerm) || 
            prod.descripcion.toLowerCase().includes(searchTerm)
        );
        renderProducts(productosFiltrados);
    });

    renderProducts(productos);
});