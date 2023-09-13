const typeScriptCodes = [
  "import React from 'react';\nimport { Code } from '@mantine/core';\n\nfunction Demo() {\n    return <Code>React.createElement()</Code>;\n}",
  "export const hotjarInit = (): void => {\n    if (window.location.protocol === HOTJAR_PROTOCOLS.HTTPS) {\n        Hotjar.init(process.env.NEXT_PUBLIC_HOTJAR_ID, 6);\n    }\n};",
  "import { Movement } from 'lib';\n\nexport const handleGetTotalWalletIncome = (movements: Movement[]): number => {\n    let totalIncome = 0;\n    movements.forEach((movement: Movement) => {\n        totalIncome += movement.type === 1 ? movement.amount : 0;\n    });\n    return totalIncome;\n};",
  "const handleAddObjectToAnArray = (object: ObjectType): void => {\n    setObjects([...objects, object]);\n};",
  "const multiplyANumberByTwo = (num: number): number => {\n    return num * 2;\n};",
  "const printName = (first: string, last: string): void => {\n    console.log(`${first}, ${last}`);\n};",
  "const function = (arg1: Type1, arg2: Type2, ..., argN: TypeN): ReturnType => {\n    return expression;\n};",
  "const filteredArray = (array: number[]): number[] => {\n    return array.filter(num => num % 2 === 0);\n};",
  "const handleIsAppleDevice = (): boolean => {\n    return /Mac|iPod|iPhone|iPad/.test(navigator.platform);\n};",
  "const handleGetTimeFromDate = (date: Date): string => {\n    return date.toTimeString().slice(0, 8);\n};",
  "const handleGetDayOfYear = (date: Date): number => {\n    return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);\n};",
  "const randomArrayItem = (arr: any[]): any[] => {\n    return arr[Math.floor(Math.random() * arr.length)];\n};",
  "const isGreaterThan20 = (num: number): void => {\n    if (num > 20) {\n        console.log('Is greater than 20');\n    }\n    else {\n        console.log('Is not greater than 20');\n    }\n};",
  "const getSelectedText = (): string => {\n    return window.getSelection()?.toString() || '';\n};",
  "const generateARandomString = (): string => {\n    return Math.random().toString(36).slice(2);\n};",
  "const isAWeekendDay = (date: Date): boolean => {\n    return [0, 6].includes(date.getDay());\n};",
];

export default typeScriptCodes;
