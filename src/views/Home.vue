<template>
    <div>
        <h1 class="text-3xl font-bold text-white mt-[15px] text-center">Rock, Paper, Scissors!</h1>
        <ImagesList :Images="Images" />
        <Score />
        <WinnerPercentage />
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import ImagesList from '@/components/ImagesList.vue';
import Score from '@/components/Score.vue';
import WinnerPercentage from '@/components/WinnerPercentage.vue';
import type typeImages from '@/types';

const Images = ref<typeImages[]>([
    {
        ImageName:'PaperIcon',
        bg_colors:'hover:bg-red-500'
    },
    {
        ImageName:'RockIcon',
        bg_colors:'hover:bg-green-400'
    },
    {
        ImageName:'ScissorsIcon',
        bg_colors:'hover:bg-orange-400'
    }
])

</script>

<style scoped>

</style>