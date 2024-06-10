using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactPeopleAndCars.Data;

namespace ReactPeopleAndCars.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleCarController : ControllerBase
    {
        private string _connectionString;

        public PeopleCarController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");

        }

        [Route("getall")]
        public List<Person> GetAll()
        {
            var repo = new PeopleAndCarRepo(_connectionString);
            return repo.GetAll();
        }

        [HttpPost]
        [Route("addperson")]
        public void AddPerson(Person person)
        {
            var repo = new PeopleAndCarRepo(_connectionString);
            repo.AddPerson(person);
        }

        [HttpPost]
        [Route("addcar")]
        public void AddCar(Car car)
        {
            var repo = new PeopleAndCarRepo(_connectionString);
            repo.AddCar(car);
        }

        [Route("getcars")]
        public List<Car> GetCars(int id)
        {
            var repo = new PeopleAndCarRepo(_connectionString);
            return repo.GetAllCarsForPerson(id);
        }

        [HttpPost]
        [Route("deletecars")]
        public void DeleteCars(int id)
        {
            var repo = new PeopleAndCarRepo(_connectionString);
            repo.DeleteCarsForPerson(id);
        }
    }
}
