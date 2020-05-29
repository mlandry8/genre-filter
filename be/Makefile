export FLASK_APP = src/app.py

venv:
	python3.8 -m venv venv
	venv/bin/pip install -r requirements

run:
	# export FLASK_APP=src/app.py;
	venv/bin/flask run;

clean: 
	rm -rf venv