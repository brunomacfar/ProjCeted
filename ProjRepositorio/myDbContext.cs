using Microsoft.EntityFrameworkCore;


namespace ProjRepositorio
{
    public partial class myDbContext : DbContext
    {
         protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
                optionsBuilder.UseMySql("Server=ceted.feevale.br:3306; User Id=calcado;Password=projCalcado*12*;Database=calcadoMuseu");
        }
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {}
    }
}