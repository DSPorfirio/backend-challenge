<div align="center">
  <img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" />
  <img src="https://github.com/DSPorfirio/backend-challenge/blob/master/img/logo-clubpetro.png" width="320" alt="ClubPetro Logo" />
</div>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>


## Desafio ClubPetro

Para esse desafio foi utilizado o framework [NestJs](https://github.com/nestjs/nest) com Typescript e [Docker](https://www.docker.com/)

O projeto consiste em 3 containers:
- app (backend nest da aplicação) acesso -> http://localhost:3000
- db (banco de dados postgres)
- pgadmin (gerenciador de banco de dados) acesso -> http://localhost:8080 
- acesso pgadmin (email: danilo@pgadmin.com, password: admin)

## Rodar aplicação

Para rodar a aplicação é necessário ter o Docker instalado na máquina, basta rodar o comando em um terminal na raiz do projeto:

```bash
$ docker-compose up -d --build
```

Para rodar a aplicação em primeiro plano e observar os logs em tempo real no terminal, basta rodar:
```bash
$ docker-compose up --build
```

Para obsevar logs de um único container em específico, basta rodar:
```bash
$ docker logs -f nome_container
```

## Endpoints

A aplicação possui 4 endpoints:
- http://localhost:3000/places/insert (POST) Faz a inserção de um novo local de visita
```bash
{
	"country": "Brasil",
	"place": "Monte Verde",
	"meta": "06/2022",
	"urlFlag": "https://www.worldometers.info/img/flags/br-flag.gif"
}
```

- http://localhost:3000/places/update (POST) Realiza o update de um local de visita, apenas meta e local podem ser atualizados
```bash
{
	"id": 1,
	"meta": "04/2022"
}
```

- http://localhost:3000/places/findOne/2 (GET) Busca um registro por ID
- http://localhost:3000/places/findAll (GET) Busca todos os registros ordenados pela meta


## Sobre mim

- Author - [Danilo Porfírio](https://www.linkedin.com/in/daniloporfirio/)
- Instagram - [danilo.svp](https://www.instagram.com/)

## Licença
[MIT](https://github.com/DSPorfirio/backend-challenge/blob/master/LICENSE)

