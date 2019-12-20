using EventDataAccess;
using System.Linq;
using System.Web.Http;

namespace CountdownTimer.Controllers
{
    [RoutePrefix("api/Events")]
    public class EventsController : ApiController
    {
      
        [HttpGet]
        public IHttpActionResult GetEvents()
        {
            using (CountDownTimerEntities entities = new CountDownTimerEntities())
            {
                return Json( entities.Events.ToList());
            }
        }

        public IHttpActionResult GetEvent(int id)
        {
            using (CountDownTimerEntities entities = new CountDownTimerEntities())
            {
                return Json(entities.Events.FirstOrDefault(e => e.Id == id));
            }
        }
    }
}
