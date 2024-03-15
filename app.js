const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      middleName: "",
      url: "https://www.google.com",
      raw_url: '<a href="https://www.google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateLastName(msg, e) {
      //   console.log(msg);
      this.lastName = e.target.value;
    },
    updateAge(e) {
      this.age = e.target.value;
    },
    updateMiddleName(e) {
      this.middleName = e.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("Full name cumputed property was called!");
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
  },
  watch:{
    age(newVal, oldVal){
        setTimeout(() => {
            this.age = 20
        },2000)
    }
  }
}).mount("#app");

// setTimeout(() => {
//     vm.firstName = 'Bob'
// },2000)

// Vue.createApp({
//     data(){
//         return {
//             firstName:'Jane',
//             lastName: "Doe"
//         }
//     }
// }).mount('#app2')
