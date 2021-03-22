using Microsoft.AspNetCore.Identity;
using System;
using static hospital_client.Models.Patient;

namespace hospital_client.Models
{
    public class Practitioner
    {
        public Practitioner(Guid id, string firstname, string lastname, string birthday, string sex, string academicTitleId)
        {
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.birthday = birthday;
            this.sex = sex;
            this.academicTitleId = academicTitleId;
        }

        public Guid id { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string birthday { get; set; }
        public string sex { get; set; }

        public string academicTitleId { get; set; }
    }
}
