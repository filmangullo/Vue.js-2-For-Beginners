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

var app = new Vue({
    el: '#app',
})