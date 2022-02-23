let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            circleColor: 'text-black',
            size: 150
        }
    },
    computed: {
        circleClasses() {
            return {
                purple: this.isPurple
            }
        },
        circleStyle() {
            return {
                transform: `rotate(${this.size/3}deg)`,
                width: `${this.size}px`,
                height: `${this.size}px`,
                lineHeight: `${this.size}px`
            }
        }
    }
}).mount('#app')