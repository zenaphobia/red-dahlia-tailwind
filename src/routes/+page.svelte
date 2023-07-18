<script>
    export let data
    import header from '../assets/red_dhalia_04_lWN25vQmeU.jpeg'
	import ProductPreview from '../components/ProductPreview.svelte';
</script>
<section class="flex flex-col h-screen">
    <div class="w-full h-full overflow-hidden">
        <img src={header} class="object-cover w-full h-full grayscale" alt="">
    </div>
</section>
<section class="h-max">
    <div class="flex flex-col px-4 lg:px-96 py-24 gap-2">
        <div class="flex flex-col gap-2">
            <h3 class="font-serif text-5xl font-bold text-red-dahlia">Red Dahlia</h3>
            <span class="text-gray-400 font-serif italic">[ dal-yuh, dahl- or, especially British, deyl- ]</span>
        </div>
        <p class="text-gray-500">Red dahlias are symbols of strength and power, perfect for sending to someone whenever they could use a little extra strength. For example, if they're unwell or about to go to a job interview. Red flowers in general tend to symbolise love and passion, and this is also true of red dahlias.</p>
    </div>
</section>

<section class="flex flex-row flex-wrap h-screen">
    <!-- export let productName:string
    export let smallDescription:string | undefined  = undefined
    export let price:string
    export let url:string
    export let productCollection:string
    export let headerImage:string
    export let secImage:string -->
    {#each data.items as item}
        <ProductPreview
        productName={item.name}
        price={item.price}
        url={`/product/${item.url}`}
        productCollection={item.collection}
        headerImage={`https://red-dahlia-pb.fly.dev/api/files/${item.collectionId}/${item.id}/${item.featured_image}?600x400`}
        secImage={`https://red-dahlia-pb.fly.dev/api/files/${item.collectionId}/${item.id}/${item.gallery[0]}`}
        />
    {/each}
</section>
<!-- <section class="flex flex-row flex-wrap h-screen">
    <CategoryItem img={image1} collectionName="COSMETICAS" collectionFluff="Luxurious" collectionCategory="2023 Spring Collection"/>
    <CategoryItem img={image2} collectionName="UTENSILAS" collectionFluff="World-Class" collectionCategory="2023 Spring Collection"/>
    <CategoryItem img={image3} collectionName="CHATELS" collectionFluff="Divine" collectionCategory="2022 Winter Collection"/>
    <CategoryItem img={image5} collectionName="CONSUMABLES" collectionFluff="Tasteful" collectionCategory="2022 Fall Collection"/>
</section> -->

{(console.log(data))}