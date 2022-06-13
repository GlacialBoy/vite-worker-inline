# vite-worker-inline

## Problem: 
Given a worker defined in a package in CommonJS is possible to build a vite application running the worker with `?worker` but not with `?worker&inline`.
In this project a subfolder with CommonJS files is created to mimic an external package (`/src/worker`)

## Why:
Migrating a project from Webpack which uses this plugin https://v4.webpack.js.org/loaders/worker-loader/


# Reproduction steps

1. Run `npm i`
2. Run `npm run build`
3. Run `npm run preview`: the application work fine, the worker event is printed in the developer tool console
3. Run `npm run buildInline`: the build process throw an error

```
Could not resolve entry module ([...]/vite-worker-inline/src/worker/simple.worker.cjs).
file: [...]/vite-worker-inline/src/worker/simple.worker.cjs?worker&inline?commonjs-proxy
```
