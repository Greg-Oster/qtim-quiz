<template>
    <div id="content" class="site-content">
        <div id="primary" class="content-area column full">
            <main id="main" class="site-main">
                <div class="grid portfoliogrid">
                    <BlogPostItem
                        v-for="post in postData"
                        :key="post.id"
                        :post="post"
                    />
                </div>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Post } from "@/types/Post"

const props = defineProps({
    postData: {
        type: Object as PropType<Post[] | undefined>,
        required: true
    },
})
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 25px;
}
</style>