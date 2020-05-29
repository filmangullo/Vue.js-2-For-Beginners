var app = new Vue({
    el: '#app',
    data: {
        message: ""
    },
    methods: {
        showAlert: function () {
            alert(' The button has been clicked to call this method!');
        }
    }
})