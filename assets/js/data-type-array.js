var app = new Vue({
    el: '#app',
    data: {
        content: '',
        vehicles: ['car', 'motorcycle', 'bike']
    },
    methods: {
        addVehicle: function () {
            this.vehicles.push(this.content);
            this.content = '';
        },
        removeVehicle: function (index) {
            this.vehicles.splice(index, 1); // 1 artinya akan menghapus data sebanyak 1 buah
        }
    }
})