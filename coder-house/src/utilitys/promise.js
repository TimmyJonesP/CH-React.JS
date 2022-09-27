import productos from "./todo"

export const customPromise = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000) 
    })
}
export const categoryById = (id) => {
    return new Promise (resolve => {
        setTimeout(() =>{
            resolve(productos.find(producto => producto.id === id));

        }, 1000)
    })
}
export const categoryByCategory = (category) => {
    return new Promise (resolve => {
        setTimeout(() =>{
            resolve(productos.filter(producto => producto.category === category))
        }, 1000)
    })
}