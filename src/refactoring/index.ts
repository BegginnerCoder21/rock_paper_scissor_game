import {reactive, ref} from 'vue';
import type typeImages from '../types';
import type typeResult from '../types/typeResult';


export default function fctHome() {
    const percentage = ref<number>(0);
const GameScore = reactive(
    {
        scoreUser:0,
        scoreComputer:0,
        drawScore:0,
    }
)
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

const GameNumber = ref(0);
const gameResult = (index:number) => {
    const choiceComputer = getRandomArbitrary(0,Images.value.length - 1);
    GameNumber.value++;
    result.value = false;
    Choice.nameUser = Images.value[index].name;
    Choice.nameComputer = Images.value[choiceComputer].name;
    if(choiceComputer === index){
        Choice.result = "It's draw!";
        GameScore.drawScore++;
        percentage.value = (GameScore.scoreUser*100)/GameNumber.value;
        return Choice;
    }else if(choiceComputer === 0 && index === 1 || choiceComputer === 2 && index === 0 || choiceComputer === 1 && index === 2){
        
        Choice.result = "You lose!";
        GameScore.scoreComputer++;
        percentage.value = (GameScore.scoreUser*100)/GameNumber.value;
        return Choice;
    }else if(choiceComputer === 0 && index === 2 || choiceComputer === 1 && index === 0 ||  choiceComputer === 2 && index === 1){
        
        Choice.result = "You win!";
        GameScore.scoreUser++;
        percentage.value = (GameScore.scoreUser*100)/GameNumber.value;
        return Choice;
    }
}

const resetApp = () => {
    result.value = true;
}

const getRandomArbitrary = (min:number,max:number) => {
  return Math.round(Math.random() * (max - min) + min);
}

    return {
        percentage,
        GameScore,
        result,
        Images,
        Choice,
        gameResult,
        resetApp
    }
}