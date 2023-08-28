<template>
    <div>
        <h1 class="text-3xl font-bold text-white mt-[15px] text-center">Paper, Rock, Scissors!</h1>
        <div v-if="result">
            <ImagesList :Images="Images" @game-result="gameResult" />
        </div>
        <div v-else>
            <GameResult :Choice="Choice"  />
            <ResetButton @reset-app="resetApp" />
        </div>
        <Score :GameScore="GameScore" />
        <WinnerPercentage :percentage="percentage" />
    </div>
</template>

<script setup lang="ts">
import ImagesList from '@/components/ImagesList.vue';
import Score from '@/components/Score.vue';
import WinnerPercentage from '@/components/WinnerPercentage.vue';
import ResetButton from '@/components/ResetButton.vue';
import GameResult from '@/components/GameResult.vue';
import fctHome from '@/refactoring/index';

const {
    percentage,
    GameScore,
    result,
    Images,
    Choice,
    gameResult,
    resetApp
} = fctHome();

</script>

<style scoped>

</style>