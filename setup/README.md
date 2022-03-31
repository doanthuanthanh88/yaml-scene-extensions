# <%=name%>
<%=description%>

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
  yas add <%=name%>        # npm install -g <%=name%> OR yard global add <%=name%>
```

## Example
[Examples scenario files](./scenes/test)

## Translate
Translate hello text to vietnamese

```yaml
- <%=name%>/Translator:
    text: hello
    lang: vi
    var: translatedText
```
