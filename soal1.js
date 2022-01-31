const myUsers = [
    { name: 'seahorses', likes: 'ocean' },
    { name: 'shrimp', likes: 'ocean' },
    { name: 'turtle', likes: 'ocean' },
]

const usersByLikes = myUsers.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 10;

    return container;
})

console.log(usersByLikes);