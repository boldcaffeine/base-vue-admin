<template>
  <div class="components-container">
    <aside>Json-Editor is base on <a href="https://github.com/codemirror/CodeMirror" target="_blank">CodeMirrorr</a>. Lint
      base on <a
        href="https://github.com/codemirror/CodeMirror/blob/master/addon/lint/json-lint.js"
        target="_blank"
      >json-lint</a>.</aside>
    <div class="editor-container">
      <json-editor ref="jsonEditor" v-model="value" />
    </div>
  </div>
</template>

<script>
import JsonEditor from '@/components/JsonEditor'

const jsonData = '[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]'

export default {
  name: 'JsonEditorDemo',
  components: { JsonEditor },
  data() {
    return {
      value: JSON.parse(jsonData)
    }
  }
}
</script>

<style scoped>
.components-container{
  margin: 30px 50px;
  position: relative;
}
aside {
  background: #eef1f6;
  padding: 8px 24px;
  margin-bottom: 20px;
  border-radius: 2px;
  display: block;
  line-height: 32px;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  a {
    color: #337ab7;
    cursor: pointer;

    &:hover {
      color: rgb(32, 160, 255);
    }
  }
}
.editor-container{
  position: relative;
  height: 100%;
}
</style>

