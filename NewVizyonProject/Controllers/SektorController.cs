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
            return View();
        }
        //SEKTOR KISMI
        //---------------------------------------------------------------------------------------------------
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
                return RedirectToAction("SektorIndex");
            }
        }
        public IActionResult SektorSil(int SektorId)
        {
            var sek = context.Sektorler.Find(SektorId);
            context.Sektorler.Remove(sek);
            context.SaveChanges();
            return RedirectToAction("SektorIndex");
        }

        public IActionResult SektorGuncelle(Sektor sektor)
        {
            var sek = context.Sektorler.Find(sektor.SektorId);
            sek.SektorAdi = sektor.SektorAdi;
            context.SaveChanges();
            return RedirectToAction("SektorIndex");
        }

        public IActionResult SektorIndex()
        {
            SelectList selectListSektor = new SelectList(context.Sektorler, "SektorId", "SektorAdi");
            ViewBag.sektorData = selectListSektor;
            model.sektors = context.Sektorler.ToList();
            return View(model);
        }
        //SEKTOR KISMI BITIS
        //---------------------------------------------------------------------------------------------------


        //KONU KISMI 
        //---------------------------------------------------------------------------------------------------
        public IActionResult KonuIndex()
        {
            SelectList selectListKonu = new SelectList(context.Konular, "KonuId", "KonuAdi");
            ViewBag.konuData = selectListKonu;
            model.konus = context.Konular.ToList();
            return View(model);
        }

        [HttpGet]
        public IActionResult YeniKonu()
        {
            return View();
        }

        [HttpPost]
        public IActionResult YeniKonu(Konu konu)
        {
            if (string.IsNullOrEmpty(konu.KonuAdi))
            {
                return null;
            }
            else
            {
                context.Konular.Add(konu);
                context.SaveChanges();
                return RedirectToAction("Index");
            }
        }

        public IActionResult KonuSil(int SektorId)
        {
            var sek = context.Konular.Find(SektorId);
            context.Konular.Remove(sek);
            context.SaveChanges();
            return RedirectToAction("KonuIndex");
        }

        public IActionResult KonuGetir(int id)
        {
            var sek = context.Konular.Find(id);
            return View("KonuGetir", sek);
        }
        public IActionResult KonuGuncelle(Konu konu)
        {
            var sek = context.Konular.Find(konu.KonuId);
            sek.KonuAdi = konu.KonuAdi;
            context.SaveChanges();
            return RedirectToAction("KonuIndex");
        }
        //KONU KISMI BITIS
        //---------------------------------------------------------------------------------------------------

    }
}
