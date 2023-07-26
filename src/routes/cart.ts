interface ItemInterface {
    name:string,
    description:string,
    qty:number,
    img:string,
}

export class ShoppingCartManager {
    items : ItemInterface[] = []

    addItem(item:ItemInterface){
        if(this.items){
            this.items.push(item)
        }
        else {
            this.items = []
            this.items.push(item)
        }
    }
    deleteItem(item:string){
        if(this.items){
            this.items = this.items.filter(x => x.name !== item)
        }
    }
    updateItem(item:string, add:number){
        if(this.items){
            const index:number = this.items.indexOf(item)
            this.items[index].qty += add
        }
    }
    set(items:ItemInterface[]){
        this.items = items
    }
}
