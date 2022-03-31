import merge from "lodash.merge";
import { ElementProxy } from "yaml-scene/src/elements/ElementProxy";
import { IElement } from "yaml-scene/src/elements/IElement";
import { TraceError } from "yaml-scene/src/utils/error/TraceError";

/**
 * @guide 
 * @name yaml-scene-extension/Translator
 * @description Translate hello text to vietnamese
 * @example
- yaml-scene-extension/Translator:
    text: hello
    var: result
- Echo: ${result}
 * @end
 */
export default class Translator implements IElement {
  // Element proxy which provide some functions to handle context
  proxy: ElementProxy<any>

  text: string
  lang: 'en' | 'vi'
  result: string

  // Save result to
  var: any

  // Init props in yaml into this element
  init(props: any) {
    merge(this, props)
  }

  // Prehandle data before execute
  async prepare() {
    // Replace variable to value if it's declared in the input text
    this.text = await this.proxy.getVar(this.text)
    if (!this.lang) this.lang = 'vi'
  }

  async exec() {
    // Translate here
    this.result = this.translate(this.text, this.lang)
    if (this.var) {
      await this.proxy.setVar(this.var, { result: this.result }, 'result')
    }
  }

  private translate(txt, lang) {
    switch (txt) {
      case 'hello':
      case 'xin chào':
        return lang === 'vi' ? 'Xin chào' : 'Hello'
    }
    throw new TraceError('We not supported this text yet', { txt, lang })
  }

  dispose() {
    // Release resources here
  }
}
