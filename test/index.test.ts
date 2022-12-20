import { describe, expect, it } from 'vitest'
import { conver } from '../src'

describe('should work', () => {
  it('kkopite', () => {
    expect(conver('kkopite')).toMatchInlineSnapshot('"XX0p173"')
  })

  it('Wikipedia', () => {
    expect(conver('Wikipedia')).toMatchInlineSnapshot('"W1X1p3d14"')
  })

  it('Hello World', () => {
    expect(conver('Hello World')).toMatchInlineSnapshot('"H3110 W0r1d"')
  })
})
