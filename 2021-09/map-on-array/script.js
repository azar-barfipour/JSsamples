const users=[
    {
        firstName :'Azar',
        lastName : 'Barfi',
        age : 30
    },
    {
        firstName :'Masoud',
        lastName : 'Arefi',
        age : 31
    },
    {
        firstName :'Anna',
        lastName : 'Barfi',
        age : 35
    }
]

const getUsers = users.map((user) => (user.age)
)
console.log(getUsers)