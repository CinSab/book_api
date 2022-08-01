let Author = [{
        id: 1,
        author: "Huxley"
    },
    {
        id: 2,
        author: "Dick"
    },
    {
        id: 3,
        author: "King"
    }
];

const getAll = (filter) => {
    let filtrado = Author;

    if (filter.author) {
        filtrado = filtrado.filter(e => e.author === filter.author)
    }

    return filtrado
};

const getOne = (id) => { return Author.find((registro) => registro.id == id); }

const save = (body) => { Author.push(body); }

const borrar = (id) => {
    const index = Author.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        Author.splice(index, 1);
        return true
    }
    return false
}

const update = (id, body) => {
    const index = Author.findIndex((registro) => registro.id == id);
    if (index >= 0) {
        Author[index] = body;
        return true
    }
    return false
}

module.exports = { getAll, getOne, save, borrar, update };
