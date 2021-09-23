<template>
    <div class="wrapper">
        <swiper :options="swiperOptions" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    name: 'HomeSwiper',
    props: {
        list: Array
    },
    setup (props) {
        const swiperOptions = {
            pagination: '.swiper-pagination',
            loop: true
        }
        const showSwiper = computed (() => props.list.length)
        return { swiperOptions, showSwiper }
    }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 30.47%
        background: #eee
        .swiper-img
            width: 100%
        .swiper-pagination
            top: 2.8rem
            left: 3.5rem
</style>
