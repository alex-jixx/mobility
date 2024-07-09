<script setup>

const exercises = useWorkout();

const currentExercise = ref(0);
const currentExerciseTime = ref(exercises.value[currentExercise.value].durationInSec);

const timer = ref()

async function handleDone() {
    if (currentExercise.value < exercises.value.length - 1) {
        currentExercise.value++;
        timer.value.start(currentExerciseTime.value);
    } else {
        await navigateTo('/')
    }
}


</script>

<template>
    <div class="flex justify-center items-center mt-10">
        <div>
            <MyTimer ref="timer" @done='handleDone' :initialTime="currentExerciseTime" v-slot="{ time }">
                <h1 class="text-3xl">
                    {{ exercises[currentExercise].name }}
                </h1>
                <p class="text-xl">
                    Time: {{ time }}
                </p>
            </MyTimer>
        </div>
    </div>
</template>