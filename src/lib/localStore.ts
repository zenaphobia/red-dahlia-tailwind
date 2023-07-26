import { writable } from "svelte/store";
import { browser } from "$app/environment"

interface ItemInterface {
    name:string,
    description:string,
    qty:number,
    price: number,
    img:string,
}

interface cart {
    items: ItemInterface[]
}

let storedCart: cart = {
    items: []
}

if(browser){
    if(localStorage.shoppingCart){
        console.log('something in storage')
        storedCart = JSON.parse(localStorage.shoppingCart)
    }
}

export const shoppingCart = writable(storedCart)

shoppingCart.subscribe((value) => {
    if(browser){
        localStorage.shoppingCart = JSON.stringify(value)
    }
})

