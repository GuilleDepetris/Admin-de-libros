class BookService {
    constructor(){
        this.URI = 'https://admin-de-libros-zr19.vercel.app/api/books';
    }
    async getBooks(){
        const response = await fetch(this.URI)
        const books = await response.json();
        return books;
    }
    async postBook(book){
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
        console.log(data);
    }
    async deleteBook(bookId){
        const res = await fetch(`${this.URI}/${bookId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data);
    }
}

export default BookService;