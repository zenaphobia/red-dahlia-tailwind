export const load = (async({fetch})=> {
    const res = await fetch('https://red-dahlia-pb.fly.dev/api/collections/products/records/jn9gmic9s1072fp')
    const data = await res.json()

    return data
})