using System.Collections.Generic;

namespace XLIB.Models;

// child
public class Book
{
    public int Id { get; set; }
    required public string Description { get; set; }
    required public string Name { get; set; }

    public int AuthorId { get; set; } // foreign Key
    required public Author Author { get; set; } // optional reference navigation 
}

// parent
public class Author
{
    public int Id { get; set; }
    required public string FirstName { get; set; }
    required public string LastName { get; set; }

    public ICollection<Book>? Books { get; } = new List<Book>(); // collection navigation containing 
}

// public class User {
//     public string Email {get; set;}
//     public string Username {get; set;}
//     public string Password {get; set;}
//     public string AccountType {get; set;}
//     public ICollection<Book>s {get; } = new List<Book>();
// }