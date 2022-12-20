import * as AllLeetMap from './preset'

export interface LeetOption {
  /**
   * What percentage of characters will be converted, [0, 1]
   * @default 1
   */
  ratio?: number

  /**
   * conver map
   */
  map?: Record<string, string> | keyof typeof AllLeetMap
}

export function conver(source: string, option?: LeetOption) {
  const ratio = option?.ratio ?? 1
  let map = option?.map ?? AllLeetMap.simple

  if (typeof map === 'string')
    map = AllLeetMap[map]

  let output = ''
  const indexs = []
  for (let i = 0; i < source.length; i++) {
    if (map[source[i].toUpperCase()])
      indexs.push(i)
  }

  const removeLen = indexs.length * (1 - ratio)
  for (let i = 0; i < removeLen; i++) {
    const j = Math.floor(Math.random() * indexs.length)
    indexs.splice(j, 1)
  }

  for (let i = 0; i < source.length; i++) {
    if (map[source[i].toUpperCase()] && indexs.includes(i))
      output += map[source[i].toUpperCase()]
    else
      output += source[i]
  }
  return output
}
