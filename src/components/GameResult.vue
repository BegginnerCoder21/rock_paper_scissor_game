<template>
    <div class="text-2xl text-white font-semibold text-center space-y-4 mt-10">
        <h2>You picked <span class="text-red-500">{{ $props.Choice.nameUser }}</span></h2>
        <h2>The computer picked <span class="text-green-500">{{ props.Choice.nameComputer }}</span></h2>
        <h2 class="text-5xl">{{ props.Choice.result }}</h2>
    </div>
</template>

<script setup lang="ts">
import type typeResult from '@/types/typeResult';

const props = defineProps<{
    Choice:typeResult
}>();

</script>

<style scoped>

</style>