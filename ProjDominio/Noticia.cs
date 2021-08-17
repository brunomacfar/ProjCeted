using System;
using System.Collections.Generic;

namespace ProjDominio

{
    public class Noticia
    {
        public int id {get; set; }
        public string manchete {get; set; }
        public string categoria {get; set; }
        public string url {get; set; }
        public string descricao {get; set; }
        public string dataIni {get; set; }
        public string img {get; set; }

    }
}