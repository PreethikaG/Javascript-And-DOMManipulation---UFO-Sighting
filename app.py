import os
from os import environ
import pandas as pd
import numpy as np
import datetime as dt
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

# Create an instance of Flask
app = Flask(__name__)


# Route to render index.html template 
@app.route("/")
def index():

    # Return template and data
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
