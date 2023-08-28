<template>
    <div>
        <h3 class="text-2xl text-center mt-8 text-white">Win rate: {{Math.round(props.percentage)}}%</h3>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    percentage:number
}>()

</script>

<style scoped>

</style>