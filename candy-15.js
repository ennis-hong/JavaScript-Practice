// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  const regex = /\w{1,2}/g
  const result = str.match(regex)

  if (result === null) {
    return []
  }

  return result.map((e) => e.padEnd(2, "_"))
}

console.log(splitString("abcdef")) // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")) // ["ab", "cd", "ef", "g_"]
console.log(splitString("")) // []
