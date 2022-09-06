.PHONY: all setup run test

all: | prepare setup run;

prepare: 
	npm install
	cd app && npm install

setup:
	docker-compose build

run: setup
	docker-compose up

test:
	cd app/ && npm run test:e2e

test-component:
	cd app/ && npm run test
