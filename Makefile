default:
	run

build:
	docker build -t nextjs-docker .

run:
	docker-compose up -d

stop:
	docker-compose stop
