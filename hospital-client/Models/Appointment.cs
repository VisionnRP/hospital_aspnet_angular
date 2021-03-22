using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_client.Models
{
    public class Appointment
    {
        public Appointment(Guid id, string begin, string end, string status, string appointmentTypeId, string patientId, string practitionerId)
        {
            this.id = id;
            this.begin = begin;
            this.end = end;
            this.status = status;
            this.appointmentTypeId = appointmentTypeId;
            this.patientId = patientId;
            this.practitionerId = practitionerId;
        }

        public Guid id { get; set; }
        public string begin { get; set; }
        public string end { get; set; }
        public string status { get; set; }
        public string appointmentTypeId { get; set; }

        public string patientId { get; set; }

        public string practitionerId { get; set; }

    }
}
