# ThreeEyedRaven's localization library

![UI Editor](/docs/images/01.UIEditor.png?raw=true "UI Editor")

## Motivation

One of the most painful problem that we repeatedly face when making application is localization (aka 
internationalization, i18n, multiple language, etc ...). There's a lot of library support localization in react-js, 
react-native, node-js, but the most painful thing was not how to implement the localization, but how to co-operate with 
client or 3rd-party team to make the translate. Thousand of text must be gathered, versioned, translated, updated in 
daily or even hourly basis.

TER-Localization, with new approach method, provide a solution which can speed up everything, include: 

* **Easy start without any configuration**
* **Collect the translate text from source code**
* **Collect the translate text run-time (even for dynamic text, like error return from server)**
* **Translate by UI, providable to customer / 3rd-party translate team**
* **Sync with google spreadsheet**

## User manual

|    | Guide                  | Path                                           |
|----|------------------------|------------------------------------------------|
| 01 | How to use GDrive Sync | [GDrive Sync](/docs/How_to_use_gdrive_sync.md) |

## Installation
### Install with npm or yarn

```
yarn global add ter-localization-cli
# or
npm install ter-localization-cli -g
```

### Start to get the UI

```
ter-localization-cli serve
```

![UI Editor](/docs/images/02.GettingStarted.png?raw=true "UI Editor")

Most of information is default. You can just click the button and go.

## Where to go next?

You can go to [ter-localization](https://github.com/EugeneNguyen/ter-localization) to implement it in the client side

## Function

| Command               | Description                                        |
|-----------------------|----------------------------------------------------|
| [serve](#serve)       | Start server to listen and edit localization       |

### Serve

TER-Localization start a server to listen to new word added and provide UI edit for translation

The UI will be provided with information in the config file. Default will be `http://localhost:5050`

#### Params

| Params   | Short | Description         | Default                      |
|----------|-------|---------------------|------------------------------|
| --config | -c    | Path to config file | `src/localization/config.json` |
