# AngularPluginArchitecture

Example of building AOT compiled Angular 9 plugin and load during runtime.

Based on article [Building an extensible Dynamic Pluggable Enterprise Application with Angular](https://medium.com/angular-in-depth/building-extensible-dynamic-pluggable-enterprise-application-with-angular-aed8979faba5) and this repo [AngularPluginArchitecture](https://github.com/jfgouda/angular-plugin-architecture)


## Setup

```
npm install 
or 
yarn install
```

Building shared plugin (currently i am not using any shared plugin)

```
npm run build:shared
```

Building plugins

```
npm run build:plugins
```

Build index.ts of the builder (usefull if you change only the index.ts but don't wanna build all plugins)

```
npm run posinstall
```

## Run

Dev mode

```
npm start
```


## License

MIT
