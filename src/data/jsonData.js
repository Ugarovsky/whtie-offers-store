const pohudalka = { 
    h1Tittle : 'PRODUCTOS EN OFERTA',
    h2Tittle : 'Aprovecha las excelentes ofertas en nuestros batidos adelgazantes',
    firstP : 'Te invitamos a navegar por nuestra sección, y ver mas productos, estamos seguros que encontraras el producto adecuado para ti.',
    redLabel : 'Adelgazar y bajar de peso puede ser una tarea difícil, pues hay que equilibrar una buena dieta con una práctica deportiva moderada; pero perder peso no es sólo quemar calorías, es aprender a comer y a llevar una rutina saludable. Lo deseado por todos es poder adelgazar sin necesidad de tener restricciones en la comida.',
    greyLabel : 'Le ofrecemos alimentos ricos en proteínas y bajos en carbohidratos y lípidos. Son adecuados para una dieta hiperprotectora, pero también para otras dietas similares, como el régimen de proteínas, el método Dukan, las dietas bajas en calorías y el método Atkins.',
}

const oProducts = [
    {
        id: 1,
        imgSrc: 'data:image/webp;base64,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',
        name: 'reduxcell Paris',
        firstP: `anti celulitis Crema con doble Cafeína + Ácido Hialurónico + Mar Uva – Crema reafiermante de cuerpo y el mejor eliminador de celulitis. Fabricado en Estados Unidos, No probado en animales. Producto vegano. Sin parabeno. Pruébalo ahora, le encantará. Mejor que cualquier crema caliente para la celulitis.`,
        secondP: `Celulitis eliminador para piernas, brazos, estómago, glúteos, en relieve. Las ondas en la piel piel en las piernas y el estómago es un problema vergonzoso todos enfrentan. Afortunadamente, la celulitis no es tan difícil como lo puedes pensar. Nuestra increíble crema anti-celulitis ofrece rápido, experimente los resultados. Todos los ingredientes (Veganos) como la cafeína y la uva de mar mejoran la circulación de la sangre, la quema de los depósitos grasos y fortalecer el tejido conectivo. Ácido Hialurónico trabaja a apretar y reafirmar la piel para una apariencia suave, juvenil.`,
        thirdP: `Drenaje linfático massage- reduxcell adelgazante corporal crema fórmula contiene 2 tipos de cafeína, la razón por la que puede ser utilizado para principal del masaje linfático (la única en Amazon), ya que su principal activo, la cafeína estimula los sistemas linfáticos de drenaje en los tejidos grasos mediante la eliminación de grasa acumulada, toxinas e innecesario sustancias que surjan durante el proceso de lipolisis, que puede impedir la microcirculación en vasos sanguíneos y la aparición de grasa y la celulitis todos juntos.`,
        fourthP: `Reparaciones y restaura desgastados piel- los ingredientes de esta crema reafirmante son todos específicamente elegidos para trabajar juntos para reparación de piel que ha perdido su elasticidad con el tiempo, que es lo que puede crear la apariencia de la celulitis en primer lugar. Proporcionando cafeína a la piel para darle algo de energía y uva de mar para reparación. La mejor Crema quemadora de grasa abdominal`,
        price: '52 $',
        
    },
    {
        id: 2,
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71T6ly5kS7L._SY355_.jpg',
        name: 'Crema aclarante y reafirmante',
        price: '42 $',
    },
    {
        id: 3,
        imgSrc: 'https://laopinionla.files.wordpress.com/2018/09/51gzlryp3sl-_sx522_-e1538097959441.jpg?quality=80&strip=all&w=940',
        name: 'Crema antioxidante Allumiere',
        price: '32 $',
    },
    {
        id: 4,
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61yUDuAZyGL._SX355_.jpg',
        name: 'Juvenique aclararante',
        price: '59 $',
    },
    {
        id: 5,
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71X40vbujfL._SY450_.jpg',
        name: 'Baebody Retinol Crema Hidratante',
        price: '62 $',
    },
    {
        id: 6,
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/51ld34mi%2BZL._SY355_.jpg',
        name: 'Crema para clarificar e iluminar de Now',
        price: '78 $',
    },
    {
        id: 7,
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61i71LklkwL._SX522_.jpg',
        name: 'Este crema rejuvenecedora de Lacome es de aplicación nocturna. Ideal para una noche de hidratación y humectación',
        price: '56.5 $',
    },
    {
        id: 8,
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41%2Bz7IQRwbL.jpg',
        name: 'Esta crema antiedad reduce dramáticamente los poros abiertos. Sus componentes abordan todos los signos de la edad y reduce las arrugas',
        price: '33.3 $'
    },
    {
        id: 9,
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/616D-HhDzDL._SX522_.jpg',
        name: 'Esta crema rica en colágeno y vitaminas ayuda a reafirmar la piel flácida del cuello y a combatir las arrugas',
        price: '88 $',
    },
    {
        id: 10,
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81XHeK75h7L._SX522_.jpg',
        name: 'Esta crema tiene una penetración profunda en las capas de la piel, generando resultados rápidos gracias a su componente de vitamina B3',
        price: '42 $',
    },
    {
        id: 11,
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71ph2iSp6qL._SX522_.jpg',
        name: 'Esta crema aumenta la producción de colágeno para mejorar la elasticidad y aspecto de la piel. Es de aplicación diurna',
        price: '49 $',
},
]



export {pohudalka,oProducts};