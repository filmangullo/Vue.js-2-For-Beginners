var app = new Vue({
    el: '#app',
    data: { 
        int1: 1,
        int2: 2,
        results: null,
    },
    methods: {
        sumProcess: function (int3) {
            return this.results = this.int1 + this.int2 + int3;
        }
    },
})