using Microsoft.EntityFrameworkCore;
using XLIB.Models;
namespace XLIB.Repository;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

    public DbSet<Book> books { get; set; } = null!;
    public DbSet<Author> authors { get; set; } = null!;

    // 1- figure out the syntax of fluentApi
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // base.OnModelCreating(modelBuilder);
        modelBuilder.Entity<Author>()
            .HasMany(a => a.Books)
            .WithOne(a => a.Author)
            .HasForeignKey(a => a.AuthorId)
            .IsRequired();

        modelBuilder.Entity<Book>(
            b =>
            {
                b.Property(b => b.AuthorId).HasColumnName("Author_ID");
            }
        );
    }
}