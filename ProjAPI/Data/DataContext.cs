using Microsoft.EntityFrameworkCore;
using ProjAPI.Model;

namespace ProjAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base (options) { }
        public DbSet<User> Users { get; set; }
        
    }
}