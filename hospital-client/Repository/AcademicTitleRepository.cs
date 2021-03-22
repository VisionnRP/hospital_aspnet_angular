using hospital_client.Interfaces;
using hospital_client.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_client.Repository
{
    public class AcademicTitleRepository : IAcademicTitleRepository
    {
        private EFTodoDBContext context;
        public IEnumerable<AcademicTitle> Get()
        {
            return context.academicTitle;
        }
        public AcademicTitle Get(Guid id)
        {
            return context.academicTitle.Find(id);
        }
        public AcademicTitleRepository(EFTodoDBContext context)
        {
            context = context;
        }
        public AcademicTitle Create(AcademicTitle item)
        {
            context.academicTitle.Add(item);
            context.SaveChanges();
            return item;
        }
        public AcademicTitle Update(AcademicTitle updatedTodoItem)
        {
            AcademicTitle currentItem = Get(updatedTodoItem.id);

            currentItem.name = updatedTodoItem.name;
            context.academicTitle.Update(currentItem);
            context.SaveChanges();
            return currentItem;
        }

        public AcademicTitle Delete(Guid id)
        {
            AcademicTitle todoItem = Get(id);

            if (todoItem != null)
            {
                context.academicTitle.Remove(todoItem);
                context.SaveChanges();
            }

            return todoItem;
        }
    }
}
