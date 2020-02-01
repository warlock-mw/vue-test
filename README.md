# Vue Test
- Hello, World
- カウンター
***

## 開発環境構築
### mac の場合、homebrew をインストール
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
### anyenv インストール
- node のバージョン管理をディレクトリ毎に行えるようにする
```
brew install anyenv
anyenv init

# bash_profile or .zshrc へ eval "$(anyenv init -)" を追記

anyenv intall --init
anyenv install nodenv
exec $SHELL -l
nodenv
nodenv install --list
nodenv install 13.7.0

# node を使いたいディレクトリに移動して nodenv local 13.7.0
# デフォルトで使用する node は nodenv global 13.7.0
```

## プロジェクト作成
```
mkdir vue-test
cd vue-test
nodenv local 13.7.0
npm init -y
```

## アプリ作成手順
```
npm install --save-dev webpack webpack-cli webpack-dev-server
```
- package.json の script に 追加
```
"start": "webpack-dev-server --hot"
```
- webpack.config.js を作成
```
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dest'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  }
}
```
- src/index.js を作成
```
console.log('Hello, World!')
```
- public/index.html を作成
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Vue app</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="bundle.js"></script>
  </body>
</html>
```
- 動作確認(確認を終わるのは Ctrl + C)
```
npm start
```
- ブラウザで http://localhost:8080 を開く
- vue インストール
```
npm i --save vue
npm i -D vue-loader vue-template-compiler css-loader style-loader
npm i -D babel-loader @babel/core @babel/preset-env
```
- webpack.config.js に以下を追加
```
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/, 
        loader: 'vue-loader' 
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'] 
      },
    ]
  },
  resolve: {
        extensions: ['.js', '.vue'],
    alias: {
            vue$: 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new VueLoaderPlugin()
  ],
}

 package.json に以下を追加
"babel": {
    "presets": ["@babel/preset-env"]
  },
```
- package.json に以下を追加
```
"babel": {
    "presets": ["@babel/preset-env"]
  },
```
- src/components/App.vue を作成
```
<template>
  <div>
    <p>Hello, World!</p>
  </div>
</template>
```
- src/index.js を編集
```
import Vue from 'vue'
import App from './components/App' 
new Vue({
  el: '#app',
  components: { App }, 
  template: '<app/>', 
})
```
- 動作確認
```
npm start
```
- src/components/App.vue にスタイルを追加
```
<style scoped>
  * {
    border: 1px solid red;
  }
</style>
```
- 動作確認
```
npm start
```
- src/components/Counter.vue を作成
```
<template>
  <div>
    <button>-</button>
    <span>0</span>
    <button>+</button>
  </div>
</template>
```
- src/components/Counter.vue に追加
```
+ <script>
+ export default {
+   data() {
+     return {
+       count: 0,
+     }
+   }
+ }
+ </script>
<template>
    <div>
      <button>-</button>
-     <span>0</span>
+     <span>{{count}}</span>
      <button>+</button>
    </div>
  </template>
```
- 動作確認
```
npm start
```
- src/components/Counter.vue に追加 
```
<script>
  export default {
    data() {
      return {
        count: 0,
      }
    },
+   methods: {
+     increment() {
+       this.count += 1
+     },
+     decrement() {
+       this.count -= 1
+     },
+   }
  }
  </script>
<template>
    <div>
-     <button>-</button>
+     <button @click="decrement">-</button>
      <span>{{count}}</span>
-     <button>+</button>
+     <button @click="increment">+</button>
    </div>
  </template>
```
- 動作確認
```
npm start
```
- プロダクションビルド用の設定を package.json に追加
```
"build": "webpack -p"
```
- public ディレクトリ以下のファイルを dist にコピーするための用意
```
npm i -D copy-webpack-plugin
```
- webpack.config.js に設定追加
```
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
  // ...
  plugins: [
    // ...
    new CopyPlugin([{ from: './public' }])
  ],
  // ...
}
```
- コンパイル
```
npm run build
```
webpack の -p オプションは NODE_ENV=production の指定とwebpack.optimize.UglifyJsPlugin の指定をしてくれるので、
基本的にこの設定だけでファイルは最小化されて出力
デプロイ時にはこのdistディレクトリを公開
***
## ちょっと応用編
### リアクティブ感を楽しむ
###  コンポーネントに親子関係を持たせる
###  親から子へデータを渡してみる
- src/components/Counter.vue を変更
``` 
<script>
import CounterList from './CounterList'

export default {
  data() {
    return {
      count: 0,
      count_list: [0],
    }
  },
  methods: {
    increment() {
      this.count += 1
      this.count_list = [...Array(this.count + 1).keys()]
    },
    decrement() {
      if (this.count > 0) {
        this.count -= 1
        this.count_list = [...Array(this.count + 1).keys()]
      }
    },
   },
   components: {CounterList},
}
</script>

<template>
  <div>
    <div>
      <button @click="decrement">-</button>
      <span>{{count}}</span>
      <button @click="increment">+</button>
    </div>
    <counter-list :count_list="count_list"/>
  </div>
</template>

```
- src/components/CounterList.vue を作成
```
<script>
export default {
  props: [
    'count_list',
  ],
}
</script>

<template>
  <table border="1">
    <tr>
      <td v-for="val in count_list">{{ val }}</td>
    </tr>
  </table>
</template>
```
- 動作確認
```
npm start
```
***
## 次回は Vuex、Vue Router を予定