let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  beforeCreate() {
    console.log("beforeCreate() function called!", this.message); // undefined
  },
  created() {
    console.log("created() function called!", this.message); // hallow world
  },
  beforeMount() {
    console.log("beforeMount() function called!", this.$el); // null
  },
  mounted() {
    console.log("mounted() function called!", this.$el); // hallo world
  },
  beforeUpdate() {
    console.log("beforeUpdate() function called!");
  },
  updated() {
    console.log("updated() function called!");
  },
  beforeUnmount() {
    console.log("beforeUnmount() function called!");
  },
  unmounted() {
    console.log("unmounted() function called!");
  },
});
// mounted生命周期只有在模板被编译并插入到文档中后才会被触发。
// 如果需要在文档上呈现模板，则需要使用mounted生命周期
// 如果只需要数据，那么可以使用创建的生命周期。

vm.mount("#app");

setTimeout(() => {
  vm.mount("#app");
}, 3000);
