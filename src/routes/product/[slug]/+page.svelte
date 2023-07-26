<script lang="ts">
    import { shoppingCart } from "$lib/localStore";
    import { isMenuOpen } from '$lib/controls'
    export let data

    $isMenuOpen = false
    let current_image = data.gallery[0]
    let dynamic_styles = 'hidden'

    interface ItemInterface {
        name:string,
        description:string,
        qty:number,
        price: number,
        img:string,
    }

    const currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    function swapImage(index:number){
        dynamic_styles = 'flex'
        current_image = data.gallery[index]
    }

    function clickOutside(node:HTMLElement) {
        const handleClick = (event) => {
        if (!node.contains(event.target)) {
            node.dispatchEvent(new CustomEvent('outclick'));
            }
        };

        document.addEventListener('click', handleClick, true);

        return {
            destroy() {
            document.removeEventListener('click', handleClick, true);
            }
        };
    }

    function updateInventory(item:string){
        if($shoppingCart.items.some(x => x.name === item)){
            const i = $shoppingCart.items.findIndex(x => x.name === item)
            $shoppingCart.items[i].qty += 1
            console.log('Item found, updated')
        }
        else {
            let item:ItemInterface = {
                name: data.name,
                qty: 1,
                img: `https://red-dahlia-pb.fly.dev/api/files/${data.collectionId}/${data.id}/${data.featured_image}?thumb=300x250`,
                price: data.price,
                description: data.description
            }
            console.log('Adding item to store')
            $shoppingCart.items = [...$shoppingCart.items, item]
        }
    }

    function openMenu(){
        $isMenuOpen = true
    }

</script>

<main class="flex flex-col lg:flex-row w-full lg:h-full p-6 gap-8 lg:gap-0 fade-in">
    <div class="lg:w-3/5 lg:h-3/5 overflow-hidden">
        <div class="flex w-full h-1/3 overflow-hidden">
            <img
                class="object-cover w-full h-full max-h-[700px]"
                src={`https://red-dahlia-pb.fly.dev/api/files/${data.collectionId}/${data.id}/${data.featured_image}?thumb=1080x728`}
                alt=""
             >
        </div>
        <div class="flex flex-row my-2 gap-2 overflow-hidden">
            {#each data.gallery as image, index}
            <div class="w-full h-[200px]">
                <img src={`https://red-dahlia-pb.fly.dev/api/files/${data.collectionId}/${data.id}/${image}?thumb=600x400`}
                class=" cursor-zoom-in object-cover w-full h-full"
                on:click={()=>{swapImage(index)}}
                alt="">
            </div>
            {/each}
        </div>
    </div>
    <div class="flex flex-col lg:h-2/5 lg:p-24 lg:w-2/5 gap-6">
        <div class="flex flex-col gap-2">
            <h1 class="text-2xl font-medium">{data.name}</h1>
            <p class="text-xs text-gray-500 border-2 border-gray-500 border-solid w-max p-1 px-2">{data.collection}</p>
        </div>
        <div class="flex flex-row gap-2 text-gray-600">
            <div class="flex flex-row">⋆⋆⋆⋆⋆</div>
            <span>-</span>
            <span>213 Reviews</span>
        </div>
        <p>{data.description}</p>
        <div class="flex flex-col gap-2 my-8">
            <h3 class="text-lg">Description</h3>
            <hr>
            <p class="text-sm text-gray-800">Materials matter, and that’s why we don’t spare any expense.

                Our signature cosmetic is made of a blend of Red Dahlia flower extract and Mara Leopard blood. Combined, it makes an unrivaled pigment, texture, and quality.
            </p>
        </div>
        <button class="flex justify-between bg-red-dahlia w-full items-center text-white text-center py-4 px-6 uppercase text-sm active:scale-95 scale-100 ease-in-out duration-150 hover:bg-red-dahlia-active"
        on:click={()=>{updateInventory(data.name); openMenu()}}
        >
            <span>Add to shopping bag</span>
            <span>{currency.format(data.price)}</span>
        </button>
    </div>
</main>

<!-- This will be the lightgallery -->
<aside class="flex fixed top-0 left-0 translate-x-0 translate-y-0 w-full h-full p-4 lg:p-24 bg-white/90 backdrop-blur-sm {dynamic_styles} z-20">
    <div class="flex items-center w-full h-full">
        <img src={`https://red-dahlia-pb.fly.dev/api/files/${data.collectionId}/${data.id}/${current_image}?'1280x1000'`} use:clickOutside on:outclick={()=>{dynamic_styles = 'hidden'}}  class="object-cover" alt="">
    </div>
</aside>