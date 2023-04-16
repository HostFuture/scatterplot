from flask import Flask
from backend.views import visualize_api


# Defining Flask Application
app = Flask(__name__)

# Registering Endpoints
app.register_blueprint(visualize_api)
