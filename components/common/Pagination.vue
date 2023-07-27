<template>
    <nav class="pagination" v-show="showPagination">
        <a
            class="next page-numbers"
            href="#"
            @click="previousPage"
            v-show="showPrev"
        >« Prev</a>

        <a
            class="page-numbers"
            :class="{'current': current === num}"
            v-for="num, i in totalPages"
            :key="i"
            @click="setPage(num)"
        >{{ num }}</a>

        <a
            class="next page-numbers"
            href="#"
            @click="nextPage"
            v-show="showNext"
        >Next »</a>
    </nav>
</template>

<script setup lang="ts">

const props = defineProps({
    totalElements: {
        type: Number,
        required: true,
    },
    elementsPerPage: {
        type: Number,
        required: true,
        default: 12,
    }
})
const emit = defineEmits(['pageChange'])

let current = ref(1);
let from = computed(() => {
    return (current.value - 1) * props.elementsPerPage;
})
let to = computed(() => {
    return (current.value - 1) * props.elementsPerPage + props.elementsPerPage;
})

function previousPage() {
    current.value--;
    emit('pageChange', from.value, to.value);
}

function nextPage() {
    current.value++;
    emit('pageChange', from.value, to.value);
}

function setPage(pageNum: number) {
    current.value = pageNum;
    emit('pageChange', from.value, to.value);
}

const totalPages = Math.ceil(props.totalElements / props.elementsPerPage);

const showNext = computed(() => {
    return totalPages > current.value ? true : false;
})

const showPrev = computed(() => {
    return current.value > 1 ? true : false;
})

const showPagination = computed(() => {
   return totalPages === 1 ? false : true;
})
</script>

<style scoped>
.page-numbers {
    cursor: pointer;
}
</style>