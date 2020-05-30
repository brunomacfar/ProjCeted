using AutoMapper;
using ProjAPI.Dtos;
using ProjDominio;

namespace ProjAPI.Helpers
{
    
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Usuario, UsuarioDto>().ReverseMap();
        }
    }   
}