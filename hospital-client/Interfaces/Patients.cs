using hospital_client.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_client.Interfaces
{
    public interface IPatientsRepository
    {
        IEnumerable<Patient> Get();
        Patient Get(Guid id);
        Patient Create(Patient item);
        Patient Update(Patient item);
        Patient Delete(Guid id);
    }
    
}
