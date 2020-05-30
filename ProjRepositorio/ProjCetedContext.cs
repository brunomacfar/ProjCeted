using Microsoft.EntityFrameworkCore;
using ProjDominio;

namespace ProjRepositorio
{
    public class ProjCetedContext : DbContext
    {
        public ProjCetedContext(DbContextOptions<ProjCetedContext> options): base (options) { }
        public DbSet<Usuario> Usuarios { get; set; }
        
    }
}