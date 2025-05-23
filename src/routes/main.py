from flask import Blueprint, render_template, redirect, url_for

main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    return render_template('index.html')

@main_bp.route('/letras')
def letras():
    return render_template('letras.html')

@main_bp.route('/efectos')
def efectos():
    return render_template('efectos.html')

@main_bp.route('/estilos')
def estilos():
    return render_template('estilos.html')

@main_bp.route('/tecnicas-vocales')
def tecnicas_vocales():
    return render_template('tecnicas_vocales.html')

@main_bp.route('/estructuras')
def estructuras():
    return render_template('estructuras.html')

@main_bp.route('/referencias')
def referencias():
    return render_template('referencias.html')

@main_bp.route('/proyectos')
def proyectos():
    return render_template('proyectos.html')

@main_bp.route('/editor-letras')
def editor_letras():
    return render_template('editor_letras.html')

@main_bp.route('/editor-letras/<int:id>')
def editar_letra(id):
    return render_template('editor_letras.html', letra_id=id)

@main_bp.route('/generador-letras')
def generador_letras():
    return render_template('generador_letras.html')
