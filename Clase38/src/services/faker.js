import { faker } from "@faker-js/faker";

const generateFaker = () => {
    const array = [];
    for (let i = 0; i <= 4; i++) {
        const product = {
            nombre: faker.vehicle.vehicle(),
            thumbnail: faker.image.transport(),
            precio: faker.datatype.number()
        }
        array.push(product)
    }
    console.log(array);

    return array;
}

export default generateFaker;