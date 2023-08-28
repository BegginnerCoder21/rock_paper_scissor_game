<template>
    <div>
        <!-- pour arroundi le resultat au 100 eme près -->
        <h3 class="text-2xl text-center mt-8 text-white">Win rate: {{Math.round(props.percentage * 100)/100}}%</h3>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    percentage:number
}>()

</script>

<style scoped>

</style>