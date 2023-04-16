from backend import app
from flask import jsonify
from http import HTTPStatus


# Error Handling
@app.errorhandler(404)
def page_not_found(e):
  return jsonify(
    {
      "msg": str(e),
      "status": HTTPStatus.NOT_FOUND
    }
  ), HTTPStatus.NOT_FOUND


@app.errorhandler(405)
def method_not_allowed(e):
  return jsonify(
    {
      "msg": str(e),
      "status": HTTPStatus.METHOD_NOT_ALLOWED
    }
  ), HTTPStatus.METHOD_NOT_ALLOWED


# Default Page
@app.route("/")
def index():
  return jsonify(
    {
      "author": "Debjit Sadhukhan",
      "msg": "This API endpoint is created for the Full-stack Code Test for SQSE (India) Position",   # noqa
      "status": HTTPStatus.OK
    }
  ), HTTPStatus.OK
