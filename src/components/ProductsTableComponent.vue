<template>
    <table id="shopping-cart-table" class="striped">
        <thead>
            <tr>
                <th class="product-column"></th>
                <th class="price-column">Price</th>
                <th class="quantity-column">Quantity</th>
            </tr>
        </thead>
        <tbody>
            <ProductRowComponent :key="product.sku" :product="product" v-for="product in products"
                v-on:quantity-have-changed="updatedProducts" />
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td id="subtotal-label">Subtotal ({{products.length}} item):</td>
                <td id="subtotal-value">U$ {{subtotal}}</td>
            </tr>
        </tfoot>
    </table>
</template>
<script>
import ProductRowComponent from "./ProductRowComponent.vue";

export default {
    name: "ProductsTableComponent",
    components: {
        ProductRowComponent,
    },
    props: {
        products: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            subtotal: this.getSubtotal()
        }
    },
    methods: {
        updatedProducts(itemQuantity, productId) {
            if (itemQuantity === 0) {
                this.products = this.products.filter(
                    product => product.sku != productId
                );
                this.$emit('products-changed', this.products);
                return;
            }
            
            this.products.map(
                (product) => {
                    if (product.sku === productId) {
                        product.quantity = itemQuantity;
                    }
                }
            );
            this.$emit('products-changed', this.products);
            this.subtotal = this.getSubtotal();
        },
        getSubtotal() {
            return this.products.reduce((total,product) => (total + product.price * product.quantity).toFixed(2), 0);
        },
    }
}
</script>

<style lang="scss">
    .product-column {
        width: 60%;
    }
    .price-column, .quantity-column {
        width: 20%;
    }
    td, th {
        padding: 1px;
    }
    #subtotal-label {
        text-align: right;
        font-weight: 600;
    }
</style>

