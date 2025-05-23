// Script para manejar la paginación en la sección de estilos musicales

// Datos de ejemplo para diferentes estilos musicales (simulando datos de backend)
const todosLosEstilos = [
    // Página 1
    [
        {
            nombre: "Rock Alternativo",
            etiquetas: ["Rock", "Alternativo", "Indie"],
            descripcion: "Fusión de rock tradicional con elementos experimentales y sonidos modernos.",
            caracteristicas: [
                "Guitarras distorsionadas con efectos",
                "Estructuras no convencionales",
                "Letras introspectivas o sociales",
                "Mezcla de instrumentación tradicional y electrónica"
            ],
            artistas: ["Arctic Monkeys", "Tame Impala", "The 1975", "Twenty One Pilots"],
            comandos: [
                "[alternative rock guitars]",
                "[indie rock production]",
                "[distorted guitar riffs]"
            ],
            imagen: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop"
        },
        {
            nombre: "Pop Contemporáneo",
            etiquetas: ["Pop", "Vocal", "Comercial"],
            descripcion: "Música comercial moderna con influencias electrónicas y producción digital avanzada.",
            caracteristicas: [
                "Estructura verso-coro-verso-coro-puente-coro",
                "Melodías pegadizas y memorables",
                "Producción digital pulida",
                "Influencias de múltiples géneros"
            ],
            artistas: ["Billie Eilish", "Taylor Swift", "The Weeknd", "Dua Lipa"],
            comandos: [
                "[pop production]",
                "[catchy chorus]",
                "[modern pop vocals]"
            ],
            imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop"
        },
        {
            nombre: "Hip-Hop Moderno",
            etiquetas: ["Hip-Hop", "Trap", "Urbano"],
            descripcion: "Estilo urbano con beats trap, 808s y flow melódico con influencias de múltiples géneros.",
            caracteristicas: [
                "Beats con 808s y hi-hats rápidos",
                "Autotune y efectos vocales",
                "Mezcla de rap y canto melódico",
                "Producción atmosférica y espacial"
            ],
            artistas: ["Travis Scott", "Drake", "Kendrick Lamar", "J. Cole"],
            comandos: [
                "[trap beat]",
                "[808 bass]",
                "[melodic rap flow]"
            ],
            imagen: "https://images.unsplash.com/photo-1571609803595-eab98eab81fb?q=80&w=1935&auto=format&fit=crop"
        }
    ],
    // Página 2
    [
        {
            nombre: "Urbano Latino",
            etiquetas: ["Latina", "Reggaeton", "Urbano"],
            descripcion: "Fusión de reggaeton, trap latino y pop con ritmos bailables y producción moderna.",
            caracteristicas: [
                "Ritmo \"dembow\" característico",
                "Mezcla de español e inglés",
                "Influencias de trap y hip-hop",
                "Melodías pegadizas y bailables"
            ],
            artistas: ["Bad Bunny", "J Balvin", "Rosalía", "Karol G"],
            comandos: [
                "[reggaeton beat]",
                "[latin urban]",
                "[dembow rhythm]"
            ],
            imagen: "https://images.unsplash.com/photo-1504704911898-68304a7d2807?q=80&w=2070&auto=format&fit=crop"
        },
        {
            nombre: "Electrónica Contemporánea",
            etiquetas: ["Electrónica", "EDM", "House"],
            descripcion: "Música electrónica con énfasis en ritmos bailables, drops energéticos y producción digital avanzada.",
            caracteristicas: [
                "Estructura intro-build up-drop-breakdown",
                "Sintetizadores prominentes",
                "Ritmos de cuatro por cuatro",
                "Efectos y transiciones elaboradas"
            ],
            artistas: ["Calvin Harris", "Martin Garrix", "Daft Punk", "Zedd"],
            comandos: [
                "[edm drop]",
                "[house beat]",
                "[electronic synths]"
            ],
            imagen: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop"
        },
        {
            nombre: "R&B Moderno",
            etiquetas: ["R&B", "Soul", "Alternativo"],
            descripcion: "Evolución del R&B tradicional con elementos de hip-hop, electrónica y producción atmosférica.",
            caracteristicas: [
                "Voces emotivas con armonías complejas",
                "Ritmos sincopados y grooves",
                "Producción minimalista pero detallada",
                "Letras personales y emotivas"
            ],
            artistas: ["Frank Ocean", "SZA", "Daniel Caesar", "H.E.R."],
            comandos: [
                "[modern rnb]",
                "[soul vocals]",
                "[atmospheric production]"
            ],
            imagen: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop"
        }
    ],
    // Página 3
    [
        {
            nombre: "Indie Folk",
            etiquetas: ["Folk/Acústica", "Indie", "Acústico"],
            descripcion: "Música folk contemporánea con influencias indie y arreglos acústicos íntimos.",
            caracteristicas: [
                "Instrumentación acústica (guitarra, banjo, mandolina)",
                "Armonías vocales y coros",
                "Letras narrativas y poéticas",
                "Producción orgánica y cálida"
            ],
            artistas: ["Bon Iver", "Fleet Foxes", "Mumford & Sons", "The Lumineers"],
            comandos: [
                "[indie folk acoustic]",
                "[warm vocal harmonies]",
                "[organic production]"
            ],
            imagen: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop"
        },
        {
            nombre: "Jazz Contemporáneo",
            etiquetas: ["Jazz", "Fusión", "Neo-Soul"],
            descripcion: "Evolución moderna del jazz con elementos de hip-hop, R&B y música electrónica.",
            caracteristicas: [
                "Improvisación y virtuosismo instrumental",
                "Ritmos complejos y cambios de tiempo",
                "Influencias de hip-hop y neo-soul",
                "Armonías sofisticadas y disonantes"
            ],
            artistas: ["Robert Glasper", "Kamasi Washington", "Thundercat", "Jacob Collier"],
            comandos: [
                "[contemporary jazz]",
                "[neo soul elements]",
                "[complex harmonies]"
            ],
            imagen: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=2070&auto=format&fit=crop"
        },
        {
            nombre: "Synthwave / Retrowave",
            etiquetas: ["Electrónica", "80s", "Retro"],
            descripcion: "Género electrónico inspirado en la música y cultura de los años 80, con sintetizadores analógicos y estética retro-futurista.",
            caracteristicas: [
                "Sintetizadores analógicos y arpegiadores",
                "Baterías electrónicas con reverb",
                "Melodías nostálgicas y atmosféricas",
                "Estética inspirada en los 80s"
            ],
            artistas: ["The Midnight", "Kavinsky", "Perturbator", "FM-84"],
            comandos: [
                "[synthwave production]",
                "[80s synths]",
                "[retro electronic]"
            ],
            imagen: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop"
        }
    ]
];

// Inicializar la página cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Variables para la paginación
    let paginaActual = 0;
    const totalPaginas = todosLosEstilos.length;
    
    // Elementos DOM
    const estilosContainer = document.getElementById('estilos-container');
    const paginacionAnterior = document.getElementById('paginacion-anterior');
    const paginacionSiguiente = document.getElementById('paginacion-siguiente');
    const paginacionNumeros = document.querySelectorAll('.paginacion-numero');
    const listaComandos = document.getElementById('lista-comandos');
    const comandosSeleccionados = [];
    
    // Función para crear una tarjeta de estilo
    function crearTarjetaEstilo(estilo) {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'estilo-card';
        tarjeta.setAttribute('data-estilo', estilo.nombre);
        
        // Crear el encabezado con la imagen de fondo
        const encabezado = document.createElement('div');
        encabezado.className = 'estilo-header';
        encabezado.style.backgroundImage = `url(${estilo.imagen})`;
        
        const titulo = document.createElement('h3');
        titulo.textContent = estilo.nombre;
        encabezado.appendChild(titulo);
        
        // Crear el cuerpo de la tarjeta
        const cuerpo = document.createElement('div');
        cuerpo.className = 'estilo-body';
        
        const descripcion = document.createElement('p');
        descripcion.textContent = estilo.descripcion;
        cuerpo.appendChild(descripcion);
        
        // Añadir etiquetas
        const etiquetas = document.createElement('div');
        etiquetas.className = 'estilo-tags';
        
        estilo.etiquetas.forEach(tag => {
            const etiqueta = document.createElement('span');
            etiqueta.className = 'tag';
            // Añadir clase específica para estilos de color
            if (tag.toLowerCase() === 'rock') etiqueta.classList.add('rock');
            if (tag.toLowerCase() === 'pop') etiqueta.classList.add('pop');
            if (tag.toLowerCase().includes('hip-hop')) etiqueta.classList.add('hip-hop');
            if (tag.toLowerCase().includes('electrónica')) etiqueta.classList.add('electronica');
            if (tag.toLowerCase() === 'latina') etiqueta.classList.add('latina');
            if (tag.toLowerCase() === 'r&b') etiqueta.classList.add('rnb');
            if (tag.toLowerCase() === 'jazz') etiqueta.classList.add('jazz');
            if (tag.toLowerCase().includes('folk')) etiqueta.classList.add('folk');
            
            etiqueta.textContent = tag;
            etiquetas.appendChild(etiqueta);
        });
        
        cuerpo.appendChild(etiquetas);
        
        // Añadir características
        const caracteristicasTitulo = document.createElement('h4');
        caracteristicasTitulo.textContent = 'Características:';
        cuerpo.appendChild(caracteristicasTitulo);
        
        const caracteristicasLista = document.createElement('ul');
        estilo.caracteristicas.forEach(caracteristica => {
            const item = document.createElement('li');
            item.textContent = caracteristica;
            caracteristicasLista.appendChild(item);
        });
        
        cuerpo.appendChild(caracteristicasLista);
        
        // Añadir artistas
        const artistasTitulo = document.createElement('h4');
        artistasTitulo.textContent = 'Artistas representativos:';
        cuerpo.appendChild(artistasTitulo);
        
        const artistasContainer = document.createElement('div');
        artistasContainer.className = 'artistas-container';
        
        estilo.artistas.forEach(artista => {
            const artistaTag = document.createElement('span');
            artistaTag.className = 'artista-tag';
            artistaTag.textContent = artista;
            artistasContainer.appendChild(artistaTag);
        });
        
        cuerpo.appendChild(artistasContainer);
        
        // Añadir comandos
        const comandosTitulo = document.createElement('h4');
        comandosTitulo.textContent = 'Comandos para Suno:';
        cuerpo.appendChild(comandosTitulo);
        
        const comandosContainer = document.createElement('div');
        comandosContainer.className = 'comandos-container';
        
        estilo.comandos.forEach(comando => {
            const comandoItem = document.createElement('div');
            comandoItem.className = 'comando-item';
            
            const btnAnadirComando = document.createElement('button');
            btnAnadirComando.className = 'btn-anadir-comando';
            btnAnadirComando.setAttribute('data-comando', comando);
            btnAnadirComando.innerHTML = '<i class="fas fa-plus-circle"></i>';
            
            const comandoTexto = document.createElement('code');
            comandoTexto.textContent = comando;
            
            comandoItem.appendChild(btnAnadirComando);
            comandoItem.appendChild(comandoTexto);
            comandosContainer.appendChild(comandoItem);
        });
        
        cuerpo.appendChild(comandosContainer);
        
        // Añadir botones de acción
        const botonesContainer = document.createElement('div');
        botonesContainer.className = 'botones-container';
        
        const btnVerDetalles = document.createElement('button');
        btnVerDetalles.className = 'btn btn-ver-detalles';
        btnVerDetalles.setAttribute('data-estilo', estilo.nombre);
        btnVerDetalles.innerHTML = '<i class="fas fa-info-circle"></i> Ver detalles';
        
        const btnAnadirTodos = document.createElement('button');
        btnAnadirTodos.className = 'btn btn-anadir-comandos';
        btnAnadirTodos.setAttribute('data-estilo', estilo.nombre);
        btnAnadirTodos.innerHTML = '<i class="fas fa-plus"></i> Añadir todos los comandos';
        
        botonesContainer.appendChild(btnVerDetalles);
        botonesContainer.appendChild(btnAnadirTodos);
        
        cuerpo.appendChild(botonesContainer);
        
        // Ensamblar la tarjeta
        tarjeta.appendChild(encabezado);
        tarjeta.appendChild(cuerpo);
        
        return tarjeta;
    }
    
    // Función para mostrar los estilos de la página actual
    function mostrarPagina(pagina) {
        // Limpiar el contenedor
        estilosContainer.innerHTML = '';
        
        // Obtener los estilos de la página actual
        const estilos = todosLosEstilos[pagina];
        
        // Crear y añadir las tarjetas de estilo
        estilos.forEach(estilo => {
            const tarjetaEstilo = crearTarjetaEstilo(estilo);
            estilosContainer.appendChild(tarjetaEstilo);
        });
        
        // Actualizar estado de los botones de paginación
        paginacionAnterior.classList.toggle('disabled', pagina === 0);
        paginacionSiguiente.classList.toggle('disabled', pagina === totalPaginas - 1);
        
        // Actualizar clase activa en números de página
        paginacionNumeros.forEach((num, index) => {
            num.classList.toggle('active', index === pagina);
        });
        
        // Actualizar página actual
        paginaActual = pagina;
        
        // Añadir event listeners a los botones de cada tarjeta
        agregarEventListeners();
    }
    
    // Función para añadir event listeners a los elementos dinámicos
    function agregarEventListeners() {
        // Event listeners para botones de añadir comando individual
        document.querySelectorAll('.btn-anadir-comando').forEach(btn => {
            btn.addEventListener('click', function() {
                const comando = this.getAttribute('data-comando');
                anadirComando(comando);
            });
        });
        
        // Event listeners para botones de añadir todos los comandos
        document.querySelectorAll('.btn-anadir-comandos').forEach(btn => {
            btn.addEventListener('click', function() {
                const estiloNombre = this.getAttribute('data-estilo');
                anadirTodosLosComandos(estiloNombre);
            });
        });
        
        // Event listeners para botones de ver detalles
        document.querySelectorAll('.btn-ver-detalles').forEach(btn => {
            btn.addEventListener('click', function() {
                const estiloNombre = this.getAttribute('data-estilo');
                mostrarDetallesEstilo(estiloNombre);
            });
        });
    }
    
    // Función para añadir un comando a la lista de seleccionados
    function anadirComando(comando) {
        if (!comandosSeleccionados.includes(comando)) {
            comandosSeleccionados.push(comando);
            actualizarListaComandos();
            mostrarNotificacion('Comando añadido', 'success');
        } else {
            mostrarNotificacion('Este comando ya está en tu lista', 'info');
        }
    }
    
    // Función para añadir todos los comandos de un estilo
    function anadirTodosLosComandos(estiloNombre) {
        // Buscar el estilo en todas las páginas
        let estilo = null;
        for (let i = 0; i < todosLosEstilos.length; i++) {
            estilo = todosLosEstilos[i].find(e => e.nombre === estiloNombre);
            if (estilo) break;
        }
        
        if (!estilo) return;
        
        let nuevosComandos = 0;
        estilo.comandos.forEach(comando => {
            if (!comandosSeleccionados.includes(comando)) {
                comandosSeleccionados.push(comando);
                nuevosComandos++;
            }
        });
        
        actualizarListaComandos();
        if (nuevosComandos > 0) {
            mostrarNotificacion(`${nuevosComandos} comandos añadidos`, 'success');
        } else {
            mostrarNotificacion('Estos comandos ya están en tu lista', 'info');
        }
    }
    
    // Función para actualizar la lista de comandos seleccionados
    function actualizarListaComandos() {
        if (comandosSeleccionados.length === 0) {
            listaComandos.innerHTML = '<p>Selecciona comandos de estilo para verlos aquí</p>';
        } else {
            listaComandos.innerHTML = comandosSeleccionados.map(cmd => `<div>${cmd}</div>`).join('');
        }
    }
    
    // Función para mostrar detalles de un estilo
    function mostrarDetallesEstilo(estiloNombre) {
        // Buscar el estilo en todas las páginas
        let estilo = null;
        for (let i = 0; i < todosLosEstilos.length; i++) {
            estilo = todosLosEstilos[i].find(e => e.nombre === estiloNombre);
            if (estilo) break;
        }
        
        if (!estilo) return;
        
        // Aquí se implementaría la lógica para mostrar detalles completos
        // Por ahora, solo mostramos una notificación
        mostrarNotificacion(`Detalles de ${estiloNombre} (Funcionalidad en desarrollo)`, 'info');
    }
    
    // Función para mostrar notificaciones
    function mostrarNotificacion(mensaje, tipo) {
        const notificacion = document.getElementById('notificacion');
        notificacion.textContent = mensaje;
        notificacion.className = 'notificacion';
        notificacion.classList.add(tipo);
        notificacion.classList.add('show');
        
        setTimeout(() => {
            notificacion.classList.remove('show');
        }, 3000);
    }
    
    // Event listeners para la paginación
    paginacionAnterior.addEventListener('click', function(e) {
        e.preventDefault();
        if (paginaActual > 0) {
            mostrarPagina(paginaActual - 1);
        }
    });
    
    paginacionSiguiente.addEventListener('click', function(e) {
        e.preventDefault();
        if (paginaActual < totalPaginas - 1) {
            mostrarPagina(paginaActual + 1);
        }
    });
    
    paginacionNumeros.forEach((num, index) => {
        num.addEventListener('click', function(e) {
            e.preventDefault();
            mostrarPagina(index);
        });
    });
    
    // Event listener para copiar comandos
    document.getElementById('copiar-comandos').addEventListener('click', function() {
        if (comandosSeleccionados.length === 0) {
            mostrarNotificacion('No hay comandos para copiar', 'error');
            return;
        }
        
        const texto = comandosSeleccionados.join('\n');
        navigator.clipboard.writeText(texto).then(() => {
            mostrarNotificacion('Comandos copiados al portapapeles', 'success');
        }).catch(err => {
            console.error('Error al copiar: ', err);
            mostrarNotificacion('Error al copiar comandos', 'error');
        });
    });
    
    // Event listener para guardar preset
    document.getElementById('guardar-preset').addEventListener('click', function() {
        if (comandosSeleccionados.length === 0) {
            mostrarNotificacion('No hay comandos para guardar', 'error');
            return;
        }
        
        // Aquí se implementaría la lógica para guardar presets
        // Por ahora, solo mostramos una notificación
        mostrarNotificacion('Preset guardado correctamente (Funcionalidad en desarrollo)', 'success');
    });
    
    // Event listeners para filtros
    const btnBuscar = document.getElementById('btn-buscar');
    const inputBuscar = document.getElementById('buscar-estilo');
    
    btnBuscar.addEventListener('click', function() {
        const termino = inputBuscar.value.toLowerCase().trim();
        if (termino === '') {
            mostrarPagina(paginaActual);
            return;
        }
        
        // Buscar en todas las páginas
        let resultados = [];
        
        todosLosEstilos.forEach(pagina => {
            pagina.forEach(estilo => {
                if (estilo.nombre.toLowerCase().includes(termino) || 
                    estilo.descripcion.toLowerCase().includes(termino) || 
                    estilo.etiquetas.some(tag => tag.toLowerCase().includes(termino))) {
                    resultados.push(estilo);
                }
            });
        });
        
        if (resultados.length === 0) {
            mostrarNotificacion('No se encontraron estilos que coincidan con la búsqueda', 'info');
            return;
        }
        
        // Mostrar resultados
        estilosContainer.innerHTML = '';
        resultados.forEach(estilo => {
            const tarjetaEstilo = crearTarjetaEstilo(estilo);
            estilosContainer.appendChild(tarjetaEstilo);
        });
        
        agregarEventListeners();
        mostrarNotificacion(`Se encontraron ${resultados.length} estilos`, 'success');
    });
    
    // Event listener para aplicar filtros
    document.getElementById('aplicar-filtros').addEventListener('click', function() {
        const categorias = Array.from(document.querySelectorAll('.filtro-grupo input[type="checkbox"]:checked')).map(cb => cb.value);
        
        if (categorias.length === 0) {
            mostrarPagina(paginaActual);
            return;
        }
        
        // Buscar en todas las páginas
        let resultados = [];
        
        todosLosEstilos.forEach(pagina => {
            pagina.forEach(estilo => {
                if (estilo.etiquetas.some(tag => categorias.includes(tag) || categorias.some(cat => tag.includes(cat)))) {
                    resultados.push(estilo);
                }
            });
        });
        
        if (resultados.length === 0) {
            mostrarNotificacion('No se encontraron estilos que coincidan con los filtros', 'info');
            return;
        }
        
        // Mostrar resultados
        estilosContainer.innerHTML = '';
        resultados.forEach(estilo => {
            const tarjetaEstilo = crearTarjetaEstilo(estilo);
            estilosContainer.appendChild(tarjetaEstilo);
        });
        
        agregarEventListeners();
        mostrarNotificacion(`Se encontraron ${resultados.length} estilos`, 'success');
    });
    
    // Event listener para restablecer filtros
    document.getElementById('restablecer-filtros').addEventListener('click', function() {
        document.querySelectorAll('.filtro-grupo input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
        });
        inputBuscar.value = '';
        mostrarPagina(paginaActual);
        mostrarNotificacion('Filtros restablecidos', 'info');
    });
    
    // Event listener para etiquetas populares
    document.querySelectorAll('.etiquetas-populares .tag').forEach(tag => {
        tag.addEventListener('click', function() {
            const filtro = this.getAttribute('data-filter');
            
            if (filtro === 'todos') {
                mostrarPagina(paginaActual);
                return;
            }
            
            // Buscar en todas las páginas
            let resultados = [];
            
            todosLosEstilos.forEach(pagina => {
                pagina.forEach(estilo => {
                    if (estilo.etiquetas.includes(filtro) || estilo.etiquetas.some(tag => tag.includes(filtro))) {
                        resultados.push(estilo);
                    }
                });
            });
            
            if (resultados.length === 0) {
                mostrarNotificacion(`No se encontraron estilos de ${filtro}`, 'info');
                return;
            }
            
            // Mostrar resultados
            estilosContainer.innerHTML = '';
            resultados.forEach(estilo => {
                const tarjetaEstilo = crearTarjetaEstilo(estilo);
                estilosContainer.appendChild(tarjetaEstilo);
            });
            
            agregarEventListeners();
            mostrarNotificacion(`Se encontraron ${resultados.length} estilos de ${filtro}`, 'success');
        });
    });
    
    // Inicializar mostrando la primera página
    mostrarPagina(0);
});
