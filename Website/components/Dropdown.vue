<template>
    <div>
        <v-select :items="machines.map((i) => i.model)"></v-select>
    </div>
</template>

<script>
export default {
    async mounted(){
        console.log(this.machines)
    },
    props: ['machines']
}
</script>

<style>

</style>