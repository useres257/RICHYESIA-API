import os
from dotenv import load_dotenv
load_dotenv()
import sys
# DON'T CHANGE THIS !!!
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))
from flask import Flask, send_from_directory, render_template
from src.models.user import db
from src.routes.user import user_bp

app = Flask(__name__, static_folder=os.path.join(os.path.dirname(__file__), 'static'))
app.config['SECRET_KEY'] = 'asdf#FGSgvasgf$5$WGT'

app.register_blueprint(user_bp, url_prefix='/api')

# uncomment if you need to use database
# app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{os.getenv('DB_USERNAME', 'root')}:{os.getenv('DB_PASSWORD', 'password')}@{os.getenv('DB_HOST', 'localhost')}:{os.getenv('DB_PORT', '3306')}/{os.getenv('DB_NAME', 'mydb')}"
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db.init_app(app)
# with app.app_context():
#     db.create_all()

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/letras')
def letras():
    return send_from_directory(app.static_folder, 'letras.html')

@app.route('/efectos')
def efectos():
    return send_from_directory(app.static_folder, 'efectos.html')

@app.route('/estilos')
def estilos():
    return send_from_directory(app.static_folder, 'estilos.html')

@app.route('/estilos2')
def estilos2():
    return send_from_directory(app.static_folder, 'estilos2.html')

@app.route('/tecnicas-vocales')
def tecnicas_vocales():
    return send_from_directory(app.static_folder, 'tecnicas_vocales.html')

@app.route('/estructuras')
def estructuras():
    return send_from_directory(app.static_folder, 'estructuras.html')

@app.route('/estructura-cancion')
def estructura_cancion():
    return send_from_directory(app.static_folder, 'estructura_cancion.html')

@app.route('/referencias')
def referencias():
    return send_from_directory(app.static_folder, 'referencias.html')

@app.route('/proyectos')
def proyectos():
    return send_from_directory(app.static_folder, 'proyectos.html')

@app.route('/generador-letras')
def generador_letras():
    return send_from_directory(app.static_folder, 'generador_letras.html')

@app.route('/static/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

@app.route('/<path:path>')
def serve(path):
    static_folder_path = app.static_folder
    if static_folder_path is None:
            return "Static folder not configured", 404

    if path != "" and os.path.exists(os.path.join(static_folder_path, path)):
        return send_from_directory(static_folder_path, path)
    else:
        index_path = os.path.join(static_folder_path, 'index.html')
        if os.path.exists(index_path):
            return send_from_directory(static_folder_path, 'index.html')
        else:
            return "index.html not found", 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
