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
        <Score />
        <WinnerPercentage />
    </div>
</template>

<script setup lang="ts">
import {reactive, ref} from 'vue';
import ImagesList from '@/components/ImagesList.vue';
import Score from '@/components/Score.vue';
import WinnerPercentage from '@/components/WinnerPercentage.vue';
import ResetButton from '@/components/ResetButton.vue';
import type typeImages from '@/types';
import GameResult from '@/components/GameResult.vue';
import type typeResult from '@/types/typeResult';
const result = ref(true);


const Images = ref<typeImages[]>([
    {
        ImageName:'PaperIcon',
        bg_colors:'hover:bg-red-500',
        name:'Paper'
    },
    {
        ImageName:'RockIcon',
        bg_colors:'hover:bg-green-400',
        name:'Rock'
    },
    {
        ImageName:'ScissorsIcon',
        bg_colors:'hover:bg-orange-400',
        name:'Scissors'
    }
]);

const Choice:typeResult = reactive(
    {
        nameComputer:'',
        nameUser:'',
        result:''

    }
)

const gameResult = (index:number) => {
    const choiceComputer = getRandomArbitrary(0,Images.value.length - 1);
    if(choiceComputer === index){
        result.value = false;
        Choice.result = "It's draw!";
        Choice.nameUser = Images.value[index].name;
        Choice.nameComputer = Images.value[choiceComputer].name;
        return Choice;
    }else if(choiceComputer === 0 && index === 1 || choiceComputer === 2 && index === 0 || choiceComputer === 1 && index === 2){
        result.value = false;
        Choice.result = "You lose!";
        Choice.nameUser = Images.value[index].name;
        Choice.nameComputer = Images.value[choiceComputer].name;
        return Choice;
    }else if(choiceComputer === 0 && index === 2 || choiceComputer === 1 && index === 0 ||  choiceComputer === 2 && index === 1){
        result.value = false;
        Choice.result = "You win!";
        Choice.nameUser = Images.value[index].name;
        Choice.nameComputer = Images.value[choiceComputer].name;
        return Choice;
    }
}

const resetApp = () => {
    result.value = true;
}

const getRandomArbitrary = (min:number,max:number) => {
  return Math.round(Math.random() * (max - min) + min);
}
</script>

<style scoped>

</style>