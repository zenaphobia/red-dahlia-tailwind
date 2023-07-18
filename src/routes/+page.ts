export const load = (async({fetch})=> {
    const res = await fetch('https://red-dahlia-pb.fly.dev/api/collections/products/records/')
    const data = await res.json()

    return data
})