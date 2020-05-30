using System.ComponentModel.DataAnnotations;

namespace ProjAPI.Dtos
{
    public class UsuarioDto
    {
        public int Id { get; set; }

        [Required (ErrorMessage="Campo Obrigatório")]
        [StringLength (100, MinimumLength=3, ErrorMessage="Local é entre 3 e 100 Caracters")]
        
        public string Matricula { get; set; }

        [Required (ErrorMessage="A Matricula deve ser Preeenchido")]
        public string Nome { get; set; }
        [Required (ErrorMessage="O nome deve ser Preeenchido")]
        public string Cpf { get; set; }
        [Required (ErrorMessage="O CPF deve ser Preeenchido")]
        
        [EmailAddress]
        public string Email { get; set; } 
        [Phone]
        public string Telefone { get; set; }   
        public string Cargo { get; set; }   
        public string Setor { get; set; }
         public string Sehna { get; set; }
        public string ImgUrl { get; set; }
    }
}