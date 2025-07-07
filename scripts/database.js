export const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        },
        {
            id:3,
            name: "Fart Man",
            power: "Fart Power"
        }
    ],
    villains : [
    {
        id: 1,
        name: "Doctor Dread",
        power: "Mind Control"
    },
    {
        id: 2,
        name: "Shadow Wraith",
        power: "Invisibility and Shadow Travel"
    },
    {
        id: 3,
        name: "Blightstorm",
        power: "Poisonous Gas Manipulation"
    }
]
}

export const getVillains = () => {
    return structuredClone(database.villains);
}