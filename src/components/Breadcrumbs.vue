<template>
  <nav id="breadcrumbs" class="breadcrumbs">
      <span 
            v-for="(breadcrumb, idx) in breadcrumbList"
            :key="idx"
            @click="routeTo(idx)"
            :class="{'linked': !!breadcrumb.link, 'current': !breadcrumb.link}">
            {{ breadcrumb.name }}
      </span>
  </nav>
</template>

<script>
export default {
    name: 'Breadcrumbs',
    data() {
        return {
            breadcrumbList: []
        }
    },
    watch: {
    '$route' () {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    }
    },
    methods: {
        routeTo(index) {
        if (this.breadcrumbList[index].link) this.$router.push(this.breadcrumbList[index].link)
        }
    },
}
</script>

<style>
.breadcrumbs {
    width: 100%;
    display: block;
    padding: 1rem 11%;
    text-align: left;
}
.linked {
    cursor: pointer;
    color: black;
    font-weight: 500;
}
.current::before {
    content: '/'
}
</style>