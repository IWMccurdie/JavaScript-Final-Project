const elemnents={
    url:document.getElementById('url'),
    name:document.getElementById('name'),
    description:document.getElementById('description'),
    price:document.getElementById('price')
}
const getMenus=async()=>{
    const response=await fetch('/api/v1/')
    return await response.json()
}
console.log(getMenus())