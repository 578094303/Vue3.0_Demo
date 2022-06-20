<template>
  <div>
    <div>{{ model.job.name }}</div>
    <div>{{ model.job.age }}</div>
    <div>{{ model.type }}</div>
    <div>{{ model.salary }}</div>
    <div>{{ model.hobby }}</div>
    <el-button type="primary" @click="sayHello()">点击</el-button>
    <button @click="sayHello()">点击</button>
    <button @click="tiaozhuan()">跳转</button>
    <router-link to="/user">user</router-link>
    &nbsp;&nbsp;&nbsp;
    <router-link to="/about">About</router-link>
    增加两个到user组件的导航，可以看到这里使用了不同的to属性,看地址栏路径有改变
    <router-link to="/user/123">User123</router-link>&nbsp;&nbsp;&nbsp;
    <router-link to="/user/456">User456</router-link>
  </div>
</template>

<script>
//函数处理
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "App",
  setup() {
    const router = useRouter();

    //npm install -g @vue/cli   vue 3.0执行，不然import不能导包
    //setup(),这个方法代替了，data....等一系列方法，说简单一点.net 控制台懂的自然懂
    //vue2  与 vue3 不要混用
    let name = ref("张三");
    let age = ref(18);

    //实体模型传入,在简单一点说就是vue2.0 data里面的数据
    let model = reactive({
      type: "UI",
      salary: "UI1",
      job: {
        name: "测试",
        age: "19",
      },
      hobby: ["抽烟", "喝酒", "烫头"],
    });

    function sayHello() {
      // name.value = "1111";
      // age.value = 222;

      //model 修改
      model.type = "哈哈哈还";
      model.salary = "飒飒打撒";
      model.job.name = "老王";
      model.job.age = 1900;
      model.hobby[0] = "学习";
    }

    function tiaozhuan() {
      router.replace("/user");
    }

    return {
      name,
      age,
      sayHello,
      model,
      tiaozhuan,
    };
  },
};
</script>

