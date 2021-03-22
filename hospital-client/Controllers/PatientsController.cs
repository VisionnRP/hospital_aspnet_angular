using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using hospital_client;
using hospital_client.Models;
using Microsoft.AspNetCore.Http;

namespace hospital_client.Controllers
{
    public class PatientsController : Controller
    {
        private readonly EFTodoDBContext _context;

        public PatientsController(EFTodoDBContext context)
        {
            _context = context;
        }

        // GET: Patients
        public async Task<Patient[]> Index()
        {
            return _context.patient.ToArray();
        }

        // POST: Patients/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<Patient[]> Create([FromBody] Patient patient)
        {
            if (ModelState.IsValid)
            {
                patient.id = Guid.NewGuid();
                _context.Add(patient);
                await _context.SaveChangesAsync();
                return _context.patient.ToArray(); ;
            }
            return _context.patient.ToArray(); ;
        }

        // POST: Patients/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<Patient[]> Edit(Guid id, [FromBody] Patient patient)
        {
            if (id != patient.id)
            {
                return _context.patient.ToArray(); ;
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(patient);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PatientExists(patient.id))
                    {
                        throw;
                    }
                    else
                    {
                        throw;
                    }
                }
                return _context.patient.ToArray(); ;
            }
            return _context.patient.ToArray(); ;
        }

        [HttpGet, ActionName("Delete")]
        public async Task<Patient[]> DeleteConfirmed(Guid id)
        {
            var patient = await _context.patient.FindAsync(id);
            _context.patient.Remove(patient);
            await _context.SaveChangesAsync();
            return _context.patient.ToArray();
        }

        private bool PatientExists(Guid id)
        {
            return _context.patient.Any(e => e.id == id);
        }
    }
}
