

const vue = new Vue({
    el: '#app',
    data() {
        return {
            goods_list: [],
            cart: []
        }
    },
    methods: {
        addHandler(id) {
            const good = this.goods_list.find(good => good.product_id == id);
            this.cart.push(good);

            console.log(this.cart);
        }
    },

    mounted() {
        fetch('/js/goods.json').then((response) => response.json()).then((data) =>  {
            this.goods_list = data;
            this.isLoading = true
        }).catch((info) => console.log(info))
    }
})