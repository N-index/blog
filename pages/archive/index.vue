<script setup>
import {useNow, useDateFormat, formatDate} from '@vueuse/core'

const formattedDate = dateStr => formatDate(new Date(dateStr), 'YYYY-MM-DD');

const paginationInfo = reactive({
    currentPage: 1,
    pageSize: 5,
})

const prev = () => {
    router.push({
        to: {
            name: route.name
        },
        query: {
            p: Math.max(1, currentPage.value - 1)
        }
    });
}
const next = () => {
    router.push({
        to: {
            name: route.name
        },
        query: {
            p: currentPage.value + 1
        }
    });
}

const {data: count} = await useAsyncData(() => queryContent('archive').count())

const router = useRouter();
const route = useRoute();
const currentPage = computed(() => {
    return isNaN(route.query.p) ? 1 : Math.max(1, parseInt(route.query.p));
})


const {data: articleList} = await useAsyncData(
    () => queryContent('archive')
        .limit(paginationInfo.pageSize)
        .skip((currentPage.value - 1) * paginationInfo.pageSize)
        .sort({date: -1})
        .find(),
    {
        watch: [currentPage]
    }
)

const notFound = computed(() => articleList.value?.length === 0)


const items = ref(["😏", "😐", "😑", "😒", "😕",])

function removeItem(toRemove) {
    items.value = items.value.filter((item) => item !== toRemove)
}

function add() {
    items.value.push(Math.random());
}
</script>

<template>

    <div class="w-95% mx-auto max-w-40rem">
        {{ currentPage }}
        <div>共{{ count }}篇文章</div>
        <template v-if="notFound">
            <p>No posts found.</p>
        </template>
        <template v-else>
            <template v-if="true">
                <button @click="prev">上一页</button>
                <button @click="next">下一页</button>
            </template>
            <div v-for="article in articleList" :key="article._path" class="post-item" data-blobity>
                <NuxtLink :to="article._path" class="post-link" data-no-blobity>
                    <h3 class="post-title">
                        {{ article.title }}
                    </h3>
                    <time class="post-time">{{ formattedDate(article.date) }}</time>
                </NuxtLink>
                <p class="post-desc">{{ article.description }}</p>
            </div>
        </template>
    </div>


    <template v-if="false">
        <div v-auto-animate>
            <div v-if="items.length % 2===0">元素111111111111</div>
            <div v-if="items.length %2!==0">元素2222222222222222</div>
        </div>


        <ul v-auto-animate>
            <li
                v-for="item in items"
                :key="item"
                @click="removeItem(item)"
            >
                {{ item }}
            </li>
        </ul>
        <button @click="add">add</button>
    </template>


</template>

<style scoped lang="scss">
.post-item {
    //padding: 8px 16px ;
    //background-color: #5e6365;
    border-radius: 6px;

    &:not(:last-child) {
        margin-bottom: 1.8rem;
    }
}

.post-link {
    display: flex;
    justify-content: space-between;
    color: #f3f4f6;
    text-decoration: none;

    .post-title {
        margin: 0;
        font-weight: 600;
    }

    .post-time {
        opacity: .5;
        font-size: .875rem;
        line-height: 1.25rem;
    }

}

.post-desc {
    margin: 0.2rem 0 0 0;

}

</style>