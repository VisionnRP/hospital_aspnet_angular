using hospital_client.Interfaces;
using hospital_client.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace hospital_client.Repository
{
    public class AppointmentRepository : IAppointmentRepository
    {
        private EFTodoDBContext context;
        public IEnumerable<Appointment> Get()
        {
            return context.appointment;
        }
        public Appointment Get(Guid id)
        {
            return context.appointment.Find(id);
        }
        public AppointmentRepository(EFTodoDBContext context)
        {
            context = context;
        }
        public Appointment Create(Appointment item)
        {
            context.appointment.Add(item);
            context.SaveChanges();
            return item;
        }
        public Appointment Update(Appointment updatedTodoItem)
        {
            Appointment currentItem = Get(updatedTodoItem.id);
            currentItem.appointmentTypeId = updatedTodoItem.appointmentTypeId;
            currentItem.patientId = updatedTodoItem.patientId;
            currentItem.practitionerId = updatedTodoItem.practitionerId;
            currentItem.begin = updatedTodoItem.begin;
            currentItem.end = updatedTodoItem.end;
            currentItem.status = updatedTodoItem.status;


            context.appointment.Update(currentItem);
            context.SaveChanges();
            return currentItem;
        }

        public Appointment Delete(Guid id)
        {
            Appointment todoItem = Get(id);

            if (todoItem != null)
            {
                context.appointment.Remove(todoItem);
                context.SaveChanges();
            }

            return todoItem;
        }
    }
}
