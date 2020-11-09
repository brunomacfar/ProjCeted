using Microsoft.EntityFrameworkCore;
using ProjDominio;

namespace ProjRepositorio
{
    public class ProjCetedContext : DbContext
    {
        public ProjCetedContext(DbContextOptions<ProjCetedContext> options): base (options) { }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Noticia> Noticias { get; set; }
        public DbSet<MuseuDecreto> MuseuDecretos { get; set; }
        public DbSet<MuseuHistoria> MuseuHistorias { get; set; }
        public DbSet<MuseuLink> MuseuLinks { get; set; }
        public DbSet<MuseuQuemSomo> MuseuQuemSomos { get; set; }

        public DbSet<wp_db_evento> wp_db_evento { get; set; }

        



    }
}