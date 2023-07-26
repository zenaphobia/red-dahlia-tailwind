export const load = (async({fetch, params})=> {
    const res = await fetch(`https://red-dahlia-pb.fly.dev/api/collections/products/records?filter=url='${params.slug}'`)
    const _data = await res.json()
    const data = await _data.items[0]

    return data
})