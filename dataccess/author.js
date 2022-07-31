let Author = [{
        id: 1,
        title: "Huxley"
    },
    {
        id: 2,
        title: "Dick"
    },
    {
        id: 3,
        title: "King"
    }
];

const getAll = (filter) => {
    let filtrado = Author;

    if (filter.title) {
        filtrado = filtrado.filter(e => e.title === filter.title)
    }

    if (filter.content) {
        filtrado = filtrado.filter(e => e.content.includes(filter.content))
    }

    if (filter.multitle) {
        filtrado = filtrado.filter(e => filter.multitle.split(',').includes(e.title))
    }

    if (filter.search) {
        filtrado = filtrado.filter(e => e.title.includes(filter.search) || e.content.includes(filter.search))
    }

    if (filter.multisearch) {
        const palabrasABuscar = filter.multisearch.split(',');
        filtrado = filtrado.filter(author => {
            const filtro = palabrasABuscar.filter(palabra => author.title.includes(palabra) || author.content.includes(palabra))
            return filtro.length > 0
        })
    }


    return filtrado
};

const getOne = (id) => { return Author.find((registro) => registro.id == id); }

const save = (body) => { Author.push(body); }

const borrar = (id) => {
    const index = Author.findIndex((registro) => registro.id == id);
    if (index > 0) {
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