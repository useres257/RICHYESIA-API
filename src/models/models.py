from src.models.database import db

class Estilo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.Text)
    artistas_representativos = db.Column(db.Text)
    
    def __repr__(self):
        return f'<Estilo {self.nombre}>'

class ComandoLirico(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.Text)
    ejemplo = db.Column(db.Text)
    
    def __repr__(self):
        return f'<ComandoLirico {self.nombre}>'

class EfectoAudio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.Text)
    categoria = db.Column(db.String(100))
    usabilidad = db.Column(db.Integer)
    ruta_audio = db.Column(db.String(255))
    
    def __repr__(self):
        return f'<EfectoAudio {self.nombre}>'

class TecnicaVocal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.Text)
    ejemplo_artista = db.Column(db.String(255))
    ruta_audio = db.Column(db.String(255))
    
    def __repr__(self):
        return f'<TecnicaVocal {self.nombre}>'

class EstructuraCancion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.Text)
    elementos = db.Column(db.Text)
    
    def __repr__(self):
        return f'<EstructuraCancion {self.nombre}>'

class Letra(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(255), nullable=False)
    contenido = db.Column(db.Text)
    estilo_id = db.Column(db.Integer, db.ForeignKey('estilo.id'))
    estructura_id = db.Column(db.Integer, db.ForeignKey('estructura_cancion.id'))
    fecha_creacion = db.Column(db.DateTime, default=db.func.current_timestamp())
    prompt_usado = db.Column(db.Text)
    
    estilo = db.relationship('Estilo', backref='letras')
    estructura = db.relationship('EstructuraCancion', backref='letras')
    
    def __repr__(self):
        return f'<Letra {self.titulo}>'

class Proyecto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(255), nullable=False)
    descripcion = db.Column(db.Text)
    fecha_creacion = db.Column(db.DateTime, default=db.func.current_timestamp())
    
    def __repr__(self):
        return f'<Proyecto {self.nombre}>'

class ProyectoLetra(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    proyecto_id = db.Column(db.Integer, db.ForeignKey('proyecto.id'))
    letra_id = db.Column(db.Integer, db.ForeignKey('letra.id'))
    
    proyecto = db.relationship('Proyecto', backref='letras_asociadas')
    letra = db.relationship('Letra', backref='proyectos_asociados')
    
    def __repr__(self):
        return f'<ProyectoLetra {self.id}>'

class ReferenciaHistorica(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(255), nullable=False)
    descripcion = db.Column(db.Text)
    tipo = db.Column(db.String(100))  # cantante, trompetista, etc.
    
    def __repr__(self):
        return f'<ReferenciaHistorica {self.nombre}>'
