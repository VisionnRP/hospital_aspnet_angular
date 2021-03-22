using hospital_client.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_client.Interfaces
{
    interface IAppointmentRepository
    {
        IEnumerable<Appointment> Get();
        Appointment Get(Guid id);
        Appointment Create(Appointment item);
        Appointment Update(Appointment item);
        Appointment Delete(Guid id);
    }
}
