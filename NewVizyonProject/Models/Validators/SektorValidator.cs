using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NewVizyonProject.Models.Validators
{
    public class SektorValidator : AbstractValidator<Sektor>
    {
        public SektorValidator()
        {
            RuleFor(s => s.SektorAdi).NotNull().NotEmpty().WithMessage("Sektor Adı Boş Olamaz !!!");
        }
    }
}
