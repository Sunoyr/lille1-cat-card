let catcard = Vue.component('cat-card', {
    template: `
    <div class="flipper mb-3" ontouchstart="this.classList.toggle('hover');">
        <div class="front card text-center shadow-sm">
        <img class="card-img-top" src="https://cataas.com/cat?width=250&height=200" alt="Cat image" width="250" height="200" />
        <div class="card-body">
            <h5 class="card-title">Random cat card</h5>
        </div>
    </div>
    <div class="back card text-center shadow-sm">
      <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted">Random cat card</h6>
        <p class="card-text">That card shows a random cat image.</p>
      </div>
      <div class="card-footer">
        <button href="#" class="btn btn-primary card-link">Edit that cat</button>
      </div>
    </div>
  </div>`
});

let btnplus = Vue.component('btnplus', {
    template: `
    <div>
        <button class="btn btn-lg btn-danger circle add" @click.prevent="goForm"><i class="fas fa-plus"></i></button>
    </div>`,
    methods: {
        goForm: function() {
            window.location.href = '../cat-form.html'
        }
    }
});

let app = new Vue({
    el: '#App',
    components: {catcard: catcard, btnplus: btnplus}
});

let footer = new Vue({
    el: '#footer',
    data: {
        year : new Date().getFullYear()
    }
});