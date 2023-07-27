<script lang="ts">
    import "../app.css";
    import { shoppingCart } from "$lib/localStore";
    import { isMenuOpen } from '$lib/controls'
    import { slide } from 'svelte/transition';
    import logo  from './../assets/rd-logo.svg'

    const currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })

    $: subMenuStyles = $isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'

    $: priceStyles = $shoppingCart?.items?.length > 0 ? 'opacity-100' : 'opacity-50'

    interface ItemInterface {
        name:string,
        description:string,
        qty:number,
        price: number,
        img:string,
    }

    interface cart {
        items: ItemInterface[],
        menuTriggered: boolean
    }


    function removeFromCart(item:string){
        const newItems = $shoppingCart.items.filter(x => x.name !== item)
        $shoppingCart.items = newItems
    }

    function calculateTotal(array:cart): number{
        if(array){
            return array.items.reduce((acc, curr) => acc + (curr.price * curr.qty) , 0)
        }
        return 0
    }

    function incrementQty(index:number){
        $shoppingCart.items[index].qty += 1
    }

    function decrementQty(index:number){
        //remove from cart if less than 1
        if($shoppingCart.items[index].qty === 1){
            const filter = $shoppingCart.items[index].name
            $shoppingCart.items = $shoppingCart.items.filter(x => x.name !== filter)
        }
        else {
            $shoppingCart.items[index].qty -= 1
        }
    }


</script>
<header class="flex h-16 shadow-lg relative z-auto">
    <nav class="flex items-center w-full">
        <ul class="flex w-full flex-row justify-around items-center">
            <li><a href="/"><img src={logo} class="w-20" alt="Red Dahlia Logo"></a></li>
            <li></li>
            <li class="flex w-max h-max hover:bg-gray-200 items-center p-2 rounded-full ease-in-out duration-150 hover:cursor-pointer" on:click={()=>{$isMenuOpen = true}}><a href="#" class="flex items-center text-gray-800 w-max"><iconify-icon icon="mdi:shopping" width="30px"></iconify-icon></a></li>
        </ul>
    </nav>
</header>

<!-- Sidebar Menu -->

<aside class="flex flex-col gap-2 fixed w-full lg:w-1/3 h-screen right-0 top-0 duration-500 ease-out-expo bg-white/95 backdrop-blur-sm z-30 drop-shadow-md {subMenuStyles}">
    <button class="flex justify-center my-8 text-gray-400 hover:text-black w-full self-center duration-200 ease-in-out" on:click={()=>{$isMenuOpen = false}}><iconify-icon icon="formkit:arrowright" width="30px"></iconify-icon></button>
    <div class="flex flex-col w-full h-full gap-8 overflow-auto">
        <div class="flex flex-col flex-shrink-0 items-center justify-center mt-4 gap-8">
            {#if $shoppingCart.items.length > 0}
                {#each $shoppingCart.items as item, index }
                    <div class="flex flex-col w-3/4 h-max min-h-max justify-center overflow-hidden p-4" transition:slide|local>
                        <div class="flex flex-row w-full h-full gap-8">
                            <div class="h-32 w-52 overflow-hidden">
                                <img src={item.img} loading="lazy" class="object-cover w-full h-full" alt={item.name}>
                            </div>
                            <div class="flex flex-col w-max my-2 gap-1 self-center">
                                <h6 class="text-">{item.name}</h6>
                                <span class="text-xs font-semibold">{currency.format(item.price)}</span>
                                <span class="text-xs">QTY: {item.qty}</span>
                                <button class="text-xs mt-4 w-max" on:click={()=>{removeFromCart(item.name)}}>REMOVE</button>
                            </div>
                            <div class="flex flex-row w-max items-center justify-center p-1 gap-4">
                                <button class="flex items-center text-gray-600 hover:text-black duration-200 ease-out-expo h-max" on:click={()=>{incrementQty(index)}}><iconify-icon icon="simple-line-icons:plus" width="20px"></iconify-icon></button>
                                <button class="flex items-center text-gray-600 hover:text-black duration-200 ease-out-expo h-max" on:click={()=>{decrementQty(index)}}><iconify-icon icon="simple-line-icons:minus" width="20px"></iconify-icon></button>
                            </div>
                        </div>
                    </div>
                {/each}
            {/if}
        </div>
        <hr class="flex self-center w-4/5">
        <div class="flex flex-row gap-2 justify-center items-center">
            <h6 class="font-xs {priceStyles} duration-200 ease-in-out">Total: { currency.format(calculateTotal($shoppingCart)) } </h6>
        </div>
    </div>
</aside>
<slot/>
