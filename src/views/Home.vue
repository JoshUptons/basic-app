<template>
    <div id="home-container">
        <h1>Sequence or Part Lookup</h1>
        <div class="readme">
            <h1>Inputs</h1>
            <h2>Sequence #</h2>
            <h3>Expected Output:</h3>
            <p>The Sequence Location, with the floor and all components at that location.</p>
            <h2>Part #</h2>
            <h3>Exected Output:</h3>
            <p>The Part, with all relevant information, as well as a preview of the pdf, as well as a link to view the pdf.</p>
        </div>
        <p></p>
        <form id="lookup" action="" v-on:submit.prevent="onSubmit">
            <input type="text" ref="lookup" placeholder="Sequence or Part Number">
            <input type="submit" value="Search">
        </form>
    </div>
</template>

<script>
export default {
    name: 'Home',
    methods: {
        onSubmit() {
            let lookup = this.$refs.lookup.value;
            if ( ! this.invalidLookup(lookup) ) {
                // search
                console.log('begin search', lookup)
                this.$router.push({name: 'Frame', params: {frame: lookup}})
            } else {
                console.error('invalid lookup value')
                alert('Invalid Search Format\nValid characters are [a-Z][0-9][-#*]')
            }
        },
        invalidLookup(lookup) {
            let regex = new RegExp(/[^\w\d-#.]+/g)
            return regex.test(lookup)
        }
    }
}
</script>

<style>
#home-container {
    width: 100%;
    display: block;
    float: left;
}
#lookup {
    margin-top: 45px;
}
#lookup input {
    padding: 4px;
    font-size: 1rem;
}
#lookup input[type=text] {
    margin-right: 4px;
    width: 300px;
    text-align: center;
}
#lookup input[type=submit] {
    font-weight: bold;
}
.readme {
    width: 60%;
    margin: auto;
    margin-top: 25px;
    padding: 1rem;
    text-align: left;
    background: #eee;
    border: 1px groove black;
    border-radius: 3px;
}
.readme h1 {
    font-size: 1.8rem;
}
.readme h2 {
    font-size: 1.5rem;
}
.readme h3 {
    font-size: 1.2rem;
}
.readme p {
    font-size: 1rem;
}
@media only screen and (max-width: 400px) {
    h1 {
        font-size: 1.55rem;
    }
    .readme h1 {
        font-size: 1.5rem;
    }
    .readme h2 {
        font-size: 1.25rem;

    }
    .readme h3 {
        font-size: 1rem;
    }
    .readme p {
        font-size: .9rem;
    }
    #lookup {
        width: 80%;
        margin: auto;
        margin-top: 2rem;
    }
    #lookup input[type=text] {
        margin-bottom: 2rem;
    }
}
</style>