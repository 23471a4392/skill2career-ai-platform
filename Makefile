.PHONY: all install dev start build preview test clean docker-build docker-run

all: install build

install:
	npm install

dev:
	npm run dev

start:
	npm run start

build:
	npm run build

preview:
	npm run preview

test:
	npm run test

clean:
	rm -rf dist node_modules

docker-build:
	docker build -t skill2career:latest .

docker-run:
	docker run -p 8080:80 skill2career:latest
