<template>
  <div class="mixin-components-container">
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Buttons</span>
        </div>
        <div style="margin-bottom: 50px">
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn blue-btn" to="/documentation/index">
              Documentation
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn light-blue-btn" to="/icon/index">
              Icons
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn pink-btn" to="/excel/export-excel">
              Excel
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn green-btn" to="/table/complex-table">
              Table
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn tiffany-btn" to="/example/create">
              Form
            </router-link>
          </el-col>
          <el-col :span="4" class="text-center">
            <router-link class="pan-btn yellow-btn" to="/theme/index">
              Theme
            </router-link>
          </el-col>
        </div>
      </el-card>
    </el-row>

    <el-row :gutter="20" style="margin-top: 50px">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Material Design 的input</span>
          </div>
          <div style="height: 100px">
            <el-form :model="demo" :rules="demoRules">
              <el-form-item prop="title">
                <md-input
                  v-model="demo.title"
                  icon="el-icon-search"
                  name="title"
                  placeholder="输入标题"
                >
                  标题
                </md-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>图片hover效果</span>
          </div>
          <div class="component-item">
            <pan-thumb
              width="100px"
              height="100px"
              image="https://wpimg.wallstcn.com/577965b9-bb9e-4e02-9f0c-095b41417191"
            >
              vue-element-admin
            </pan-thumb>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>水波纹 waves v-directive</span>
          </div>
          <div class="component-item">
            <el-button v-waves type="primary"> 水波纹效果 </el-button>
          </div>
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>hover text</span>
          </div>
          <div class="component-item">
            <mallki class-name="mallki-text" text="vue-element-admin" />
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 50px">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Share</span>
          </div>
          <div class="component-item" style="height: 420px">
            <dropdown-menu
              :items="articleList"
              style="margin: 0 auto"
              title="系列文章"
            />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanThumb from "@/components/PanThumb";
import MdInput from "@/components/MDinput";
import Mallki from "@/components/TextHoverEffect/Mallki";
import DropdownMenu from "@/components/Share/DropdownMenu";
import waves from "@/directive/waves/index.js"; // 水波纹指令

export default {
  name: "ComponentMixinDemo",
  components: {
    PanThumb,
    MdInput,
    Mallki,
    DropdownMenu,
  },
  directives: {
    waves,
  },
  data() {
    const validate = (rule, value, callback) => {
      if (value.length !== 6) {
        callback(new Error("请输入六个字符"));
      } else {
        callback();
      }
    };
    return {
      demo: {
        title: "",
      },
      demoRules: {
        title: [{ required: true, trigger: "change", validator: validate }],
      },
      articleList: [
        {
          title: "基础篇",
          href: "https://juejin.im/post/59097cd7a22b9d0065fb61d2",
        },
        {
          title: "登录权限篇",
          href: "https://juejin.im/post/591aa14f570c35006961acac",
        },
        {
          title: "实战篇",
          href: "https://juejin.im/post/593121aa0ce4630057f70d35",
        },
        {
          title: "vue-admin-template 篇",
          href: "https://juejin.im/post/595b4d776fb9a06bbe7dba56",
        },
        {
          title: "v4.0 篇",
          href: "https://juejin.im/post/5c92ff94f265da6128275a85",
        },
        {
          title: "优雅的使用 icon",
          href: "https://juejin.im/post/59bb864b5188257e7a427c09",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
// base color
$blue: #324157;
$light-blue: #3a71a8;
$red: #c03639;
$pink: #e65d6e;
$green: #30b08f;
$tiffany: #4ab7bd;
$yellow: #fec171;
$panGreen: #30b08f;

@mixin colorBtn($color) {
  background: $color;

  &:hover {
    color: $color;

    &:before,
    &:after {
      background: $color;
    }
  }
}

.blue-btn {
  @include colorBtn($blue);
}

.light-blue-btn {
  @include colorBtn($light-blue);
}

.red-btn {
  @include colorBtn($red);
}

.pink-btn {
  @include colorBtn($pink);
}

.green-btn {
  @include colorBtn($green);
}

.tiffany-btn {
  @include colorBtn($tiffany);
}

.yellow-btn {
  @include colorBtn($yellow);
}
.components-container {
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
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
.pan-btn {
  font-size: 14px;
  color: #fff;
  padding: 14px 36px;
  border-radius: 8px;
  border: none;
  outline: none;
  transition: 600ms ease all;
  position: relative;
  display: inline-block;

  &:hover {
    background: #fff;

    &:before,
    &:after {
      width: 100%;
      transition: 600ms ease all;
    }
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    transition: 400ms ease all;
  }

  &::after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
}

.custom-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  color: #fff;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 4px;
}

.mixin-components-container {
  background-color: #f0f2f5;
  padding: 30px;
  min-height: calc(100vh - 84px);
}
.component-item {
  min-height: 100px;
}
</style>
