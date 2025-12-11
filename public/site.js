
const getMenus=async()=>{
    const response=await fetch('/api/v1/menu')
    return await response.json()
}
const menu= getMenus()
console.log(menu)   

const loadMenus=async()=>{
    const menus=await getMenus();
    const container=document.getElementById('container')
    
const html=menus.forEach(item => {
    ` <div class="menu-card">
    <img src="${item.url}"  alt="Cheeseburger">
  <h3>${item.name}</h3>
  <p>${item.description}</p>
  <span>$${item.price}</span>
  </div>
    `
    container.innerHTML=html
});
   
}
loadMenus()