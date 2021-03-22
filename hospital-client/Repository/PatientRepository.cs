using hospital_client.Interfaces;
using hospital_client.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_client.Repository
{
    public class PatientRepository : IPatientsRepository
    {
        private EFTodoDBContext context;
        public IEnumerable<Patient> Get()
        {
            return context.patient;
        }
        public Patient Get(Guid id)
        {
            return context.patient.Find(id);
        }
        public PatientRepository(EFTodoDBContext context)
        {
            context = context;
        }
        public Patient Create(Patient item)
        {
            context.patient.Add(item);
            context.SaveChanges();
            return item;
        }
        public Patient Update(Patient updatedTodoItem)
        {
            Patient currentItem = Get(updatedTodoItem.id);
            currentItem.insurance = updatedTodoItem.insurance;
            currentItem.lastname = updatedTodoItem.lastname;
            currentItem.sex = updatedTodoItem.sex;
            currentItem.birthday = updatedTodoItem.birthday;
            currentItem.firstname = updatedTodoItem.firstname;

            context.patient.Update(currentItem);
            context.SaveChanges();
            return currentItem;
        }

        public Patient Delete(Guid id)
        {
            Patient todoItem = Get(id);

            if (todoItem != null)
            {
                context.patient.Remove(todoItem);
                context.SaveChanges();
            }

            return todoItem;
        }
    }
}
