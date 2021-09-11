<template>
    <div id="frame-container">
        
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Frame',
    props: [
        'frame'
    ],
    computed: {
        ...mapGetters([
            'foundIn'
        ])
    },
    mounted() {
        // if the frame is not in the database, then redirect to 404
        console.log(this.foundIn(this.frame))
    }
}
</script>

<style>
#frame-container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template: auto / 3fr 9fr;
}

</style>