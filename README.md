# postcss-js-styled

> 🔀 **Forked from [43081j/postcss-styled-components](https://github.com/43081j/postcss-styled-components)**

A PostCSS and stylelint custom syntax for parsing CSS inside styled-components templates.

---

[English](#english) | [中文](#中文)

---

## English

### Introduction

A PostCSS and stylelint custom syntax for parsing CSS inside styled-components templates.

For example:

```ts
const Div = styled.div`
  color: hotpink;
`;
```

### Install

```sh
npm i -D postcss-js-styled
```

### Usage with PostCSS

In your `postcss.config.js`:

```ts
module.exports = {
  syntax: 'postcss-js-styled',
  plugins: [...]
};
```

#### PostCSS with webpack

If you use webpack to execute postcss, you must ensure the right order of loaders, like so:

```ts
module.exports = {
  entry: './src/my-element.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['postcss-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  output: {
    filename: 'bundle.js'
  }
};
```

This is important as postcss will transform your CSS _before_ typescript transpiles to JS (which is what you want to happen).

### Usage with stylelint

In your `.stylelintrc.json` (or other stylelint config file):

```json
{
  "customSyntax": "postcss-js-styled"
}
```

Or with the CLI:

```sh
stylelint --custom-syntax postcss-js-styled
```

#### Usage with vscode-stylelint

In order to make the [vscode-stylelint](https://github.com/stylelint/vscode-stylelint) extension work with this syntax correctly, you must configure it to validate JS and/or TypeScript files.

You can do this by following these [instructions](https://github.com/stylelint/vscode-stylelint#stylelintvalidate).

For example:

```json
{
  "stylelint.validate": ["css", "javascript", "typescript"]
}
```

---

## 中文

### 简介

一个用于解析 styled-components 模板中 CSS 的 PostCSS 和 stylelint 自定义语法。

例如：

```ts
const Div = styled.div`
  color: hotpink;
`;
```

### 安装

```sh
npm i -D postcss-js-styled
```

### 与 PostCSS 一起使用

在你的 `postcss.config.js` 中：

```ts
module.exports = {
  syntax: 'postcss-js-styled',
  plugins: [...]
};
```

#### PostCSS 与 webpack 配合使用

如果你使用 webpack 来执行 postcss，你必须确保 loader 的正确顺序，如下所示：

```ts
module.exports = {
  entry: './src/my-element.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['postcss-loader', 'ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  output: {
    filename: 'bundle.js'
  }
};
```

这很重要，因为 postcss 会在 typescript 转译为 JS _之前_ 转换你的 CSS（这正是你希望发生的事情）。

### 与 stylelint 一起使用

在你的 `.stylelintrc.json`（或其他 stylelint 配置文件）中：

```json
{
  "customSyntax": "postcss-js-styled"
}
```

或者使用 CLI：

```sh
stylelint --custom-syntax postcss-js-styled
```

#### 与 vscode-stylelint 一起使用

为了让 [vscode-stylelint](https://github.com/stylelint/vscode-stylelint) 扩展正确使用此语法，你必须配置它来验证 JS 和/或 TypeScript 文件。

你可以按照这些 [说明](https://github.com/stylelint/vscode-stylelint#stylelintvalidate) 来操作。

例如：

```json
{
  "stylelint.validate": ["css", "javascript", "typescript"]
}
```

---

## License

MIT
