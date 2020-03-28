# AngularPluginArchitecture

Example of building AOT compiled Angular 7 plugin that can be consumed on client and server sides(SSR)

For Angular 8 see [cli8](https://github.com/alexzuza/angular-plugin-architecture/tree/cli8)  branch

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
