<template>
<div id="page">
	<div class="container">
		<div v-if="posts" class="wrapper">
			<BlogPostList :post-data="paginatedPosts"/>
			<CommonPagination
				:elements-per-page="9"
				:total-elements="posts.length"
				@pageChange="handlePageChange"
			/>

        </div>
        <div v-else>
            <p>No posts!</p>
        </div>
	</div>
</div>
</template>

<script setup lang="ts">
import { Post } from "@/types/Post";


const { data: posts } = await useAsyncData<Post[]>(
    'posts',
    () => $fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/'),
)


const limit = 9;
const offset = 0;
const currentPage = ref(0);
let numberOfPages: number;
let paginatedPosts = ref<Post[]>();

if (posts.value){
	paginatedPosts.value = posts.value.slice(offset, limit);
	numberOfPages = Math.ceil(posts.value.length/limit);
}


const handlePageChange = (from: number, to: number) => {
	if (posts.value){
		paginatedPosts.value = posts.value.slice(from, to);
	}
}

</script>

