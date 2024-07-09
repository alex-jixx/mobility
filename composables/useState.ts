export const useWorkout = () => useState('workout', () => [
    {
        name: 'løft armene',
        durationInSec: 30,
    },
    {
        name: 'bøj forover',
        durationInSec: 28,
    },
    {
        name: 'bøj forover 2',
        durationInSec: 30,
    },
    {
        name: 'bøj forover 3',
        durationInSec: 30,
    },
]);
