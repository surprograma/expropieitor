# Expropieitor

> Pequeña utilidad para _transferir_ repositorios GitHub.

![portada](assets/portada.jpg)

## :man_technologist: :woman_technologist: ¿Cómo usarlo?

Para utilizar este script, vas a necesitar dos cosas: 
* un entorno NodeJS,
* un token de GitHub con, al menos, scope _repo_. Podés obtener uno desde [esta página](https://github.com/settings/tokens).

Teniendo ambas cosas, basta con ejecutar lo siguiente:

```bash
npm install
export GITHUB_TOKEN=eltokenqueconseguiste
./index.js orga-actual nueva-orga repo
```

:warning: Además de transferirlo, lo renombra agregándole `disenio-kt-` como prefijo. Básicamente, porque es lo que necesitaba que haga. :sweat_smile:

## :memo: Trabajo futuro

Ofrecer alguna forma de parametrizar el prefijo para renombrar, o poder prescindir de él.
