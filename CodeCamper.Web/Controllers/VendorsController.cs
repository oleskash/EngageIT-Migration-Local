using CodeCamper.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CodeCamper.Web.Controllers
{
    public class VendorsController : ApiController
    {
        // GET: api/Vendors
        public IEnumerable<Vendor> Get()
        {
            return new[] { new Vendor { Id = 1, Name = "SS" }, new Vendor { Id = 1, Name = "Intelias" } };
        }

        // GET: api/Vendors/5
        public Vendor Get(int id)
        {
            return new Vendor { Id = id, Name = "SS" };
        }

        // POST: api/Vendors
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Vendors/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Vendors/5
        public void Delete(int id)
        {
        }
    }
}
