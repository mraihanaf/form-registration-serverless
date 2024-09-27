import type { Config } from "jest"

const config: Config = {
    collectCoverage: true,
    coverageDirectory: "./coverage",
    coverageProvider: "v8",
    testEnvironment: "node",
    moduleFileExtensions: ["js", "mjs", "cjs", "jsx", "ts", "tsx", "json", "node", "d.ts"],
    transform: {
        "^.+.tsx?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
    },
}

export default config
