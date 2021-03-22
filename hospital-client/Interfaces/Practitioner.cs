using hospital_client.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_client.Interfaces
{
    interface IPractitionerRepository
    {
        IEnumerable<Practitioner> Get();
        Practitioner Get(Guid id);
        Practitioner Create(Practitioner item);
        Practitioner Update(Practitioner item);
        Practitioner Delete(Guid id);
    }
}
