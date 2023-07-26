<script lang="ts">
    //import an entire object instead of individual props?...
    export let productName:string
    export let price:number
    export let url:string
    export let productCollection:string
    export let headerImage:string
    export let secImage:string

    const currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    let isHovering = false

    $: primaryImageStyle = isHovering ? 'opacity-0' : 'opacity-100'

</script>
<a href={url} class="flex flex-col flex-grow w-full lg:w-1/3 h-[500px] relative px-[1px] py-4 lg:py-0" on:pointerenter={()=>{isHovering = true}} on:pointerleave={()=>{isHovering = false}}>
    <div class="flex w-full h-full overflow-hidden relative">
        <img src={headerImage} class="w-full h-full object-cover ease-out duration-500 z-10 {primaryImageStyle}" loading="lazy" alt="">
        <div class="flex absolute w-full h-full self-center z-0">
            <img src={secImage} class="w-full h-full object-cover" alt="">
        </div>
    </div>
    <div class="flex flex-col justify-around items-center w-full absolute bottom-0 left-0 py-4 bg-white/90 backdrop-blur-sm gap-4 px-8 z-20">
        <div class="flex flex-row justify-around w-full items-center">
            <div class="flex flex-col w-full">
                <h3 class="text-lg font-medium">{productName}</h3>
                <span class="text-xs text-gray-600">{productCollection}</span>
                <!-- <span class="border-solid border-gray-600 border-2 py-1 px-4 my-2 rounded-full text-xs text-gray-600 text-center w-max">{collectionCategory}</span> -->
            </div>
            <h5 class="">{currency.format(price)}</h5>
        </div>
        <div class="flex w-full text-center justify-center items-center">
            <button class="flex bg-red-dahlia w-full items-center justify-center text-white text-center py-4 px-6 uppercase text-sm active:scale-95 scale-100 ease-in-out duration-150"><span>VIEW PRODUCT</span></button>
        </div>
    </div>
</a>