const aCar = {
    owner: "Joe Bloggs",
    previous_owners: [
        "Pat Smith - 1 Main Street",
        "Sheila Dwyer - 2 High Street"
    ],
    type: {
        make: "Toyota ",
        model: "Corolla",
        cc: 1.8
    },
    registration : {
        year: "201",
        county_code: "WD",
        number: "1058"
    },
    mileage: 10000,
    colour: {
        exterior_colour: "red",
        interior_fabric: {
            texture: "leather",
            shade: "cream"
        }
    }
};

console.log(aCar.owner + ' drives a ' + aCar.type.make);
console.log("Reg. = " + aCar.registration.year + "-" + aCar.registration.county_code + "-" + aCar.registration.number);
console.log("It is a " + aCar.colour.exterior_colour + " car, " + aCar.mileage + " mileage, with " + aCar.colour.interior_fabric.texture + " interior");
console.log('First owner : ' + aCar.previous_owners[0] );