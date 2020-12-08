let myform = new Vue({
    el: '#formulaire',
    data: {
        titleFeedback: false,
        imageFeedback: false
    },
    methods: {
        submit: function() {
            if(!this.titleFeedback) {
                this.titleFeedback = true
            }
            if(!this.imageFeedback) {
                this.imageFeedback = true
            }
        }
    }
});

let footer = new Vue({
    el: '#footer',
    data: {
        year : new Date().getFullYear()
    }
});