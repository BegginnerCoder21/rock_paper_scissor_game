<template>
    <div>
        <h3 class="text-4xl text-center text-white mt-10">{{ props.GameScore.scoreUser }} : {{ props.GameScore.drawScore }} : {{ props.GameScore.scoreComputer }}</h3>
    </div>
</template>

<script setup lang="ts">
import type typeScore from '@/types/typeScore';
const props = defineProps<{
    GameScore:typeScore
}>()

</script>

<style scoped>

</style>