<template>
    <div id="sequence-container">
        <ul id="parts">
            <li>Parts</li>
            <li 
                v-for="part in computedParts"
                :key="part.Item"
                :id="'part_' + part['Complete Number']"
                @click="$router.push('/parts/' + part['Complete Number'])">
                    {{ part['Complete Number'] }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sequence',
    props: [
        'sequence'
    ],
    computed: {
        computedSequence() {
            return this.$store.getters.getSequence(this.sequence)
        },
        computedParts() {
            return this.$store.getters.getPartsInSequence(this.sequence)
        }
    },
    created() {
        if ('bcGetter' in this.$route.meta.breadcrumb[this.$route.meta.breadcrumb.length -1]) {
            this.$route.meta.breadcrumb[this.$route.meta.breadcrumb.length -1].name = this.computedSequence['Complete Number']
        }
    },
}
</script>

<style>
#sequence-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: auto / 20% 80%;
    column-gap: 3px;
}
</style>