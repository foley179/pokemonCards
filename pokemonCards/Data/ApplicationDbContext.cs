using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using pokemonCards.Models;

namespace pokemonCards.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<pokemonCards.Models.User>? User { get; set; }
        public DbSet<pokemonCards.Models.Card>? Card { get; set; }
    }
}