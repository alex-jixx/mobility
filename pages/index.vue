<script setup>

const exercises = useWorkout();

</script>


<template>
    <h1 class="text-5xl mb-5 ">Workout</h1>
    <ul>
        <li v-for="exercise in exercises" :key="exercise.name" class="border p-5 m-3">
            <div class="flex justify-between">
                <h3 class="text-xl">
                    {{ exercise.name }}
                </h3>
                <span>
                    {{ exercise.durationInSec }} seonds
                </span>
            </div>
        </li>
    </ul>
    <UButton block to="/workout" class="mt-5">Start</UButton>
</template>