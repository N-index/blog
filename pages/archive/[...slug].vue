<template>
    <main class="relative flex gap-24px justify-center">

        <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
            <ContentRenderer data-1 :value="data">
                <Toc class="w-250px flex-shrink-0 " :toc="data.body.toc"></Toc>
                <article class="w-640px">
                    <NuxtLink to="/archive">Back</NuxtLink>

                    <h1>{{ data.title }}</h1>
                    <time>{{data.date}}</time>

                    <ContentRendererMarkdown
                        :value="data"
                        class="markdown-body markdown-style"
                        data-color-mode="dark"
                    />
                </article>
                <div class="w-250px flex-shrink-0 "></div>
            </ContentRenderer>
        </ContentQuery>

        <ContentQuery
            :path="$route.path"
            find="surround"
            :only="['_path', 'title']"
            :without="['body']"
            :sort="{date: -1}"
            v-slot="{ data }"
        >
<!--            <pre>{{ data }}</pre>-->
            <!--            <ContentRenderer :value="data">-->
            <!--                <h1>{{ data.title }}</h1>-->
            <!--                <ContentRendererMarkdown :value="data" class="markdown-body markdown-style" data-color-mode="dark" style="width: 680px" />-->
            <!--            </ContentRenderer>-->
            <div v-if="false" data-no-blobity>
                <button data-no-blobity1 @click="prev">上一篇</button>
                <button data-no-blobity1 @click="next">下一篇</button>
            </div>
        </ContentQuery>


    </main>

</template>

<script setup>
const route = useRoute();
// const


const {data} = await useAsyncData(
    () => queryContent('archive')
        .only(['_path', 'title'])
        .without(['body'])
        .sort({date: -1})
        .findSurround(route.path)
)

</script>


