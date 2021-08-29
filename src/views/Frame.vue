<template>
    <div id="frame-container">
        <div class="layout" style="border-right: 1px solid silver;">
            <div id="frame-name">{{ frame }}</div>
            <ul id="found-in">
                <li>Component of</li>
                <li class="sequence">
                    <a href="#">W1001</a>
                </li>
                <li class="sequence">
                    <a href="#">W1002</a>
                </li>
                <li class="sequence">
                    <a href="#">W1003</a>
                </li>
                <li class="sequence">
                    <a href="#">W1004</a>
                </li>
            </ul>
        </div>
        <div class="layout">
            <div id="information">
                <a id="download" href="#">download the pdf here</a>
                <div id="preview">
                    pdf preview
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Frame',
    props: [
        'frame'
    ],
    mounted() {
        // if the frame is not in the database, then redirect to 404

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
.layout {
    width: 100%;
    height: 100%;
    display: block;
    float: left;
}
#information {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template: 5% 95% / auto;
    padding: 1rem;
}
#preview {
    width: 100%;
    height: 100%;
    display: block;
    border: 1px solid #ddd;
    padding-top: 35%;
}
#download {
    display: block;
    width: 100%;
    height: 100%;
}
#found-in {
    list-style: none;
    width: 100%;
    margin-top: 1rem;
}
#found-in * {
    border-bottom: 1px solid silver;
}
#found-in:last-child {
    border: none;
}
#frame-name {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem;
}
@media only screen and (max-width: 600px) {
    #frame-container {
        grid-template: 1fr 3fr auto / auto;
    }
    #found-in {
        width: 80%;
        margin: 0 auto;
    }
    #found-in * {
        border-bottom: none;
    }
}
</style>