using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewVizyonProject.Models
{
    public class VizyonContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=DESKTOP-HDKE00R;Database=VizyonDb;uid=sa;pwd=bonafide");
        }
        public DbSet<Konu> Konular { get; set; }
        public DbSet<Aciklama> Aciklamalar { get; set; }
        public DbSet<Sektor> Sektorler { get; set; }
    }
}
