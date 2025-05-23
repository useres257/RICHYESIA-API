from flask import Blueprint, jsonify, request, render_template
from src.models.database import db
from src.models.models import Estilo, ComandoLirico, EfectoAudio, TecnicaVocal, EstructuraCancion, Letra, Proyecto, ProyectoLetra, ReferenciaHistorica
import json

api_bp = Blueprint('api', __name__)

# Rutas para Estilos Musicales
@api_bp.route('/estilos', methods=['GET'])
def get_estilos():
    estilos = Estilo.query.all()
    result = []
    for estilo in estilos:
        result.append({
            'id': estilo.id,
            'nombre': estilo.nombre,
            'descripcion': estilo.descripcion,
            'artistas_representativos': estilo.artistas_representativos
        })
    return jsonify(result)

@api_bp.route('/estilos/<int:id>', methods=['GET'])
def get_estilo(id):
    estilo = Estilo.query.get_or_404(id)
    return jsonify({
        'id': estilo.id,
        'nombre': estilo.nombre,
        'descripcion': estilo.descripcion,
        'artistas_representativos': estilo.artistas_representativos
    })

# Rutas para Comandos Líricos
@api_bp.route('/comandos-liricos', methods=['GET'])
def get_comandos_liricos():
    comandos = ComandoLirico.query.all()
    result = []
    for comando in comandos:
        result.append({
            'id': comando.id,
            'nombre': comando.nombre,
            'descripcion': comando.descripcion,
            'ejemplo': comando.ejemplo
        })
    return jsonify(result)

# Rutas para Efectos de Audio
@api_bp.route('/efectos-audio', methods=['GET'])
def get_efectos_audio():
    efectos = EfectoAudio.query.all()
    result = []
    for efecto in efectos:
        result.append({
            'id': efecto.id,
            'nombre': efecto.nombre,
            'descripcion': efecto.descripcion,
            'categoria': efecto.categoria,
            'usabilidad': efecto.usabilidad,
            'ruta_audio': efecto.ruta_audio
        })
    return jsonify(result)

# Rutas para Técnicas Vocales
@api_bp.route('/tecnicas-vocales', methods=['GET'])
def get_tecnicas_vocales():
    tecnicas = TecnicaVocal.query.all()
    result = []
    for tecnica in tecnicas:
        result.append({
            'id': tecnica.id,
            'nombre': tecnica.nombre,
            'descripcion': tecnica.descripcion,
            'ejemplo_artista': tecnica.ejemplo_artista,
            'ruta_audio': tecnica.ruta_audio
        })
    return jsonify(result)

# Rutas para Estructuras de Canciones
@api_bp.route('/estructuras', methods=['GET'])
def get_estructuras():
    estructuras = EstructuraCancion.query.all()
    result = []
    for estructura in estructuras:
        result.append({
            'id': estructura.id,
            'nombre': estructura.nombre,
            'descripcion': estructura.descripcion,
            'elementos': estructura.elementos
        })
    return jsonify(result)

# Rutas para Letras
@api_bp.route('/letras', methods=['GET'])
def get_letras():
    letras = Letra.query.all()
    result = []
    for letra in letras:
        result.append({
            'id': letra.id,
            'titulo': letra.titulo,
            'contenido': letra.contenido,
            'estilo_id': letra.estilo_id,
            'estructura_id': letra.estructura_id,
            'fecha_creacion': letra.fecha_creacion.strftime('%Y-%m-%d %H:%M:%S'),
            'prompt_usado': letra.prompt_usado
        })
    return jsonify(result)

@api_bp.route('/letras', methods=['POST'])
def create_letra():
    data = request.json
    nueva_letra = Letra(
        titulo=data['titulo'],
        contenido=data['contenido'],
        estilo_id=data.get('estilo_id'),
        estructura_id=data.get('estructura_id'),
        prompt_usado=data.get('prompt_usado')
    )
    db.session.add(nueva_letra)
    db.session.commit()
    return jsonify({
        'id': nueva_letra.id,
        'titulo': nueva_letra.titulo,
        'mensaje': 'Letra creada con éxito'
    }), 201

@api_bp.route('/letras/<int:id>', methods=['PUT'])
def update_letra(id):
    letra = Letra.query.get_or_404(id)
    data = request.json
    
    letra.titulo = data.get('titulo', letra.titulo)
    letra.contenido = data.get('contenido', letra.contenido)
    letra.estilo_id = data.get('estilo_id', letra.estilo_id)
    letra.estructura_id = data.get('estructura_id', letra.estructura_id)
    letra.prompt_usado = data.get('prompt_usado', letra.prompt_usado)
    
    db.session.commit()
    return jsonify({
        'id': letra.id,
        'titulo': letra.titulo,
        'mensaje': 'Letra actualizada con éxito'
    })

# Ruta para generar letras con IA
@api_bp.route('/generar-letra', methods=['POST'])
def generar_letra():
    data = request.json
    prompt = data.get('prompt', '')
    estilo = data.get('estilo', '')
    tema = data.get('tema', '')
    estructura = data.get('estructura', '')
    
    # Aquí iría la lógica para generar la letra con IA
    # Por ahora, devolvemos una respuesta simulada
    letra_generada = {
        'titulo': f'Canción sobre {tema}',
        'contenido': f'[Letra generada para el tema: {tema} en estilo {estilo} con estructura {estructura}]',
        'prompt_usado': prompt
    }
    
    return jsonify(letra_generada)

# Rutas para Proyectos
@api_bp.route('/proyectos', methods=['GET'])
def get_proyectos():
    proyectos = Proyecto.query.all()
    result = []
    for proyecto in proyectos:
        result.append({
            'id': proyecto.id,
            'nombre': proyecto.nombre,
            'descripcion': proyecto.descripcion,
            'fecha_creacion': proyecto.fecha_creacion.strftime('%Y-%m-%d %H:%M:%S')
        })
    return jsonify(result)

@api_bp.route('/proyectos', methods=['POST'])
def create_proyecto():
    data = request.json
    nuevo_proyecto = Proyecto(
        nombre=data['nombre'],
        descripcion=data.get('descripcion', '')
    )
    db.session.add(nuevo_proyecto)
    db.session.commit()
    return jsonify({
        'id': nuevo_proyecto.id,
        'nombre': nuevo_proyecto.nombre,
        'mensaje': 'Proyecto creado con éxito'
    }), 201

# Rutas para Referencias Históricas
@api_bp.route('/referencias-historicas', methods=['GET'])
def get_referencias():
    referencias = ReferenciaHistorica.query.all()
    result = []
    for referencia in referencias:
        result.append({
            'id': referencia.id,
            'nombre': referencia.nombre,
            'descripcion': referencia.descripcion,
            'tipo': referencia.tipo
        })
    return jsonify(result)

# Ruta para cargar datos iniciales desde el Excel
@api_bp.route('/cargar-datos-excel', methods=['POST'])
def cargar_datos_excel():
    # Aquí iría la lógica para cargar los datos del Excel a la base de datos
    # Por ahora, devolvemos una respuesta simulada
    return jsonify({
        'mensaje': 'Datos cargados con éxito',
        'registros_procesados': {
            'estilos': 10,
            'comandos_liricos': 15,
            'efectos_audio': 30,
            'tecnicas_vocales': 20,
            'estructuras': 5,
            'referencias_historicas': 25
        }
    })
