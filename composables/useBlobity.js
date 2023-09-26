import Blobity from "blobity";


export default (options) => {
    const blobityInstance = ref(null);
    onMounted(()=>{
        if (!blobityInstance.value){
            blobityInstance.value = new Blobity(options);
        }
    })
    return blobityInstance;
}