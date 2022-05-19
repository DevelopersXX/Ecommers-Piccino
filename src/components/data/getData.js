const productos = [
    {
        name: 'Maceta de Cemento Cuadrada',
        categories: 'Macetas de Cemento',
        price: 450,
        img:'./images/cuadrada.jpg',
        description:'Maceta de Cemento para Exterior e Interior',    
        stock: 15,
        id: 1,    
    },
    {
        name: 'Maceta de Cemento Hexagonal',
        categories: 'Macetas de Cemento',
        price: 600,
        img:'./images/hexagonal.jpg',
        description:'Maceta de Cemento para Exterior e Interior',    
        stock: 4,
        id: 2,
    },
    {
        name: 'Maceta de Cemento Triangular',
        categories: 'Macetas de Cemento',
        price: 550,
        img:'./images/triangular.jpg',
        description:'Maceta de Cemento para Exterior e Interior',  
        stock: 8,
        id: 3,
    },
    {
        name: 'Maceta de Madera',
        categories: 'Macetas de Madera',
        price: 750,
        img:'',
        description:'Maceta de Madera para Exterior e Interior',  
        stock: 18,
        id: 4,
    }
];

export const getData = (id) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            const query = id ? productos.find(producto => producto.id === id) : productos
            resolve(query)
        }, 2000)
    })
}