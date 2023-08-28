<template>
    <div class="flex space-x-6">
        <div class="flex space-x-6 mt-7" v-for="(image,index) in props.Images">
            <div @click="$emit('game-result',index)" :class="image.bg_colors" class="bg-white rounded-full h-44 w-44 flex justify-center items-center cursor-pointer">
                <img :src="getImagesPath(image)" alt="image" class="h-24">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type typeImages from '@/types';

const props = defineProps<{
    Images:typeImages[]
}>();



const getImagesPath = (image:typeImages) => {
    return new URL(`../assets/${image.ImageName}.svg`, import.meta.url).pathname;
}



</script>

<style scoped>

</style>