# yaml-scene-extension
A template for yaml-scene extension

> It's an extension for `yaml-scene`  

## Features:
- Feature 1
- Feature 2
- Feature 3
- Feature 4

## Details document
> [Wiki Pages](./GUIDE.md)

## Prerequisite
- Platform [`yaml-scene`](https://www.npmjs.com/package/yaml-scene)


## Installation

```sh
  yas add yaml-scene-extension        # npm install -g yaml-scene-extension OR yard global add yaml-scene-extension
```

## Example
[Examples scenario files](./scenes/test)

## Translate
Translate hello text to vietnamese

```yaml
- yaml-scene-extension/Translator:
    text: hello
    lang: vi
    var: translatedText
```
