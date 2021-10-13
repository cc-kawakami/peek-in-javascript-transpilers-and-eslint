# Peek in Javascript Transpilers and ESLint

## 前提

- トランスパイラ利用の有無に関わらず、ES2017 相当の（2021/10 時点でブラウザの対応率が十分に高い）記述がユーザーのブラウザで動くようにする、という方針

## 目的

- 各トランスパイラが ECMAScript に対してどのような挙動になるのかを検証する
  - 特に、トランスパイルから漏れるものを洗い出す
- ESLint の挙動を検証する

## 検証用の入力ファイル `input.js`

- ES6 〜 ESNext の規格に基づいたコードサンプル
  - 利用する機会がありそうな機能をピックアップ

## 対象のトランスパイラと設定

No|名前|ターゲット|指定方法|script
:--:|:--:|:--:|:--:|:--|
1|Babel / conservative|- ( `> 1% in JP` )|browerslist|`build:babel:conservative`
2|Babel / progressive|- ( `> 5% in JP` )|browerslist|`build:babel:progressive`
3|esbuild / default|ESNext|-|`build:esbuild:default`
4|esbuild / to ES2017|ES2017|API options|`build:esbuild:es2017`
5|rollup|not transpile|-|`build:rollup`
6|rollup-plugin-esbuild|ES2017|rollup.config.js|`build:rollup-plugin-esbuild`
7|Typescript / default|ES3|-|`build:typescript:default`
8|Typescript / to ES2017|ES2017|CLI options|`build:typescript:es2017`

## 検証結果
### トランスパイルされない機能

以下の機能は全てのトランスパイラで素通りする。
- RegExp named capture groups (ES2018)
- RegExp Lookbehind Assertions (ES2018)
- flat array methods (ES2019)

### ESLint で検証できない機能

- flat array methods (ES2019)
  - [freaktechnik/eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func) を試してみたがダメ

## その他気がついたこと

- browserslist の設定は **`> 3% in JP`** と **`> 4% in JP`** の間におおよそ **ES6未満** と **ES2019** 程度の大きな境目がある
- esbuild はデフォルトでコメントが削減される

## (おまけ) 実行時間

No|名前|ターゲット|時間 ( s )|
:--:|:--:|:--:|:--:|
1|Babel / conservative|- ( `> 1% in JP` )|0.63|
2|Babel / progressive|- ( `> 5% in JP` )|0.53|
3|esbuild / default|ESNext|0.31|
4|esbuild / to ES2017|ES2017|0.18|
5|rollup|not transpile|0.20|
6|rollup-plugin-esbuild|ES2017|0.27|
7|Typescript / default|ES3|1.21|
8|Typescript / to ES2017|ES2017|1.36|

## 参考
- [ESLint - Pluggable JavaScript linter](https://eslint.org/)
- [Babel · The compiler for next generation JavaScript](https://babeljs.io/)
- [esbuild - An extremely fast JavaScript bundler](https://esbuild.github.io/)
- [rollup.js](https://rollupjs.org/guide/en/)
- [egoist/rollup-plugin-esbuild: Use ESBuild with Rollup to transform ESNext and TypeScript code](https://github.com/egoist/rollup-plugin-esbuild)
- [TypeScript: JavaScript With Syntax For Types.](https://www.typescriptlang.org/)
- [ES6〜ES10(es2015〜es2019)まとめ - Qiita](https://qiita.com/ozoneboy/items/9c11ac3323ca94919052)
