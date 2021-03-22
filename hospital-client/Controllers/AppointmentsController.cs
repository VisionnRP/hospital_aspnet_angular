using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using hospital_client;
using hospital_client.Models;

namespace hospital_client.Controllers
{
    public class AppointmentsController : Controller
    {
        private readonly EFTodoDBContext _context;

        public AppointmentsController(EFTodoDBContext context)
        {
            _context = context;
        }

        // GET: Appointments
        public async Task<Appointment[]> Index()
        {
            return _context.appointment.ToArray();
        }

        // GET: Appointments/Details/5
        public async Task<Appointment[]> Details(Guid? id)
        {
            if (id == null)
            {
                return _context.appointment.ToArray();
            }

            var appointment = await _context.appointment
                .FirstOrDefaultAsync(m => m.id == id);
            if (appointment == null)
            {
                return _context.appointment.ToArray();
            }

            return _context.appointment.ToArray();
        }

        // GET: Appointments/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Appointments/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<Appointment[]> Create([FromBody] Appointment appointment)
        {
            if (ModelState.IsValid)
            {
                appointment.id = Guid.NewGuid();
                _context.Add(appointment);
                await _context.SaveChangesAsync();
                return _context.appointment.ToArray();
            }
            return _context.appointment.ToArray();
        }

        // POST: Appointments/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<Appointment[]> Edit(Guid id, [FromBody] Appointment appointment)
        {
            if (id != appointment.id)
            {
                return _context.appointment.ToArray();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(appointment);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AppointmentExists(appointment.id))
                    {
                        return _context.appointment.ToArray();
                    }
                    else
                    {
                        throw;
                    }
                }
                return _context.appointment.ToArray();
            }
            return _context.appointment.ToArray();
        }

        // POST: Appointments/Delete/5
        [HttpGet, ActionName("Delete")]
        public async Task<Appointment[]> DeleteConfirmed(Guid id)
        {
            var appointment = await _context.appointment.FindAsync(id);
            _context.appointment.Remove(appointment);
            await _context.SaveChangesAsync();
            return _context.appointment.ToArray();
        }

        private bool AppointmentExists(Guid id)
        {
            return _context.appointment.Any(e => e.id == id);
        }
    }
}
