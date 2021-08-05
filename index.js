#!/usr/bin/env node

const { request } = require('@octokit/request');
const { promisify } = require('util');

const token = process.env.GITHUB_TOKEN;

if (!token) { 
  throw new Error('Para usar este script, tenés que poner un API token en la variable de entorno GITHUB_TOKEN.');
}

const orgaActual = process.argv[2];
const nuevaOrga = process.argv[3];
const repo = process.argv[4];

if (!orgaActual || !nuevaOrga || !repo) {
  throw new Error('Ups, necesito tres parámetros: [orga-actual] [nueva-orga] [repo]');
}

console.log({ orgaActual, nuevaOrga, repo })

const requestWithAuth = request.defaults({
  headers: {
    authorization: `token ${token}`,
  },
});

const sleep = promisify(setTimeout);

(async () => {
  console.log('🚀 Transfiriendo repo...')

  await requestWithAuth('POST /repos/{owner}/{repo}/transfer', {
    owner: orgaActual,
    new_owner: nuevaOrga,
    repo
  })

  await sleep(1000);

  console.log('🚀 Renombrando repo...')

  await requestWithAuth('PATCH /repos/{owner}/{repo}', {
    owner: nuevaOrga,
    repo,
    name: `disenio-kt-${repo}`
  })
})();
