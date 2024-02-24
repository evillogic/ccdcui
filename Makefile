default:
	run

build:
	docker build -t nextjs-docker .

run:
	docker-compose up -d

stop:
	docker-compose stop

dev:
	export MONGODB_USERNAME=rootuser && \
	export MONGODB_PASSWORD=rootpass && \
	export MONGODB_HOSTNAME=localhost && \
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d mongodb && \
	npm run dev
