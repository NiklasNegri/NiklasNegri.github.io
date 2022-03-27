Vue.createApp({
    data() {
        return {
            exercises: [],
            schedule: [],
            totalTime: 0,
            totalCalories: 0,
            newTitle: "",
            newTime: 1,
            newCalories: 1,
            page: "home",
            generateTime: 1,
            generateMaxReps: 1,
            isSpeaking: false,
        }
    },
    methods: {
        addNewExercise() {
            const newExercise = {
                "title": this.newTitle,
                "time": this.newTime,
                "calories": this.newCalories,
                "reps": 1
            }
            this.exercises.push(newExercise);
            localStorage.setItem('exercises', JSON.stringify(this.exercises));
        },
        removeExercise(exercise) {
            let index = this.exercises.indexOf(exercise);
            this.exercises.splice(index, 1);
            localStorage.setItem('exercises', JSON.stringify(this.exercises));
        },
        addToSchedule(exercise) {
            var copy = JSON.parse(JSON.stringify(exercise));
            this.schedule.push(copy);
            this.totalTime += (copy.reps * copy.time);
            this.totalCalories += (copy.reps * copy.calories);
            this.totalCalories = parseFloat(this.totalCalories.toFixed(2));
            localStorage.setItem('schedule', JSON.stringify(this.schedule));
            localStorage.setItem('totalTime', this.totalTime)
            localStorage.setItem('totalCalories', this.totalCalories);
        },
        removeFromSchedule(schedule) {
            let index = this.schedule.indexOf(schedule);
            this.schedule.splice(index, 1);
            this.totalTime -= (schedule.reps * schedule.time);
            this.totalCalories -= (schedule.reps * schedule.calories);
            localStorage.setItem('schedule', JSON.stringify(this.schedule));
            localStorage.setItem('totalTime', this.totalTime)
            localStorage.setItem('totalCalories', this.totalCalories);
        },
        clearSchedule() {
            this.schedule.splice(0);
            this.totalTime = 0;
            this.totalCalories = 0;
            localStorage.removeItem('schedule');
            localStorage.removeItem('totalTime');
            localStorage.removeItem('totalCalories');
        },
        clearExercises() {
            localStorage.removeItem('exercises');
            this.fetchExercises();
        },
        changePage(page) {
            this.page = page;
        },
        async fetchExercises() {
            let response = await fetch('exercises.json');
            let json = await response.json();
            this.exercises = json;
        },
        generateSchedule() {
            while (this.totalTime < this.generateTime) {
                let randomExercise = Math.floor(Math.random() * this.exercises.length);
                let randomReps = Math.floor((Math.random() * this.generateMaxReps));
                this.exercises[randomExercise].reps = randomReps + 1;
                let copy = JSON.parse(JSON.stringify(this.exercises[randomExercise]));
                if ((copy.time * copy.reps) + this.totalTime < this.generateTime) {
                    this.schedule.push(copy);
                    this.totalTime += (copy.reps * copy.time);
                    this.totalCalories += (copy.reps * copy.calories);
                    this.totalCalories = parseFloat(this.totalCalories.toFixed(2));
                } else {
                    let remainingTime = this.generateTime - this.totalTime;
                    copy.reps = remainingTime / copy.time;
                    copy.reps = Math.round(copy.reps);
                    this.schedule.push(copy);
                    this.totalTime += (copy.reps * copy.time);
                    this.totalCalories += (copy.reps * copy.calories);
                    this.totalCalories = parseFloat(this.totalCalories.toFixed(2));
                    localStorage.setItem('schedule', JSON.stringify(this.schedule));
                    localStorage.setItem('totalTime', this.totalTime)
                    localStorage.setItem('totalCalories', this.totalCalories);
                }
            }
        },
        speakExercise() {
            speechSynthesis.cancel();
            let exerciseCount = 1;
            speechSynthesis.speak(new SpeechSynthesisUtterance('Starting new workout schedule'));
            for (exercise of this.schedule) {
                speechSynthesis.speak(new SpeechSynthesisUtterance('Exercise ' + exerciseCount));
                speechSynthesis.speak(new SpeechSynthesisUtterance(exercise.title));
                speechSynthesis.speak(new SpeechSynthesisUtterance('Amount of reps ' + exercise.reps));
                speechSynthesis.speak(new SpeechSynthesisUtterance('Time to complete in ' + (exercise.time * exercise.reps) + ' seconds'));
                exerciseCount++;
                for (let i = 0; i < (exercise.time * exercise.reps); i++) {
                    let count = i + 1;
                    speechSynthesis.speak(new SpeechSynthesisUtterance(count));
                }
            }
            document.querySelector(".resumeBtn").removeAttribute("hidden");
            this.isSpeaking = true;
        },
        speakPause() {
            this.isSpeaking = false;
            speechSynthesis.pause();
        },
        speakResume() {
            this.isSpeaking = true;
            speechSynthesis.resume();
        }
    },
    mounted: async function() {
        if (!localStorage.getItem('exercises')) {
            this.fetchExercises();
        } else {
            this.exercises = JSON.parse(localStorage.getItem('exercises'));
        }
        if (localStorage.getItem('schedule')) {
            this.schedule = JSON.parse(localStorage.getItem('schedule'));
            this.totalTime = localStorage.getItem('totalTime');
            this.totalCalories = localStorage.getItem('totalCalories')
        }
    },
}).mount('#app');