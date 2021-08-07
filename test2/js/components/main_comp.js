const mainTemp = `    <div>
<section class="brand">
    <div class="center">
        <div class="brand__name-conteiner">
            <div class="brand__name">
                <h1 class="brand__h1">The Brand</h1>
                <h2 class="brand__h2">of luxerious <span class="brand__h2_select">fashion</span></h2>   
            </div>
        </div>
    </div>
</section>
<section class="category">
    <div class="center">
        <div class="category__all">
            <a class="category__a" href="#">
                <div class="category__little category__little_women">
                    <p class="category__info">30% off</p>
                    <h2 class="category__h2">for women</h2>
                </div>
            </a>
            <a class="category__a" href="#">
                <div class="category__little category__little_men">
                    <p class="category__info">hot deal</p>
                    <h2 class="category__h2">for men</h2>
                </div>
            </a>
            <a class="category__a" href="#">
                <div class="category__little category__little_kids">
                    <p class="category__info">new arrivals</p>
                    <h2 class="category__h2">for kids</h2>
                </div>
            </a>
        </div>
        <div class="category__all">
        <a class="category__a" href="#">
            <div class="category__big">
                <p class="category__info category__info_accesories">luxirous & trendy</p>
                <h2 class="category__h2">accesories</h2>
            </div>
        </a>
        </div>
    </div>
</section>
<section class="items">
    <div class="center">
        <h2 class="items__h2">
            Fetured Items
        </h2>
        <p class="items__p">
            Shop for items based on what we featured in this week
        </p>

        
        <div class="items__container">
        <item-comp v-for="good of goods" v-bind:good="good" v-on:add="addHandler"></item-comp>
        </div>


    </div>
    <div class="button-a__container">
        <a class="button-a" href="#">Browse All Product</a>
    </div>
</section>
<section class="advantages">
    <div class="advantages__each">
            <img class="advantages__images" src="img/delivery.png" alt="">
            <h3 class="advantages__h3">Free Delivery</h3>
            <p class="advantages__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</p>
    </div>
    <div class="advantages__each">
            <img class="advantages__images" src="img/sales.png" alt="">
            <h3 class="advantages__h3">Sales & discounts</h3>
            <p class="advantages__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive</p> 
    </div>
    <div class="advantages__each">
            <img class="advantages__images" src="img/quality.png" alt="">
            <h3 class="advantages__h3">Quality assurance</h3>
            <p class="advantages__p">Worldwide delivery on all. Authorit tively morph next-generation innov tion withextensive models.</p>
    </div>
</section>
<section class="subscribe">
    <div class="subscribe__blocks">
        <img class="advantages__images" src="img/face.png" alt="">
        <p class="subscribe__quote">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, <span  class="subscribe__quote_i">a pulvinar purus condimentum“</span></p>
    </div>
    <div class="subscribe__blocks">
        <h2 class="subscribe__h2">Subscribe</h2>
        <p class="subscribe__p">For our newletter and promotion</p>
        <form class="subscribe__form" name="subscribe_form_name" action="input.php">
            <input class="subscribe__input" type="email" placeholder="Enter Your Email">
            <input class="subscribe__submit" type="submit" value="Subscribe">
        </form>
    </div>
</section>
</div>`

Vue.component('main-comp', {
    template: mainTemp,
    props: ['goods'],
    methods: {
        addHandler(product_id) {
            this.$emit('add', product_id)
        }
    }
})