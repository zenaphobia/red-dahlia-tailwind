<script lang="ts">
    export let img:string
    export let collectionName:string
    export let collectionFluff:string
    export let collectionCategory:string
</script>
<a href="#" class="flex flex-col w-full h-2/3 lg:w-1/2 lg:h-1/2 relative cursor-pointer hover:grayscale ease-in-out duration-300 px-[2px]">
    <div class="flex flex-col w-full h-full overflow-hidden">
        <img src={img} class="object-cover h-full" alt="">
    </div>
    <div class="flex flex-row justify-around items-center w-full absolute bottom-0 left-0 py-4 bg-white/90 backdrop-blur-sm">
        <div class="flex flex-col">
            <p class="italic font-lighta text-gray-600">{collectionFluff}</p>
            <h3 class=" text-3xl font-semibold">{collectionName}</h3>
            <span class="border-solid border-gray-600 border-2 py-1 px-4 my-2 rounded-full text-xs text-gray-600 text-center w-max">{collectionCategory}</span>
        </div>
        <div>
            <button class="flex bg-red-dahlia text-white py-4 px-6 uppercase text-sm active:scale-95 scale-100 ease-in-out duration-150">view collection</button>
        </div>
    </div>
</a>
