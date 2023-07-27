<template>
    <article>
        <header class="entry-header">
        <div class="entry-thumbnail">
            <NuxtLink :to="post.id" v-show="previewLoaded">
                <img :src="post.image" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="p1" @load="onImgLoad"/>
            </NuxtLink>
        </div>
        <h1 class="entry-title"><NuxtLink :to="post.id" rel="bookmark">{{ post.title }}</NuxtLink></h1>
        <div class="entry-meta">
            <span class="posted-on"><time class="entry-date published">{{ prettyDate }}</time></span>
        </div>
        </header>
        <div class="entry-summary">
            <p>{{ trimmedDescription }}<NuxtLink :to="post.id" class="more-link">Read more</NuxtLink>
            </p>
        </div>
    </article>
</template>

<script setup lang="ts">
import { Post } from "@/types/Post"

const props = defineProps({
    post: {
        type: Object as PropType<Post>,
        required: true
    },
});

const prettyDate: string = dateFormater(new Date(props.post.createdAt), '-');
const trimmedDescription = trimString(props.post.preview, 180);

let previewLoaded = ref(false);
function onImgLoad(){
    previewLoaded.value = true;
}
</script>