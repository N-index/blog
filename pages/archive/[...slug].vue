<template>
    <main class="w-95% mx-auto max-w-40rem relative gap-24px justify-center">
        <ContentQuery :path="$route.path" find="one" v-slot="{ data }">
            <ContentRenderer :value="data">

                <article class="w-640px">
                    <h1>{{ data.title }}</h1>
                    <time class="block text-right -mt-16px mb-24px"
                          style="opacity: 0.5;font-size: 0.875rem;line-height: 1.25rem;">
                        {{ formattedDateTime(data.date) }}
                    </time>

                    <Collapsiable v-if="data.body.toc && data.body.toc.links && data.body.toc.links.length" class="mb-32px">
                        <template #controller>
                            <div class="rounded-6px bg-dark px-16px py-8px flex justify-between items-center">
                                <span>Toc</span>
                                <!--                            <Icon name="charm:chevrons-right"></Icon>-->
                            </div>
                        </template>
                        <template #content>
                            <Toc class="w-250px flex-shrink-0" :toc="data.body.toc"></Toc>
                        </template>
                    </Collapsiable>

                    <ContentRendererMarkdown
                        :value="data"
                        class="markdown-body markdown-style"
                        data-color-mode="dark"
                    />
                </article>
                <div class="w-250px flex-shrink-0"></div>
            </ContentRenderer>
        </ContentQuery>


        <div v-if="surroundInfo" class="surround-container" data-no-blobity>
            <div class="surround-page">
                <NuxtLink v-if="surroundInfo[0]" data-no-blobity class="surround-link" :to="surroundInfo[0]._path">
                    上一篇
                </NuxtLink>
            </div>
            <div class="surround-page">
                <NuxtLink v-if="surroundInfo[1]" data-no-blobity class="surround-link" :to="surroundInfo[1]._path">
                    下一篇
                </NuxtLink>
            </div>
        </div>


    </main>

</template>

<script setup>
import {formatDate} from "@vueuse/core";
import mediumZoom from "medium-zoom";

const route = useRoute();

const {data: surroundInfo} = await useAsyncData(
    () => queryContent('archive')
        .only(['_path', 'title'])
        .without(['body'])
        .sort({date: -1})
        .findSurround(route.path)
)

const formattedDateTime = dateStr => formatDate(new Date(dateStr), 'YYYY-MM-DD hh:mm');

onMounted(()=>{
    mediumZoom('img');
})
</script>



