const typeScriptCodes = [
  ` import React from 'react';
    import { Code } from '@mantine/core';
  
    function Demo(): JSX.Element {
      return <Code>React.createElement()</Code>;
  }`,
  `export const hotjarInit = (): void => {
    if (window.location.protocol === HOTJAR_PROTOCOLS.HTTPS) {
        Hotjar.init(process.env.NEXT_PUBLIC_HOTJAR_ID, 6);
    }
};`,
  `export const handleGetTotalWalletIncome = (movements: Movement[]): number => {
    let totalIncome = 0;

    movements.forEach((movement) => {
        totalIncome += movement.type === 1 ? movement.amount : 0;
    });

    return totalIncome;
};`,
  `const handleAddObjectToAnArray = (object: ObjectType): void => {
    setObjects([...objects, object]);
};`,
  `const multiplyByTwo = (num: number): number => {
    return num * 2;
};`,
  //   `const printName = (first: string, last: string): void => {
  //     console.log(\`${first}, ${last}\`);
  // };`,
  `const func = (arg1: Type1, arg2: Type2, ..., argN: TypeN): ReturnType => {
    return expression;
};`,
  `const filteredArray = (array: number[]): number[] => {
    return array.filter(num => num % 2 === 0);
};`,
  `const handleIsAppleDevice = (): boolean => {
    return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
};`,
  `const handleGetTimeFromDate = (date: Date): string => {
    return date.toTimeString().slice(0, 8);
};`,
  `const handleGetDayOfYear = (date: Date): number => {
    return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
};`,
  `const randomArrayItem = <T>(arr: T[]): T => {
    return arr[Math.floor(Math.random() * arr.length)];
};`,
  `const isGreaterThan20 = (num: number): void => {
    if (num > 20) {
        console.log("Is greater than 20");
    } else {
        console.log("Is not greater than 20");
    }
};`,
  `const getSelectedText = (): string => {
    return window.getSelection()?.toString() || '';
};`,
  `const generateARandomString = (): string => {
    return Math.random().toString(36).slice(2);
};`,
  `const isAWeekendDay = (date: Date): boolean => {
    return [0, 6].includes(date.getDay());
};`,
];

export default typeScriptCodes;
