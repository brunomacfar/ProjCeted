using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjAPI.Data;
using ProjAPI.Model;

namespace ProjAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class UsuarioController : ControllerBase
    {
        public readonly DataContext _context;
        public UsuarioController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
         {
             try
             {
                 var results = await _context.Users.ToListAsync();
                 return Ok(results); 
             }
             catch (System.Exception)
             {
                 return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no Banco de Dados");
             }   
         }

        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            try
            {
                var results = await _context.Users
                                    .FirstOrDefaultAsync(x => x.Id == id); 
                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no Banco de Dados");
            }
        } 

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, User user)
        {
            return null;
        } 

        [HttpPost]
        public async Task<ActionResult<User>> Create(User user)
        {
            return null;
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoItem(long id)
        {
            return null;
        }
    }
}