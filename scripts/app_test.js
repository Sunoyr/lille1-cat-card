//* créer son composant de manière globale
/*Vue.component('monMessage', {
    props: {
        messageclass: {type: String, default: "alert-success"},
        message: String
    },
    template: `<div class="alert" :class="messageclass">{{ message }}</div>`
});*/

//* créer son composant en passant par une variable pour l'utiliser directement dans une vue
let messagecpnt = {
    props: {
        messageclass: {type: String, default: "alert-success"},
        message: String,
        header: String
    },
    template: `<div class="alert" :class="messageclass">
        <i class="far fa-window-close" @click.prevent="close"><span>close</span></i>
        <div class="header">{{ header }}</div>
        {{ message }}
    </div>`,
    methods: {
        close: function() {
            this.$emit('close')
        }
    }
}

Vue.directive('salut', {
    bind: function (el, binding, vnode) {
        el.value = binding.value
        console.log("bind")
    },
    update: function(el, binding, vnode, oldvnode) {
        console.log("update")
    }
})// Pour créer ses propres directives

Vue.filter('capitalize', function(value, p, s) {
    return p+value.toUpperCase()+s
})// Pour créer ses propres filtres

let vm = new Vue({
    el: '#app',
    data: {
        message : "message de test vue",
        cls     : "alert-success",
        names   : ['Thomas', 'Etienne', 'Ahmed', 'Mael'],
        showList: true,
        actionList : "fermer",
        secondes : 0
    },
    methods: {
        close: function() {
            this.showList = !this.showList
            if(this.showList) this.actionList = "fermer"
            else this.actionList = "ouvrir"
        },
        addPerson: function() {
            this.names.push("Thommy")
        }
    },
    mounted: function() {
        this.$interval = setInterval(()=> {
            this.secondes++
        }, 1000)
    },
    destroyed: function() {
        clearInterval(this.$interval)
    }
});

let counter = {
    data: function() {
        return {
            count: 0
        }
    },
    props: {
        start: {Number, default: 0}
    },
    methods: {
        increment: function() {
            this.count ++
        }
    },
    computed: {
        total: function () {
            return this.start + this.count
    }
},
    template: `<button class="btn btn-primary" @click="increment">{{ total }}</button>`
}

let test = new Vue({
    el: '#test',
    components: { message: messagecpnt, counter},
    data: {
        firstname: 'Didier',
        lastname: 'DeLatruelle',
        fullname: '',
        message : "message de test de la vue 2",
        alert: false
    },
    watch: {
        fullname: function(value) {
            console.log(value)
        }
    },
    methods: {
        demo: function(e) {
            console.log("Salut !", e)
        },
        showAlert: function() {
            this.alert = !this.alert
        },
        hideAlert: function() {
            this.alert = false
        }
    }
});