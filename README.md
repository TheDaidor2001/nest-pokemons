<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar

```
pnpm install
```

3. Tener Nest CLI instalado

```
npm i -g @nest/cli
```

4. Levantar la Base de datos

```
docker compose up -d
```

5. Recontruir la base de datos con el seed (GET)

```
http://localhost:3000/api/v2/seed
```

## Stack usado

- MongoDB
- NestJS
