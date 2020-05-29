var app = new Vue({
    el: '#app',
    data: {
        vehicles: [
            {type: 'car', brand: 'Toyota', color: 'Metallic Silver'},
            {type: 'motorcycle', brand: 'BMW', color: 'Black'},
            {type: 'bike', brand: 'BMX', color: 'Red'},
        ],
        object: {
            firstName : 'John',
            lastName : 'Doe',
            age : 40
        }
    }
})