using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using XLIB.Models;
using XLIB.Repository;
namespace XLIB.Controllers;

[ApiController]
[Route("XLIB/[controller]")]
public class BooksController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public BooksController(ApplicationDbContext context)
    {
        _context = context;
    }


    [HttpPost("addBook")]
    public ActionResult addBook(BookDto bookDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }

        Book b = new Book()
        {
            Name = bookDto.Name,
            Description = bookDto.Description,
            Author = new Author() { FirstName = bookDto.Author.FirstName, LastName = bookDto.Author.LastName }
        };

        _context.books.Add(b);
        _context.SaveChanges();

        return Ok();
    }

    [HttpGet("GetBook")]
    public ActionResult GetBook()
    {
        var b = _context.books.Include(b => b.Author).First();
        BookDto bd = new BookDto()
        {
            Name = b.Name,
            Description = b.Description,
            Author = new AuthorDto() {FirstName = b.Author.FirstName, LastName = b.Author.LastName}
        };
        return Ok(bd);
    }

    [HttpGet("SeedData")]
    public ActionResult SeedData()
    {
        _context.books.Add(new Book()
        {
            Name = "CodeBug",
            Description = "a book that explores Coding bugs!",
            Author = new Author() { FirstName = "alex", LastName = "jones" }
        });

        _context.books.Add(new Book()
        {
            Name = "CodeGods",
            Description = "a book that explores Coding Gods!",
            Author = new Author() { FirstName = "cena", LastName = "star" }
        });

        _context.books.Add(new Book()
        {
            Name = "CodePhase",
            Description = "a book that explores Coding Phases in your life!",
            Author = new Author() { FirstName = "sarah", LastName = "the explorer" }
        });

        _context.books.Add(new Book()
        {
            Name = "CodeTrick",
            Description = "a book that explores Coding Tricks!",
            Author = new Author() { FirstName = "jason", LastName = "Trickster" }
        });

        _context.books.Add(new Book()
        {
            Name = "CodeMan",
            Description = "a book that explores the brain of a coding man!",
            Author = new Author() { FirstName = "master", LastName = "mind" }
        });

        _context.SaveChanges();

        return Ok();
    }
}

public class BookDto
{
    [StringLength(100)]
    required public string Name { get; set; }

    [StringLength(100)]
    required public string Description { get; set; }

    required public AuthorDto Author { get; set; }
}

public class AuthorDto
{
    required public string FirstName { get; set; }
    required public string LastName { get; set; }
}