import os
from flask import Flask, jsonify
from flask_cors import CORS


# Set the environment variable
os.environ["FLASK_ENV"] = "development"

app = Flask(__name__)
CORS(app)

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"



# Main block for local development
if __name__ == "__main__":
    app.run(debug=True)

# # This ensures the app is discoverable by Flask when run as a module
# if __name__ != "__main__":
#     from werkzeug.middleware.dispatcher import DispatcherMiddleware

#     def create_app():
#         return app

#     app = DispatcherMiddleware(app, {
#         '/api/python': create_app()
#     })
