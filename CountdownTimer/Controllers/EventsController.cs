using EventDataAccess;
using System;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Description;

namespace CountdownTimer.Controllers
{
    /// <summary></summary>
    /// <seealso cref="System.Web.Http.ApiController" />

    [RoutePrefix("api/Events")]
    public class EventsController : ApiController
    {
        private CountDownTimerEntities db = new CountDownTimerEntities();

        /// <summary>Gets the events.</summary>
        /// <returns></returns>
        [Route("EventList")]
        [HttpGet]
        public IHttpActionResult GetEvents()
        {
            
                return Json( db.Events.ToList().Where(e=> e.DueDate >= DateTime.Now));
            
        }

        /// <summary>Gets the event.</summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("FindEventById")]
        public IHttpActionResult GetEvent(int id)
        {
                return Json(db.Events.FirstOrDefault(e => e.Id == id));
        }

        /// <summary>
        /// Deletes the event.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <returns></returns>
        [Route("Delete")]
        [HttpDelete]
        public IHttpActionResult DeleteEvent(int id)
        {
            
                Event e = db.Events.Find(id);
                if (e == null)
                {
                    return NotFound();
                }
                db.Events.Remove(e);
                db.SaveChanges();
                return Ok(e);
            }
        
        
        /// <summary>
        /// Posts the specified object.
        /// </summary>
        /// <param name="obj">The object.</param>
        /// <returns></returns>
        [Route("CreateEvent")]
        [HttpPost]
        public IHttpActionResult Create([FromBody]Event obj)
        {
            
                db.Events.Add(obj);
                db.SaveChanges();

                return Ok(obj);
            
        }

        /// <summary>
        /// Edits the event.
        /// </summary>
        /// <param name="id">The identifier.</param>
        /// <param name="obj">The object.</param>
        /// <returns></returns>
        [Route("UpdateEvent")]
        [HttpPut]
        public IHttpActionResult EditEvent(int id, [FromBody]Event obj)
        {
            
                db.Entry(obj).State = EntityState.Modified;
                db.SaveChanges();
                return Ok(obj);
            
        }

    }
}
