<template>
    <div>
        <h1 class="text-3xl font-bold text-white mt-[15px] text-center">Rock, Paper, Scissors!</h1>
        <div v-if="!true">
            <ImagesList :Images="Images" />
        </div>
        <div v-else>
            <GameResult />
            <ResetButton />
        </div>
        <Score />
        <WinnerPercentage />
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import ImagesList from '@/components/ImagesList.vue';
import Score from '@/components/Score.vue';
import WinnerPercentage from '@/components/WinnerPercentage.vue';
import ResetButton from '@/components/ResetButton.vue';
import type typeImages from '@/types';
import GameResult from '@/components/GameResult.vue';

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