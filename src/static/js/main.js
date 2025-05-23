// Funcionalidad principal para la aplicación web de producción musical

// Función para manejar la reproducción de audio
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar reproductores de audio
    const playButtons = document.querySelectorAll('.play-btn');
    
    if (playButtons) {
        playButtons.forEach(button => {
            button.addEventListener('click', function() {
                const icon = this.querySelector('i');
                if (icon.classList.contains('bi-play-fill')) {
                    // Cambiar a pausa y simular reproducción
                    icon.classList.remove('bi-play-fill');
                    icon.classList.add('bi-pause-fill');
                    
                    // Simular progreso de reproducción
                    const progressBar = this.closest('.controls').querySelector('.progress-bar');
                    let width = 0;
                    const interval = setInterval(() => {
                        if (width >= 100) {
                            clearInterval(interval);
                            icon.classList.remove('bi-pause-fill');
                            icon.classList.add('bi-play-fill');
                            width = 0;
                            progressBar.style.width = '0%';
                        } else {
                            width += 1;
                            progressBar.style.width = width + '%';
                        }
                    }, 100);
                } else {
                    // Cambiar a reproducir
                    icon.classList.remove('bi-pause-fill');
                    icon.classList.add('bi-play-fill');
                }
            });
        });
    }
    
    // Manejar botones de acción
    const actionButtons = document.querySelectorAll('.btn-outline-primary, .btn-outline-success, .btn-outline-danger');
    
    if (actionButtons) {
        actionButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Mostrar mensaje de funcionalidad
                const toast = document.createElement('div');
                toast.className = 'position-fixed bottom-0 end-0 p-3';
                toast.style.zIndex = '11';
                
                toast.innerHTML = `
                    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <strong class="me-auto">Estudio Musical Virtual</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Esta funcionalidad estará disponible próximamente.
                        </div>
                    </div>
                `;
                
                document.body.appendChild(toast);
                
                // Eliminar después de 3 segundos
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 3000);
            });
        });
    }
    
    // Manejar formularios de búsqueda
    const searchForms = document.querySelectorAll('.input-group');
    
    if (searchForms) {
        searchForms.forEach(form => {
            const button = form.querySelector('button');
            if (button) {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Mostrar mensaje de búsqueda
                    const toast = document.createElement('div');
                    toast.className = 'position-fixed bottom-0 end-0 p-3';
                    toast.style.zIndex = '11';
                    
                    toast.innerHTML = `
                        <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="toast-header">
                                <strong class="me-auto">Estudio Musical Virtual</strong>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div class="toast-body">
                                Búsqueda en desarrollo. Estará disponible próximamente.
                            </div>
                        </div>
                    `;
                    
                    document.body.appendChild(toast);
                    
                    // Eliminar después de 3 segundos
                    setTimeout(() => {
                        document.body.removeChild(toast);
                    }, 3000);
                });
            }
        });
    }
    
    // Manejar enlaces de paginación
    const paginationLinks = document.querySelectorAll('.pagination .page-link');
    
    if (paginationLinks) {
        paginationLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                // No hacer nada si está deshabilitado
                if (this.parentElement.classList.contains('disabled') || 
                    this.parentElement.classList.contains('active')) {
                    return;
                }
                
                // Mostrar mensaje de paginación
                const toast = document.createElement('div');
                toast.className = 'position-fixed bottom-0 end-0 p-3';
                toast.style.zIndex = '11';
                
                toast.innerHTML = `
                    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="toast-header">
                            <strong class="me-auto">Estudio Musical Virtual</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div class="toast-body">
                            Paginación en desarrollo. Estará disponible próximamente.
                        </div>
                    </div>
                `;
                
                document.body.appendChild(toast);
                
                // Eliminar después de 3 segundos
                setTimeout(() => {
                    document.body.removeChild(toast);
                }, 3000);
            });
        });
    }
});
