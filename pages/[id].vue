<template>
    <div>
        <main id="main" class="site-main" role="main" v-if="post">
				<article>
				<header class="entry-header">
				<h1 class="entry-title">{{ post.title }}</h1>
				<div class="entry-meta">
						<span class="posted-on"><time class="entry-date published">{{ prettyDate }}</time></span>
					</div>
				<div class="entry-thumbnail">
					<img :src="post.image">
				</div>
				</header>
				<div class="entry-content">
					<p>{{ post.description }}</p>
				</div>
				</article>
				<nav class="navigation post-navigation" role="navigation">
				<h1 class="screen-reader-text">Post navigation</h1>
				<div class="nav-links">
					<div class="nav-previous">
						<button @click="$router.go(-1)"><span class="meta-nav">←</span> Back!</button>
					</div>
				</div>
				</nav>
				</main>
        <div v-else class="site-main">
          <p>No such post!</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Post } from "@/types/Post"

const route = useRoute()

definePageMeta({
  validate: async (route) => {
    return /^\d+$/.test(String(route.params.id))
  }
})

const { data: post } = await useAsyncData<Post>(
    'post',
    () => $fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`),
)

let prettyDate: string;
if (post.value) {
  prettyDate = dateFormater(new Date(post.value.createdAt), '-');
}

</script>

