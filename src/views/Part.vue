<template>
    <div id="part-container">
        <ul id="found-in">
            <li>Found In</li>
            <li 
                v-for="sequence in foundIn" 
                :key="sequence.Item" 
                :id="'sequence_' + sequence['Complete Number']"
                @click="$router.push('/sequences/' + sequence['Complete Number'])">
                    {{ sequence['Complete Number'] }}    
            </li>
        </ul>
        <div id="pdf-preview">
            <div class="part-name"><span>{{ computedPart['Complete Number'] }}</span></div>
            <pdf v-if="'URL' in computedPart" id="pdf" :src="computedPart.URL"></pdf>
            <div v-if="'URL' in computedPart == false" id="pdf">No PDF on file</div>
            <a :href="computedPart.URL" id="download-pdf" download>Download PDF</a>
        </div>
    </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
    name: 'Part',
    components: {
        pdf
    },
    computed: {
        computedPart() {
            return this.$store.getters.getPart(this.part)
        },
        foundIn() {
            return this.$store.getters.foundIn(this.computedPart['Complete Number'])
        }
    },
    props: [
        'part'
    ],
    created() {
        if ('bcGetter' in this.$route.meta.breadcrumb[this.$route.meta.breadcrumb.length -1]) {
            this.$route.meta.breadcrumb[this.$route.meta.breadcrumb.length -1].name = this.computedPart['Complete Number']
        }
    },
    mounted() {
        console.log(this.foundIn)
    }
}
</script>

<style>
#part-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: auto / 20% 80%;
    column-gap: 3px;
}
#found-in {
    width: 100%;
    height: 100%;
    list-style: none;
    border: 1px solid #ccc;
}
#found-in li {
    padding: .25rem;
}
#found-in li:first-child {
    font-weight: bold;
    background: #eee;
}
#found-in li:not(:first-child) {
    color: #11b8ff;
    font-weight: bold;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
#found-in li:not(:first-child):hover {
    cursor: pointer;
    background: #ccc;
}
#pdf-preview {
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    margin: auto;
    display: grid;
    grid-template: 35px 80% 10% / auto;
    overflow: hidden;
}
#pdf {
    width: 80%;
    margin: auto;
}
.part-name {
    height: 100%;
    width: 100%;
    text-align: center;
    padding-top: .25rem;
    font-size: 1.2rem;
    background: #eee;
    font-weight: bold;
    display: block;
}
#download-pdf {
    width: 200px;
    padding: 0 .35rem;
    height: 100%;
    margin: auto;
    margin-top: 1rem;
    text-decoration: none;
    color: black;
    border: 1px solid #ccc;
    padding: 1.5rem;
}
</style>