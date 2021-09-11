<template>
    <div id="parts-container">
        <div class="spacer"></div>
        <ul id="parts">
            <li>Parts</li>
            <li 
                v-for="part in getParts" 
                :key="part.Item" 
                :id="'part_' + part['Complete Number']"
                @click="$router.push('/parts/' + part['Complete Number'])">
                    {{ part['Complete Number'] }} <span v-if="'URL' in part">*</span>
            </li>
        </ul>
        <div class="spacer"></div>
    </div>
</template>

<script>
export default {
    name: 'Parts',
    computed: {
        getParts() {
            return this.$store.getters.getParts
        }
    },
}
</script>

<style>
#parts-container {
    width: 100%;
    display: grid;
    grid-template: auto / repeat(3, 1fr);
}
#parts {
    width: 100%;
    height: 100%;
    list-style: none;
    border: 1px solid #ccc;
}
#parts li {
    padding: .25rem;
    font-size: 1rem;
}
#parts li:not(:first-child):hover {
    background: #ccc;
}
#parts li:first-child {
    background: #eee;
    font-size: 1.2rem;
    font-weight: bold;
    color: #2c3e50;
}
#parts li:not(:first-child) {
    border-bottom: 1px solid #ccc;
    cursor: pointer;
}
</style>