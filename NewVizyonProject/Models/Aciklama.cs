using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace NewVizyonProject.Models
{
    public class Aciklama
    {
        public int AciklamaId { get; set; }
        public string Detay { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime OlusturmaTarihi { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime GuncellemeTarihi { get; set; }
        [Column(TypeName = "datetime2")]
        public DateTime OnayTarihi { get; set; }
        public decimal Puan { get; set; }
    }
}
