const vm = Vue.createApp({
    data() {
        return {
            firstName: "John",
            lastName: "Doe",
            url:"https://www.google.com",
            raw_url:'<a href="https://www.google.com" target="_blank">Google</a>',
            age:20,
        };
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        },

        increment(){
            let count
            count = this.age++
        }
    },
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
