<script setup>
const props = defineProps({
    initialTime: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits(['done']);

const time = ref();

let intervalId;
function start(initialTime) {
    time.value = initialTime ?? props.initialTime;
    intervalId = setInterval(() => {
        time.value--;
        if (time.value === 0) {
            clearInterval(intervalId);
            emit('done');
        }
    }, 1000);
}

defineExpose({
    start,
});

onMounted(start);


</script>


<template>
    <slot :time />
</template>
