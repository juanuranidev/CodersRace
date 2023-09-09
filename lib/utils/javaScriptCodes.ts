const javaScriptCodes = [
  `import React from 'react';\nimport { Code } from '@mantine/core';\n\nfunction Demo() {\n    return <Code>React.createElement()</Code>;\n}`,
  `export const hotjarInit = () => {\n    if (window.location.protocol === HOTJAR_PROTOCOLS.HTTPS) {\n        return Hotjar.init(process.env.NEXT_PUBLIC_HOTJAR_ID, 6);\n    }\n};`,
];

export default javaScriptCodes;
