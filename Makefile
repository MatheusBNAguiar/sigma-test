.PHONY: all setup run test

all: | setup test run;

setup:
	docker-compose build

run: setup
	docker-compose up

test: ;
