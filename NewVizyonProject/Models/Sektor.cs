using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace NewVizyonProject.Models
{
    public class Sektor
    {
        public int SektorId { get; set; }
        [Required(ErrorMessage = "Sektör Adı Boş Geçilemez !!!")]
        public string SektorAdi { get; set; }


    }
}
