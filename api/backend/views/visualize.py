from scipy import stats
from http import HTTPStatus
import pandas as pd, numpy as np
from flask import Blueprint, jsonify, request
from sklearn.linear_model import LinearRegression


# Assigning paths to access the modules and functions
visualize_api = Blueprint("visualize", __name__, url_prefix="/api/visualize")

# Defining Routes and Functions
def generate_output(x, y):
  try:
    res = stats.linregress(x, y)
    scatter_df = pd.DataFrame(list(zip(x, y)), columns=["x", "y"])
    line_y = [(res.intercept + res.slope*a) for a in x]
    line_df = pd.DataFrame(list(zip(x, line_y)), columns=["x", "y"])

    return jsonify({
      "data": {
        "line": {
          "array": list(x),
          "labels": scatter_df.to_dict("records"),
        },
        "scatter": line_df.to_dict("records"),
      },
      "status": HTTPStatus.OK
    }), HTTPStatus.OK

  except BaseException as e:
    return jsonify({
      "msg": str(e),
      "status": HTTPStatus.INTERNAL_SERVER_ERROR,
    }), HTTPStatus.INTERNAL_SERVER_ERROR


@visualize_api.route("/", methods=["POST"])
def show_visualization():
  file = request.files.getlist("file")[0]

  try:
    if file:
      df = pd.read_csv(file)
      if len(df) > 0 and not df.empty:
        return generate_output(df["x"].to_list(), df["y"].to_list())
      else:
        return jsonify({
          "msg": "The uploaded csv file doesn't have any data",
          "status": HTTPStatus.BAD_REQUEST
        }), HTTPStatus.BAD_REQUEST

    return jsonify({
      "msg": "There is an error with the uploaded csv file",
      "status": HTTPStatus.BAD_REQUEST
    }), HTTPStatus.BAD_REQUEST

  except BaseException as e:
    return jsonify({
      "msg": str(e),
      "status": HTTPStatus.INTERNAL_SERVER_ERROR,
    }), HTTPStatus.INTERNAL_SERVER_ERROR


@visualize_api.route("/random/", methods=["GET"])
def generate_visualization():
  rng = np.random.default_rng()
  x = rng.random(20)
  y = 1.6*x + rng.random(20)
  return generate_output(x, y)
