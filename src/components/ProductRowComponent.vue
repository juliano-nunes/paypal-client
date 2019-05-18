<template>
    <tr>
        <td class="product-column">
            <div class="product-info">
                <img :src="product.productImg" :alt="product.productName" />
                <div class="product-details">
                    <span><a :href="product.productUrl" target="_blank" class="truncate">{{product.productName}}</a></span>
                    <span><a href="#" @click="$emit('quantity-have-changed', 0, product.identifier)">Delete</a></span>
                </div>
            </div>
        </td>
        <td class="price-column">U$ {{product.unitPrice}}</td>
        <td class="quantity-column"><input type="number" v-model="quantity" min=1 @input="$emit('quantity-have-changed', quantity, product.identifier)" /></td>
    </tr>
</template>
<script>
export default {
    name: "ProductRowComponent",
    props: {
        "product": {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            quantity: 1
        }
    }
}
</script>

<style lang="scss">
    .product-info {
        display: flex;
        
        img {
            width: 100px;
            height: 100px;
        }
        .product-details {
            display: flex;
            flex-flow: column;
            justify-content: space-between;
            padding: 1em;
        }
    }
</style>