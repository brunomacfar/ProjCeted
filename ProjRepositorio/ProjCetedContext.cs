using Microsoft.EntityFrameworkCore;
using ProjDominio;

namespace ProjRepositorio
{
    public class ProjCetedContext : DbContext
    {
        public ProjCetedContext(DbContextOptions<ProjCetedContext> options): base (options) { }
        
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Timeline> wp_db_timeline { get; set; }
        public DbSet<MuseuQuemSomos> wp_db_museuQuemSomos { get; set; }
        public DbSet<MuseuLink> wp_db_museuLink { get; set; }
        public DbSet<MuseuHistoria> wp_db_museuHistoria { get; set; }
        public DbSet<MuseuDecreto> wp_db_museuDecreto { get; set; }
        public DbSet<Evento> wp_db_evento { get; set; }
        public DbSet<Noticia> wp_db_noticia { get; set; }
        
    
    }
}