using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using NewVizyonProject.Models;
using NewVizyonProject.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewVizyonProject.Controllers
{
    public class SektorController : Controller
    {
        VizyonContext context = new VizyonContext();
        SektorVeKonuViewModel model = new SektorVeKonuViewModel();

        public IActionResult Index()
        {
            SelectList selectListSektor = new SelectList(context.Sektorler,"SektorId","SektorAdi");
            ViewBag.sektorData = selectListSektor;
            model.sektors = context.Sektorler.ToList();
            return View(model);

            //model.sektors = context.Sektorler.ToList();
            //return View(model);
            //List<Sektor> sektor = context.Sektorler.ToList();
            //return View(sektor);
        }

        [HttpGet]
        public IActionResult YeniSektor()
        {
            return View();
        }

        [HttpPost]
        public IActionResult YeniSektor(Sektor sektor)
        {
            if (string.IsNullOrEmpty(sektor.SektorAdi))
            {
                return null;
            }
            else
            {
                context.Sektorler.Add(sektor);
                context.SaveChanges();
                return RedirectToAction("Index");
            }
            //context.Sektorler.Add(sektor);
            //int sonuc = context.SaveChanges();
            //if (sonuc < 0)
            //{
            //    ViewBag.Result = "Sektör Başarılı Bir Şekilde Kaydedilmiştir.";
            //    ViewBag.Status = "success";
            //}
            //else
            //{
            //    ViewBag.Result = "Sektör Ekleme İşlemi Başarısız.";
            //    ViewBag.Status = "danger";
            //}

            //return RedirectToAction("Index");
        }
        public IActionResult SektorSil(int id)
        {
            var sek = context.Sektorler.Find(id);
            context.Sektorler.Remove(sek);
            context.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult SektorGetir(int id)
        {
            var sek = context.Sektorler.Find(id);
            return View("SektorGetir", sek);
        }
        public IActionResult SektorGuncelle(Sektor sektor)
        {
            var sek = context.Sektorler.Find(sektor.SektorId);
            sek.SektorAdi = sektor.SektorAdi;
            context.SaveChanges();
            return RedirectToAction("Index");
        }

    }
}
