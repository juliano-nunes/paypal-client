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
            <ProductRowComponent :key="product.identifier" :product="product" v-for="product in products"
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
    computed: {
        subtotal() {
            return this.products.reduce((total,product) => total + product.unitPrice * product.quantity, 0);
        }
    },
    methods: {
        updatedProducts(itemQuantity, productId) {
            if (itemQuantity === 0) {
                this.products = this.products.filter(
                    product => product.identifier != productId
                );
                return;
            }
            
            this.products.map(
                (product) => {
                    if (product.identifier === productId) {
                        product.quantity = itemQuantity;
                    }
                }
            );
        }
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

