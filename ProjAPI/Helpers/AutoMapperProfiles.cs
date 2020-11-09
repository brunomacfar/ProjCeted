using AutoMapper;
using ProjAPI.Dtos;
using ProjDominio;

namespace ProjAPI.Helpers
{
    
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<wp_db_evento, EventoDTO>().ReverseMap();
        }
    }   
}