using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using ProjRepositorio;
using AutoMapper;
using ProjAPI.Dtos;
using ProjDominio;

namespace ProjAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]


    public class EventoController : ControllerBase
    {
        private readonly IProjRepositorio _repo;
        private readonly IMapper _mapper;

        public EventoController( IProjRepositorio repo,
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
            var eventos = await _repo.GetAllEventosAsync();
            var resultados =_mapper.Map<EventoDTO[]>(eventos);
            Console.Write(eventos + "\n\n\n\n\n\n\n\n ");

            return Ok(resultados);
        }catch(System.Exception ex)
        {
            Console.Write(ex);
            
            return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no banco de dados");
        }
    }

[HttpGet("getByTitulo/{titulo}")]
    public async Task<ActionResult> Get(string Titulo)
    {
        try 
        {
            var eventos = await _repo.GetAllEventoAsyncByTitulo(Titulo);
            var resultados =_mapper.Map<EventoDTO[]>(eventos);
            Console.Write(eventos + "\n\n\n\n\n\n\n\n ");

            return Ok(resultados);
        }catch(System.Exception ex)
        {
            Console.Write(ex);
            return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no banco de dados");
        }
    }




   }





}