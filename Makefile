# ##################
# # Variables
# ##################

ARGS = $(filter-out $@,$(MAKECMDGOALS))

DOCKER_COMPOSE = docker-compose -f ./docker-compose.yml

APP_SERVICE_NAME = "web"
DEFAULT_USER = "www-data"

.SILENT: ;               # no need for @
.ONESHELL: ;             # recipes execute in same shell
.NOTPARALLEL: ;          # wait for this target to finish
.EXPORT_ALL_VARIABLES: ; # send all vars to shell
Makefile: ;              # skip prerequisite discovery

# Run make help by default
.DEFAULT_GOAL = help

.PHONY: init
init: ## Setap project [local]
	${DOCKER_COMPOSE} exec ${APP_SERVICE_NAME} npm install

.PHONY: dist
dist: ## Setap & buld project [dev]
	${DOCKER_COMPOSE} exec ${APP_SERVICE_NAME} npm instal
	${DOCKER_COMPOSE} exec ${APP_SERVICE_NAME} npm run build

.PHONY: build
build: ## Build docker containers
	${DOCKER_COMPOSE} build $(ARGS)

.PHONY: up
up: ## Up docker containers
	${DOCKER_COMPOSE} up -d $(ARGS)

.PHONY: up-dev
up-dev: ## Up docker containers
	${DOCKER_COMPOSE} up dev --build --remove-orphans -d $(ARGS)

.PHONY: up-prod
up-prod: ## Up docker containers
	${DOCKER_COMPOSE} up prod --build --remove-orphans -d $(ARGS)

.PHONY: down
down: ## Remove docker containers
	${DOCKER_COMPOSE} down $(ARGS)

.PHONY: start
start: ## Start docker containers
	${DOCKER_COMPOSE} start $(ARGS)

.PHONY: stop
stop: ## Stop docker containers
	${DOCKER_COMPOSE} stop $(ARGS)

.PHONY: ps
ps: ## Show all active docker containers
	${DOCKER_COMPOSE} ps $(ARGS)

.PHONY: bash
bash: ## Exec 'bash' into docker containers as 'sail' user
	${DOCKER_COMPOSE} exec ${APP_SERVICE_NAME} bash

.PHONY: reload
reload: ## Down & Up docker containers
	make down && make up

.PHONY: rebuild
rebuild: ## Down & Build docker containers
	make down && make build

.PHONY: rebuild-up
rebuild-up: ## Down & Build & Up docker containers
	make down && make build && make up

# ######################################################

.PHONY: help
help: ## Show this help and exit (default target)
	echo ''
	printf "                     %s: \033[94m%s\033[0m \033[90m[%s] [%s]\033[0m\n" "Usage" "make" "target" "ENV_VARIABLE=ENV_VALUE ..."
	echo ''
	echo '                     Available targets:'
	# Print all commands, which have '##' comments right of it's name.
	# Commands gives from all Makefiles included in project.
	# Sorted in alphabetical order.
	echo '                     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
	grep -hE '^[a-zA-Z. 0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | \
		 awk 'BEGIN {FS = ":.*?## " }; {printf "\033[36m%+20s\033[0m: %s\n", $$1, $$2}'
	echo '                     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
	echo ''

%:
	@:
