using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjAPI.Model;
using ProjRepositorio;
using AutoMapper;
using ProjAPI.Dtos;
using ProjDominio;

namespace ProjAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class UsuarioController : ControllerBase
    {
        private readonly IProjRepositorio _repo;
        private readonly IMapper _mapper;
        public UsuarioController(IProjRepositorio repo,
                                IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            try
            {
                var usuarios = await _repo.GetAllUsuariosAsync();
                var results = _mapper.Map<UsuarioDto[]>(usuarios);

                return Ok(results);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, ex );
            }
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult> Get(int id)
        {
            try
            {
                var usuario = await _repo.GetAllUsuariosAsyncById(id);
                var results = _mapper.Map<UsuarioDto>(usuario);
                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no Banco de Dados");
            }
        }

        [HttpGet("getByNome/{Nome}")]
        public async Task<ActionResult> Get(string nome)
        {
            try
            {
                var usuarios = await _repo.GetAllUsuariosAsyncByNome(nome); 
                var results = _mapper.Map<UsuarioDto[]>(usuarios);

                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no Banco de Dados");
            }
        }

        [HttpPost]
        public async Task<ActionResult> Post(UsuarioDto model)
        {
            try
            {
                var usuario = _mapper.Map<Usuario>(model);
                _repo.Add(usuario);

                if (await _repo.SaveChangedAsync())
                {
                    return Created($"/api/usuario/{model.Id}", _mapper.Map<UsuarioDto>(usuario));

                }
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $" Falha no Banco de Dados {ex.Message}");
            }
            return BadRequest();
        }


        [HttpPut("{Id}")]
        public async Task<IActionResult> Put(int id, UsuarioDto model)
        {
            try
            {
                var usuario = await _repo.GetAllUsuariosAsyncById(id);
                
                if (usuario == null) return NotFound();

                _mapper.Map(model, usuario);
                _repo.Update(usuario);
                if (await _repo.SaveChangedAsync())
                {
                    return Created($"api/usuario/{model.Id}", _mapper.Map<UsuarioDto>(usuario));
                }
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError,  $" Falha no Banco de Dados {ex.Message}");
            }
            return BadRequest();
        }

        [HttpDelete("{Id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var usuario = await _repo.GetAllUsuariosAsyncById(id);
                
                if (usuario == null) return NotFound();

                _repo.Delete(usuario);

                if (await _repo.SaveChangedAsync())
                {
                    return Ok();
                }
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no Banco de Dados" + ex.Message);
            }
            return BadRequest();
        }
    }
}
