import * as AllLeetDirectory from './preset'

export interface BaseLeetOption {
  /**
   * What percentage of characters will be converted, [0, 1]
   * @default 1
   */
  ratio?: number
}

export interface BuiltLeetOption extends BaseLeetOption {
  /**
   * conver rule
   */
  rule?: keyof typeof AllLeetDirectory
}

export interface CustomLeetOption extends BaseLeetOption {
  rule: 'custom'
  directory: Record<string, string>
}

export type LeetOption = BuiltLeetOption | CustomLeetOption

export function conver(source: string, option?: LeetOption) {
  const ratio = option?.ratio ?? 1
  let directory: Record<string, string> = {}
  let isCustom = false
  if (option?.rule === 'custom') {
    isCustom = true
    directory = option.directory
  }
  else { directory = AllLeetDirectory[option?.rule ?? 'simple'] }

  let output = ''
  const indexs = []
  for (let i = 0; i < source.length; i++) {
    const c = isCustom ? source[i] : source[i].toUpperCase()
    if (directory[c])
      indexs.push(i)
  }

  const removeLen = indexs.length * (1 - ratio)
  for (let i = 0; i < removeLen; i++) {
    const j = Math.floor(Math.random() * indexs.length)
    indexs.splice(j, 1)
  }

  for (let i = 0; i < source.length; i++) {
    const c = isCustom ? source[i] : source[i].toUpperCase()
    if (directory[c] && indexs.includes(i))
      output += directory[c]
    else
      output += source[i]
  }
  return output
}
