using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactPeopleAndCars.Data
{
    public class PeopleAndCarRepo
    {
        private readonly string _connectionString;

        public PeopleAndCarRepo(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetAll()
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            return context.People.Include(P => P.cars).ToList();
        }

        public void AddPerson(Person person)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }

        public void AddCar(Car car)
        {           
            using var context = new PeopleCarsDataContext(_connectionString);
            context.Cars.Add(car);
            context.SaveChanges();
        }

        public List<Car> GetAllCarsForPerson(int id)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            return context.Cars.Where(c => c.PersonId == id).ToList();
        }

        public void DeleteCarsForPerson(int id)
        {
            using var context = new PeopleCarsDataContext(_connectionString);
            List<Car> cars = context.Cars.Where(c => c.PersonId == id).ToList();
            context.Cars.RemoveRange(cars);
            context.SaveChanges();
        }

    }
}
