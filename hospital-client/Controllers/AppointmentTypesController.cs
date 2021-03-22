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
    public class AppointmentTypesController : Controller
    {
        private readonly EFTodoDBContext _context;

        public AppointmentTypesController(EFTodoDBContext context)
        {
            _context = context;
        }

        // GET: AppointmentTypes
        public async Task<AppointmentType[]> Index()
        {
            return _context.appointmentType.ToArray();
        }

        // GET: AppointmentTypes/Details/5
        public async Task<AppointmentType[]> Details(Guid? id)
        {
            if (id == null)
            {
                return _context.appointmentType.ToArray();
            }

            var appointmentType = await _context.appointmentType
                .FirstOrDefaultAsync(m => m.id == id);
            if (appointmentType == null)
            {
                return _context.appointmentType.ToArray();
            }

            return _context.appointmentType.ToArray();
        }    

        // POST: AppointmentTypes/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<AppointmentType[]> Create([FromBody] AppointmentType appointmentType)
        {
            if (ModelState.IsValid)
            {
                appointmentType.id = Guid.NewGuid();
                _context.Add(appointmentType);
                await _context.SaveChangesAsync();
                return _context.appointmentType.ToArray();
            }
            return _context.appointmentType.ToArray();
        }

        // POST: AppointmentTypes/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<AppointmentType[]> Edit(Guid id, [FromBody] AppointmentType appointmentType)
        {
            if (id != appointmentType.id)
            {
                return _context.appointmentType.ToArray();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(appointmentType);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AppointmentTypeExists(appointmentType.id))
                    {
                        return _context.appointmentType.ToArray();
                    }
                    else
                    {
                        throw;
                    }
                }
                return _context.appointmentType.ToArray();
            }
            return _context.appointmentType.ToArray();
        }

        // POST: AppointmentTypes/Delete/5
        [HttpGet, ActionName("Delete")]
        public async Task<AppointmentType[]> DeleteConfirmed(Guid id)
        {
            var appointmentType = await _context.appointmentType.FindAsync(id);
            _context.appointmentType.Remove(appointmentType);
            await _context.SaveChangesAsync();
            return _context.appointmentType.ToArray();
        }

        private bool AppointmentTypeExists(Guid id)
        {
            return _context.appointmentType.Any(e => e.id == id);
        }
    }
}
