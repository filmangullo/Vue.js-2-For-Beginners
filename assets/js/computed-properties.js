var app = new Vue({
    el: '#app',
    data: { 
        int1: 1,
        int2: 2,
    },
    computed: {
        sum: function () {
            
            return this.int1 + this.int1;
        }
    }
})