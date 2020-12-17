* https://www.npmjs.com/package/ts-node


## Installation

```
# Locally in your project.
npm install -D typescript
npm install -D ts-node

# Or globally with TypeScript.
npm install -g typescript
npm install -g ts-node
```

## Usage

```
# Execute a script as `node` + `tsc`.
ts-node script.ts

# Starts a TypeScript REPL.
ts-node

# Execute code with TypeScript.
ts-node -e 'console.log("Hello, world!")'

# Execute, and print, code with TypeScript.
ts-node -p -e '"Hello, world!"'

# Pipe scripts to execute with TypeScript.
echo 'console.log("Hello, world!")' | ts-node

# Equivalent to ts-node --script-mode
ts-node-script scripts.ts

# Equivalent to ts-node --transpile-only
ts-node-transpile-only scripts.ts
```
