import {users} from "./users.js"

var app = new Vue({
    el: '#app',
    data: {
        usuarios: users,
        },
    methods: {
        filter(){
            let filter = document.getElementById('filter').value
            if (filter == 'all'){
                this.usuarios = users

            } //  cerrado if 
            else if(filter == 'men'){
                this.usuarios = users.filter((user) => {
                    return user.gender == 'Male'
                })
                
            } //cerrado if 
            else if(filter == 'woman'){
                this.usuarios = users.filter((user) => {
                    return user.gender == 'Female'
                })
        } else if (filter == 'adul'){

            this.usuarios = users.filter((user) => {
                return user.age >= 18
            }) 
        } else if (filter == 'minor'){
            this.usuarios = users.filter((user) =>{
                return user.age <=18
            })
        }
        
        
    }//cerrado if 
    },
})