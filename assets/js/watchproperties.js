var app = new Vue({
    el: '#app',
    data: { 
        kilometers: 0,
        meters: 0,
    },
    watch: {
        kilometers: function (val) {
            this.kilometers = val;
            this.meters = val * 1000;
        },
        meters: function (val) {
            this.kilometers = val / 1000;
            this.message1 = val;
        }

    }
})