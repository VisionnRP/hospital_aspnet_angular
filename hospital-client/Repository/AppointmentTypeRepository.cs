using hospital_client.Interfaces;
using hospital_client.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_client.Repository
{
    public class AppointmentTypeRepository : IAppointmentTypeRepository
    {
        private EFTodoDBContext context;
        public IEnumerable<AppointmentType> Get()
        {
            return context.appointmentType;
        }
        public AppointmentType Get(Guid id)
        {
            return context.appointmentType.Find(id);
        }
        public AppointmentTypeRepository(EFTodoDBContext context)
        {
            context = context;
        }
        public AppointmentType Create(AppointmentType item)
        {
            context.appointmentType.Add(item);
            context.SaveChanges();
            return item;
        }
        public AppointmentType Update(AppointmentType updatedTodoItem)
        {
            AppointmentType currentItem = Get(updatedTodoItem.id);
            currentItem.name = updatedTodoItem.name;
            currentItem.duration = updatedTodoItem.duration;
            currentItem.color = updatedTodoItem.color;

            context.appointmentType.Update(currentItem);
            context.SaveChanges();
            return currentItem;
        }

        public AppointmentType Delete(Guid id)
        {
            AppointmentType todoItem = Get(id);

            if (todoItem != null)
            {
                context.appointmentType.Remove(todoItem);
                context.SaveChanges();
            }

            return todoItem;
        }
    }
}
