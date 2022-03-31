import { join } from "path"
import { Simulator } from "yaml-scene/src/Simulator"
import { VariableManager } from "yaml-scene/src/singleton/VariableManager"

describe('Unit test extension', () => {

  beforeAll(async () => {
    await Simulator.Run(`
extensions:
  yaml-scene-extension: ${join(__dirname, '../src')}
steps:
  - yaml-scene-extension/Translator:
      text: hello
      lang: vi
      var: 
        trans: \${$}
        translatedText: \${$.result}
`)
  })

  test('Check value via object reference', () => {
    // Check object here
    expect(VariableManager.Instance.vars.trans.result).toBe('Xin chào')
  })

  test('Check value via environment variables', () => {
    expect(VariableManager.Instance.vars.translatedText).toBe('Xin chào')
  })

})
