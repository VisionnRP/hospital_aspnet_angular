using System;

namespace hospital_client.Models
{
    public class Patient
    {
        public enum Sex
        {
            Male,
            Female
        }
        public Guid id { get; set; }
        public string firstname { get; set; }
        public string lastname { get; set; }
        public string birthday { get; set; }

        public string sex;
        public bool insurance { get; set; }
        public Patient(Guid id, string firstname, string lastname, string birthday, string sex, bool insurance)
        {
            this.id = id;
            this.firstname = firstname;
            this.lastname = lastname;
            this.birthday = birthday;
            this.sex = sex;
            this.insurance = insurance;
        }

        public Patient() {}

    }
}
