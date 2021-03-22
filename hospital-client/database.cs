using hospital_client.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace hospital_client
{
    public class EFTodoDBContext : IdentityDbContext<User>
    {
        public DbSet<Patient> patient { get; set; }
        public DbSet<Practitioner> practitioner { get; set; }
        public DbSet<Appointment> appointment { get; set; }
        public DbSet<AppointmentType> appointmentType { get; set; }
        public DbSet<AcademicTitle> academicTitle { get; set; }
        public EFTodoDBContext(DbContextOptions<EFTodoDBContext> options) : base(options)
        {}
    }
}
