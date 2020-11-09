using System.Threading.Tasks;
using ProjDominio;

namespace ProjRepositorio
{
    public interface IProjRepositorio
    {
        void Add<T>(T entity) where T: class;
        void Update<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveChangedAsync();

        Task<Usuario[]> GetAllUsuariosAsync();
        Task<Usuario[]> GetAllUsuariosAsyncByNome(string nome);
        Task<Usuario> GetAllUsuariosAsyncById(int id);

/*
        Aqui começa MNC CONFIGS
*/
        Task<wp_db_evento[]> GetAllEventosAsync();
    }
}