using EventDataAccess;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;

namespace CountdownTimer.Controllers
{
    /// <summary></summary>
    /// <seealso cref="System.Web.Http.ApiController" />

    [RoutePrefix("api/Events")]
    public class EventsController : ApiController
    {
        /// <summary>Gets the events.</summary>
        /// <returns></returns>
        [Route("EventList")]
        [HttpGet]
        public IHttpActionResult GetEvents()
        {
            using (CountDownTimerEntities entities = new CountDownTimerEntities())
            {
                return Json( entities.Events.ToList());
            }
        }

        /// <summary>Gets the event.</summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("FindEventById")]
        public IHttpActionResult GetEvent(int id)
        {
            using (CountDownTimerEntities entities = new CountDownTimerEntities())
            {
                return Json(entities.Events.FirstOrDefault(e => e.Id == id));
            }
        }

        /// <summary>
        /// Deletes the event.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("Delete")]
        [HttpGet]
        public IHttpActionResult DeleteEvent(int id)
        {
            using (CountDownTimerEntities entities = new CountDownTimerEntities())
            {
                Event e = entities.Events.Find(id);
                if (e == null)
                {
                    return NotFound();
                }
                entities.Events.Remove(e);
                entities.SaveChanges();
                return Json(entities.Events.ToList());
            }
        }


        /// <summary>
        /// Posts the specified object.
        /// </summary>
        /// <param name="obj">The object.</param>
        /// <returns></returns>
        [Route("CreateEvent")]
        [HttpPost]
        public IHttpActionResult Post([FromBody]Event obj)
        {
            using (CountDownTimerEntities db = new CountDownTimerEntities())
            {
                db.Events.Add(obj);
                db.SaveChanges();

                return Json(db.Events.ToList());
            }
        }

        /// <summary>
        /// Edits the event.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="obj">The object.</param>
        /// <returns></returns>
        [Route("UpdateEvent")]
        [HttpPost]
        public IHttpActionResult EditEvent(int id, [FromBody]Event obj)
        {
            using (CountDownTimerEntities db = new CountDownTimerEntities())
            {
                db.Entry<Event>(obj).State = EntityState.Modified;
                db.SaveChanges();
                return Json(db.Events.ToList());
            }
        }

    }
}
