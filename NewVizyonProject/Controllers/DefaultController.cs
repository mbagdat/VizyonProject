using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using NewVizyonProject.Models;
using NewVizyonProject.Models.ViewModel;
using System;
using System.Linq;
using System.Threading.Tasks;


namespace NewVizyonProject.Controllers
{
    public class DefaultController : Controller
    {
        VizyonContext context = new VizyonContext();
        SektorVeKonuViewModel model = new SektorVeKonuViewModel();

        public IActionResult Index()
        {
            return View();
        }
        //SEKTOR KISMI
        //-----------------------------------------------------------------------
        //[HttpGet]
        //public IActionResult YeniSektor()
        //{
        //    return View();
        //}
        public IActionResult SektorIndex()
        {
            SelectList selectListSektor = new SelectList(context.Sektorler, "SektorId", "SektorAdi");
            ViewBag.sektorData = selectListSektor;
            model.sektors = context.Sektorler.ToList();
            return View(model);
        }

        [HttpPost]
        public IActionResult CreateSektor(Sektor sektor)
        {
            context.Sektorler.Add(sektor);
            context.SaveChanges();
            return RedirectToAction("SektorIndex");
        }
        public IActionResult DeleteSektor(int SektorId)
        {
            var sek = context.Sektorler.Find(SektorId);
            context.Sektorler.Remove(sek);
            context.SaveChanges();
            return RedirectToAction("SektorIndex");
        }

        public IActionResult UpdateSektor(Sektor sektor)
        {
            var sek = context.Sektorler.Find(sektor.SektorId);
            sek.SektorAdi = sektor.SektorAdi;
            context.SaveChanges();
            return RedirectToAction("SektorIndex");
        }


        //SEKTOR KISMI BITIS
        //---------------------------------------------------------------------


        //KONU KISMI 
        //---------------------------------------------------------------------
        public IActionResult KonuIndex()
        {
            SelectList selectListKonu = new SelectList(context.Konular, "KonuId", "KonuAdi");
            ViewBag.konuData = selectListKonu;
            model.konus = context.Konular.ToList();
            return View(model);
        }

        //[HttpGet]
        //public IActionResult YeniKonu()
        //{
        //    return View();
        //}

        [HttpPost]
        public IActionResult CreateKonu(Konu konu)
        {
            context.Konular.Add(konu);
            context.SaveChanges();
            return RedirectToAction("Index");

        }

        public IActionResult DeleteKonu(int SektorId)
        {
            var sek = context.Konular.Find(SektorId);
            context.Konular.Remove(sek);
            context.SaveChanges();
            return RedirectToAction("KonuIndex");
        }

        //public IActionResult KonuGetir(int id)
        //{
        //    var sek = context.Konular.Find(id);
        //    return View("KonuGetir", sek);
        //}
        public IActionResult UpdateKonu(Konu konu)
        {
            var sek = context.Konular.Find(konu.KonuId);
            sek.KonuAdi = konu.KonuAdi;
            context.SaveChanges();
            return RedirectToAction("KonuIndex");
        }


        //KONU KISMI BITIS
        //---------------------------------------------------------------------------------------------------
        //AÇIKLAMA KISMI
        //--------------------------------------------------------------------------------------------------
        public IActionResult AciklamaIndex()
        {
            //var aciklamalar = context.Aciklamalar.ToList();
            //return View(aciklamalar);
            return View(context.Aciklamalar.ToList());
        }
        [HttpPost]
        public IActionResult CreateAciklama(Aciklama aciklama)
        {
            //if (string.IsNullOrEmpty(aciklama.Detay))
            //{
            //    return null;
            //}
            //else
            //{
            if (aciklama != null)
            {
                aciklama.OlusturmaTarihi = DateTime.Now;
                aciklama.GuncellemeTarihi = DateTime.Now;
            }
            context.Aciklamalar.Add(aciklama);
            context.SaveChanges();
            return RedirectToAction("AciklamaIndex");
            //}

        }

        public IActionResult UpdateAciklama(Aciklama aciklama)
        {
            if (string.IsNullOrEmpty(aciklama.Detay))
            {
                return null;
            }
            else
            {
                if (aciklama != null)
                {
                    aciklama.GuncellemeTarihi = DateTime.Now;
                }
                var ack = context.Aciklamalar.Find(aciklama.AciklamaId);
                ack.Detay = aciklama.Detay;
                ack.OnayTarihi = aciklama.OnayTarihi;
                ack.Puan = aciklama.Puan;
                ack.GuncellemeTarihi = aciklama.GuncellemeTarihi;
                context.SaveChanges();
                return RedirectToAction("AciklamaIndex");
            }
        }

        public IActionResult DeleteAciklama(int AciklamaId)
        {
            var ack = context.Aciklamalar.Find(AciklamaId);
            context.Aciklamalar.Remove(ack);
            context.SaveChanges();
            return RedirectToAction("AciklamaIndex");
        }

        [HttpGet]
        public async Task<IActionResult> AciklamaIndex(string Detaysearch)
        {
            ViewData["Getdetaydetails"] = Detaysearch;
            var detayquery = from x in context.Aciklamalar select x;
            if (!String.IsNullOrEmpty(Detaysearch))
            {
                detayquery = detayquery.Where(a => a.Detay.Contains(Detaysearch));
            }
            return View(await detayquery.AsNoTracking().ToListAsync());
        }

        //public IActionResult Paagination()
        //{
        //    context.Sektorler.ToList();
        //    return View();
        //}
    }
}
