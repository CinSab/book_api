let Book = [
   {
    id: 1,
    title: "Un mundo feliz",
    author: "Huxley",
    genre: "Ciencia ficcion",
    content: "buen libro",
    publishedDate: 1932,
    active: true,
    createDate: null,
    updateDate: null
  },
  {
    id: 2,
    title: "The Dome",
    author: "Stephen King",
    genre: "Ciencia ficcion",
    content: "buen libro",
    publishedDate: 2009,
    active: true,
    createDate: null,
    updateDate: null
  },
  {
    id: 3,
    title: "El lobo estepario",
    author: "Hernam Hesse",
    genre: "Ciencia ficcion",
    content: "buen libro",
    publishedDate: 1927,
    active: true,
    createDate: null,
    updateDate: null
  },
  {
    id: 4,
    title: "Ubik",
    author: "Philip K. Dick",
    genre: "Ciencia ficcion",
    content: "buen libro",
    publishedDate: 1969,
    active: false,
    createDate: null,
    updateDate: null
  },
];

const getAll = (filter) => { 
  let filtrado = Book;

  if(filter.title){
    filtrado = filtrado.filter(b => b.title == filter.title)
  }

  if(filter.active){
    filtrado = filtrado.filter(b => b.active == filter.active)
  }
  
  if(filter.publishedDate){
    filtrado = filtrado.filter(b => b.publishedDate == filter.publishedDate)
  }

  if(filter.author){
    filtrado = filtrado.filter(b => b.author.search(filter.author) > -1)
  }

  if(filter.genre){
    filtrado = filtrado.filter(b => b.genre.search(filter.genre) > -1)
  }

  if(filter.content){
    filtrado = filtrado.filter(b => b.content.search(filter.content) > -1)
  }

  if(filter.search){
    filtrado = filtrado.filter(b => (b.title.search(filter.search) > -1 || b.content.search(filter.search) > -1))
  }
  
  return filtrado
}


const getOne = (id) => { return Book.find((registro) => registro.id == id);}

const save = (body) => { Book.push(body);}

const borrar = (id) => {
  const index = Book.findIndex((registro) => registro.id == id);
  if (index > 0) {
    Book.splice(index, 1);
    return true
  }
  return false
}

const update = (id, body) => { 
  const index = Book.findIndex((registro) => registro.id == id);
  if (index >= 0) {
    Book[index] = body;
    return true
  } 
  return false
}

module.exports = { getAll, getOne, save, borrar, update};
