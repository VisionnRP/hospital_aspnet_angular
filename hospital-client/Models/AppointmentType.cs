using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_client.Models
{
    public class AppointmentType
    {
        public AppointmentType(Guid id, string name, string color, int duration)
        {
            this.id = id;
            this.name = name;
            this.color = color;
            this.duration = duration;
        }

        public Guid id { get; set; }
        public string name { get; set; }
        public string color { get; set; }
        public int duration { get; set; }
    }
}
