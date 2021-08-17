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

namespace ProjAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class NoticiaController : ControllerBase
    {
        private readonly IProjRepositorio _repo;
        private readonly IMapper _mapper;
        public NoticiaController(IProjRepositorio repo,
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
                var noticias = await _repo.GetAllNoticiasAsync();
                var resultados = _mapper.Map<NoticiaDTO[]>(noticias);

                return Ok(resultados);
            }
            catch (System.Exception ex)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, $"Banco Dados Falhou {ex.Message}");
            }
        }

        [HttpGet("getByNome/{manchete}")]
        public async Task<ActionResult> Get(string manchete)
        {
            try
            {
                var noticia = await _repo.GetAllNoticiasAsyncByManchete(manchete);
                var results = _mapper.Map<NoticiaDTO>(noticia);
                return Ok(results);
            }
            catch (System.Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Falha no Banco de Dados");
            }
        }
    }
}