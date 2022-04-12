import merge from "lodash.merge";
import { ElementProxy } from "yaml-scene/src/elements/ElementProxy";
import { IElement } from "yaml-scene/src/elements/IElement";
import { TraceError } from "yaml-scene/src/utils/error/TraceError";

/*****
 * @name yaml-scene-extension/Translator
 * @description Translate hello text to vietnamese
 * @example
- yaml-scene-extension/Translator:
    text: hello
    var: result
- Echo: ${result}
 */

/**
 * A new element
 * @class
 * @implements yaml-scene/src/elements/IElement
 */
export default class Translator implements IElement {
  /**
   * Wrapper for this element
   * @override
   */
  proxy: ElementProxy<this>
  /**
   * This ref to parent Group element
   * @override
   */
  $$: IElement

  /**
   * This ref to this
   * @override
   */
  $: this

  text: string
  lang: 'en' | 'vi'
  result: string

  var: any

  /**
   * Init properties from yaml to the element. Only handle raw data
   * @param {any} props Element attribute which is passed from scenario yaml file
   * @override
   */
  init(props: any) {
    merge(this, props)
  }

  /**
   * Create and prepare data for element.
   * @override
   */
  async prepare() {
    // Replace variable to value if it's declared in the input text
    this.proxy.applyVars(this, 'text', 'lang') // or this.text = await this.proxy.getVar(this.text)
    if (!this.lang) this.lang = 'vi'
  }

  /**
   * Element execute main tasks
   * @override
   */
  async exec() {
    // Translate here
    this.result = this.translate(this.text, this.lang)
    if (this.var) {
      await this.proxy.setVar(this.var, { result: this.result }, 'result')
    }
  }

  /**
   * Release resources after executed successfully
   * @override
   */
  async dispose() {
    // Release resources here
  }

  /**
   * Clone data when it is in the loop
   * @returns A new instance of this element
   * @override
   */
  clone(): this {
    return this
  }

  private translate(txt: string, lang: string) {
    switch (txt) {
      case 'hello':
      case 'xin chào':
        return lang === 'vi' ? 'Xin chào' : 'Hello'
    }
    throw new TraceError('We not supported this text yet', { txt, lang })
  }
}
