using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using hospital_client;
using hospital_client.Models;
using Microsoft.AspNetCore.Identity;
using AutoMapper;

namespace hospital_client.Controllers
{
    public class PractitionersController : Controller
    {

        private readonly EFTodoDBContext _context;

        public PractitionersController(
            EFTodoDBContext context)
        {
            _context = context;
        }

        // GET: Practitioners
        public async Task<Practitioner[]> Index()
        {
            return _context.practitioner.ToArray();
        }

        // POST: Practitioners/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<Practitioner[]> Create([FromBody] Practitioner practitioner)
        {

            Console.WriteLine(ModelState.ErrorCount);
            Console.WriteLine(practitioner);
            Console.WriteLine(ModelState.IsValid);
            if (ModelState.IsValid)
            {
                practitioner.id = Guid.NewGuid();
                _context.Add(practitioner);
                await _context.SaveChangesAsync();
                return _context.practitioner.ToArray();
            }
            return null;
        }

        // POST: Practitioners/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        public async Task<Practitioner[]> Edit(Guid id, [FromBody] Practitioner practitioner)
        {
            if (id != practitioner.id)
            {
                return _context.practitioner.ToArray();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(practitioner);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PractitionerExists(practitioner.id))
                    {
                        return _context.practitioner.ToArray();
                    }
                    else
                    {
                        throw;
                    }
                }
                return _context.practitioner.ToArray();
            }
            return _context.practitioner.ToArray();
        }        

        // POST: Practitioners/Delete/5
        [HttpGet, ActionName("Delete")]
        public async Task<Practitioner[]> DeleteConfirmed(Guid id)
        {
            var practitioner = await _context.practitioner.FindAsync(id);
            _context.practitioner.Remove(practitioner);
            await _context.SaveChangesAsync();
            return _context.practitioner.ToArray();
        }

        private bool PractitionerExists(Guid id)
        {
            return _context.practitioner.Any(e => e.id == id);
        }
    }
}
