using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using hospital_client.Models;



namespace hospital_client.Interfaces
{
    interface IAcademicTitleRepository
    {
        IEnumerable<AcademicTitle> Get();
        AcademicTitle Get(Guid id);
        AcademicTitle Create(AcademicTitle item);
        AcademicTitle Update(AcademicTitle item);
        AcademicTitle Delete(Guid id);
    }
}
