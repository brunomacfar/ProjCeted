using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjDominio;
using ProjRepositorio;


namespace ProjRepositorio
{
    public class RepositorioProj : IProjRepositorio
    {
       private readonly ProjCetedContext _context;
       public RepositorioProj(ProjCetedContext context){
           _context = context;
           _context.ChangeTracker.QueryTrackingBehavior = QueryTrackingBehavior.NoTracking;
       }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
        public async Task<bool> SaveChangedAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }
        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        

    /*  -------------------!!!-------------------!!!-------------------

            AQUI COMEÇAM AS CONFIGURAÇÕES PARA O USUARIOS!

        -------------------!!!-------------------!!!-------------------  
    */
        public async Task<Usuario[]> GetAllUsuariosAsync()
        {
            IQueryable<Usuario> query = _context.Usuarios; 
            
            query = query.OrderByDescending(c => c.Id); 

            return await query.ToArrayAsync();
        }
        public async Task<Usuario> GetAllUsuariosAsyncById(int id)
        {
            IQueryable<Usuario> query = _context.Usuarios; 
            
            query = query.OrderByDescending(c => c.Id)
                         .Where(c => c.Id == id); 
                         
            return await query.FirstOrDefaultAsync();
        }
        public async Task<Usuario[]> GetAllUsuariosAsyncByNome(string nome)
        {
            IQueryable<Usuario> query = _context.Usuarios; 
            
            query = query.OrderByDescending(c => c.Id)
                         .Where(c => c.Nome.Contains(nome)); 

            return await query.ToArrayAsync();
        }
    /*  -------------------!!!-------------------!!!-------------------

            AQUI COMEÇAM AS CONFIGURAÇÕES PARA O MUSEU NACIONAL DO CALÇADO!

        -------------------!!!-------------------!!!-------------------  
     
     
                            EVENTOS
     */
       public async Task<wp_db_evento[]> GetAllEventosAsync()
        {
            IQueryable<wp_db_evento> query = _context.wp_db_evento;
                query = query.OrderByDescending(c => c.id);
                         
            return await query.ToArrayAsync();
        }
       


        



    }
}