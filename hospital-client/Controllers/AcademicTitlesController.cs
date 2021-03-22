using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using hospital_client;
using hospital_client.Models;
using Microsoft.AspNetCore.Authorization;

namespace hospital_client.Controllers
{
    public class AcademicTitlesController : Controller
    {
        private readonly EFTodoDBContext _context;

        public AcademicTitlesController(EFTodoDBContext context)
        {
            _context = context;
        }

        // GET: AcademicTitles
        public async Task<AcademicTitle[]> Index()
        {
            return _context.academicTitle.ToArray();
        }

        // GET: AcademicTitles/Details/5
        public async Task<IActionResult> Details(Guid? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var academicTitle = await _context.academicTitle
                .FirstOrDefaultAsync(m => m.id == id);
            if (academicTitle == null)
            {
                return NotFound();
            }

            return View(academicTitle);
        }

        // POST: AcademicTitles/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AcademicTitle academicTitle)
        {
            if (ModelState.IsValid)
            {
                academicTitle.id = Guid.NewGuid();
                _context.Add(academicTitle);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(academicTitle);
        }

        // POST: AcademicTitles/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [Authorize]
        [HttpPost]
        public async Task<IActionResult> Edit(Guid id, [FromBody] AcademicTitle academicTitle)
        {
            if (id != academicTitle.id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(academicTitle);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AcademicTitleExists(academicTitle.id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(academicTitle);
        }

        // POST: AcademicTitles/Delete/5
        [Authorize]
        [HttpGet, ActionName("Delete")]
        public async Task<IActionResult> DeleteConfirmed(Guid id)
        {
            var academicTitle = await _context.academicTitle.FindAsync(id);
            _context.academicTitle.Remove(academicTitle);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AcademicTitleExists(Guid id)
        {
            return _context.academicTitle.Any(e => e.id == id);
        }
    }
}
