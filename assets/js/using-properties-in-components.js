Vue.component('greeting', {
    template: '<b>Hello, Vue!, From Component</b>'
});

Vue.component('hello', {
    template: `
        <div>
            <b>Hello Vue</b> <br>
            <i>Hello Vue</i> <br>
            <u>Hello Vue</u>
        </div>
    `
});

Vue.component('button-center', {
    data: function () {
        return {
            count: 0
        }
    },
    template : '<button v-on:click="count++">Click Me {{ count }} times</button>'
})

var app = new Vue({
    el: '#app',
})