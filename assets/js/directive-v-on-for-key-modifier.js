var app = new Vue({
    el: '#app',
    data: {
        message: ""
    },
    methods: {
        escKey: function () {
            this.message = 'You Pressing ESC Key'
        },
        spaceKey: function () {
            this.message = 'You Pressing SPACE key'
        },
        upKey: function () {
            this.message = 'You Pressing UP key'
        },
        downKey: function () {
            this.message = 'You Pressing Down key'
        },
        aKey: function () {
            this.message = 'You Pressing Alphabet "a" key'
        }
    }
})