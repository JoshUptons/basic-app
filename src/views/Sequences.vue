<template>
    <div id="sequences-container">
        <div class="spacer"></div>
        <ul id="sequences">
            <li>Sequences</li>
            <li v-for="sequence in getSequences" :key="sequence" :id="sequence['Complete Number']" @click="$router.push('/sequences/' + sequence['Complete Number'])">
                {{ sequence['Complete Number'] }}
            </li>
        </ul>
        <div class="spacer"></div>
    </div>
</template>

<script>
export default {
    name: 'Sequences',
    computed: {
        getSequences() {
            return this.$store.getters.getSequences
        }
    }
}
</script>

<style>
#sequences-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: auto / 40% 20% 40%;
}
#sequences {
    list-style: none;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 100%;
    height: 100%;
}
#sequences li:first-child {
    background: #eee;
    padding: .5rem;
    font-weight: bold;
}
#sequences li {
    width: 100%;
    padding: .25rem;
}
#sequences li:not(:first-child) {
    cursor: pointer;
    border-bottom: 1px solid #ccc;
}
.spacer {
    width: 100%;
    height: 100%;
    display: block;
}
</style>