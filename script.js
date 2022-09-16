//1. For the given JSON iterate over all loops(for,for in)
var books = [
    {
        title: "Lord of the Rings",
        year: 1994,
        pages: 3000
    },
    
    {
        title: "1984",
        year: 1984,
        pages: 2000
    },
    {
        title: "Art of war",
        year: 2000,
        pages: 5000
    }
 ]
 //for loop
 for (var i = 0; i < books.length; i++)
{ console.log(books[i].year);
 //for in
 for(var key in books[i])
 {
 console.log(key,books[i][key]);
}}