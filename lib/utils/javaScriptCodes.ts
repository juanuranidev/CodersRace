const javaScriptCodes = [
  `import React from 'react';\nimport { Code } from '@mantine/core';\n\nfunction Demo() {\n    return <Code>React.createElement()</Code>;\n}`,
  `export const hotjarInit = () => {\n    if (window.location.protocol === HOTJAR_PROTOCOLS.HTTPS) {\n        return Hotjar.init(process.env.NEXT_PUBLIC_HOTJAR_ID, 6);\n    }\n};`,
  `export const handleGetTotalWalletIncome = (movements) => {\n    let totalIncome = 0;\n    \n    movements.forEach((movement) => {\n        totalIncome += movement.type === 1 ? movement.amount : null;\n    });\n    \n    return totalIncome;\n};`,
  `const handleAddObjectToAnArray = (object) => {\n    setObjects([...objects, object]);\n};`,
  `const multiplyByTwo = function(num){\n    return num * 2;\n};`,
  `const printName = (first, last) => {\n    console.log("first, last");\n};`,
  `const func = function(arg1, arg2, ..., argN) {\n    return expression;\n};`,
  `const filteredArray = (array) => {\n    return array.filter( num => num % 2 == 0);\n};`,
  `const handleIsAppleDevice = {\n    return /Mac|iPod|iPhone|iPad/.test(navigator.platform);\n};`,
  `const handleGetTimeFromDate = (date) => {\n    return date.toTimeString().slice(0, 8);\n};`,
  `const handleGetDayOfYear = (date) => {\n    return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);\n};`,
  `const randomArrayItem = (arr) =>{\n    return arr[Math.floor(Math.random() * arr.length)];\n};`,
  `const isGreaterThan20 = (num) => {\n    if(num >20) {\n        return console.log("Is greater than 20);\n    } else {\n        return console.log("Is not greater than 20");\n    }\n}`,
  `const getSelectedText = () => {\n    return window.getSelection().toString();\n};`,
  `const generateARandomString = () => {\n    return Math.random().toString(36).slice(2);\n};`,
  `const isAWeekendDay = (date) => {\n    return [0, 6].indexOf(date.getDay()) !== -1;\n};`,
];
export default javaScriptCodes;
