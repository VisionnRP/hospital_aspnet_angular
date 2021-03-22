using hospital_client.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_client.Interfaces
{
    interface IAppointmentTypeRepository
    {
        IEnumerable<AppointmentType> Get();
        AppointmentType Get(Guid id);
        AppointmentType Create(AppointmentType item);
        AppointmentType Update(AppointmentType item);
        AppointmentType Delete(Guid id);
    }
}
