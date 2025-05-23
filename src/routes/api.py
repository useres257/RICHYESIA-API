import os
import requests
from flask import Blueprint, jsonify, request

try:
    import openai
except ImportError:
    openai = None

api_bp = Blueprint('api', __name__)

@api_bp.route('/generar-letra', methods=['POST'])
def generar_letra():
    data = request.json
    prompt = data.get('prompt', '')
    estilo = data.get('estilo', '')
    tema = data.get('tema', '')
    estructura = data.get('estructura', '')
    ia = data.get('ia', 'openai').lower()  # Por defecto: OpenAI

    prompt_ia = (
        f"Escribe la letra de una canción de estilo {estilo} sobre '{tema}' con esta estructura: {estructura}. {prompt}"
    )

    letra = ""
    error_ia = ""

    # ---------- 1. OpenAI (ChatGPT) -------------
    if ia == "openai":
        if openai is None:
            error_ia = "La librería openai no está instalada."
        else:
            openai.api_key = os.getenv("OPENAI_API_KEY")
            if not openai.api_key:
                error_ia = "No se encontró la variable de entorno OPENAI_API_KEY."
            else:
                try:
                    respuesta = openai.ChatCompletion.create(
                        model="gpt-3.5-turbo",
                        messages=[
                            {"role": "system", "content": "Eres un compositor profesional de canciones."},
                            {"role": "user", "content": prompt_ia}
                        ],
                        max_tokens=800,
                        temperature=0.8
                    )
                    letra = respuesta.choices[0].message.content.strip()
                except Exception as e:
                    error_ia = f"Error con OpenAI: {str(e)}"

    # ---------- 2. DeepSeek -----------
    elif ia == "deepseek":
        api_key = os.getenv("DEEPSEEK_API_KEY")
        if not api_key:
            error_ia = "No se encontró la variable de entorno DEEPSEEK_API_KEY."
        else:
            try:
                url = "https://api.deepseek.com/v1/chat/completions"
                headers = {
                    "Authorization": f"Bearer {api_key}",
                    "Content-Type": "application/json"
                }
                payload = {
                    "model": "deepseek-chat",
                    "messages": [
                        {"role": "system", "content": "Eres un compositor profesional de canciones."},
                        {"role": "user", "content": prompt_ia}
                    ],
                    "max_tokens": 800,
                    "temperature": 0.8
                }
                r = requests.post(url, headers=headers, json=payload, timeout=60)
                r.raise_for_status()
                respuesta = r.json()
                letra = respuesta["choices"][0]["message"]["content"].strip()
            except Exception as e:
                error_ia = f"Error con DeepSeek: {str(e)}"
    else:
        error_ia = "IA no soportada. Usa 'openai' o 'deepseek'."

    if error_ia:
        letra = f"[{error_ia}]"

    letra_generada = {
        "titulo": f"Canción sobre {tema}",
        "contenido": letra,
        "prompt_usado": prompt,
        "ia_utilizada": ia
    }

    return jsonify(letra_generada)