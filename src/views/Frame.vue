<template>
    <div id="frame-container">
        <div>

        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Frame',
}
</script>

<style>
#frame-container {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template: auto / 3fr 9fr;
}
#frame-container div {
    width: 100%;
    height: 100%;
    display: block;
    float: left;
    border: 1px dotted blue;
}
</style>