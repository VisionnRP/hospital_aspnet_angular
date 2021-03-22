using hospital_client.Interfaces;
using hospital_client.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_client.Repository
{
    public class PractitionerRepository : IPractitionerRepository
    {
        private EFTodoDBContext context;
        public IEnumerable<Practitioner> Get()
        {
            return context.practitioner;
        }
        public Practitioner Get(Guid id)
        {
            return context.practitioner.Find(id);
        }
        public PractitionerRepository(EFTodoDBContext context)
        {
            context = context;
        }
        public Practitioner Create(Practitioner item)
        {
            context.practitioner.Add(item);
            context.SaveChanges();
            return item;
        }
        public Practitioner Update(Practitioner updatedTodoItem)
        {
            Practitioner currentItem = Get(updatedTodoItem.id);
            currentItem.lastname = updatedTodoItem.lastname;
            currentItem.sex = updatedTodoItem.sex;
            currentItem.birthday = updatedTodoItem.birthday;
            currentItem.firstname = updatedTodoItem.firstname;

            currentItem.academicTitleId = updatedTodoItem.academicTitleId;


            context.practitioner.Update(currentItem);
            context.SaveChanges();
            return currentItem;
        }

        public Practitioner Delete(Guid id)
        {
            Practitioner todoItem = Get(id);

            if (todoItem != null)
            {
                context.practitioner.Remove(todoItem);
                context.SaveChanges();
            }

            return todoItem;
        }
    }
}
