export FLASK_APP = src/app.py
export FLASK_ENV = development

venv:
	python3.8 -m venv venv
	venv/bin/pip install -r requirements

run:
	venv/bin/python -m flask run

clean: 
	rm -rf venv