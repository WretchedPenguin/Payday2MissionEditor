using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MissionEditor2.Domain;
using MissionEditor2.Services;
using Newtonsoft.Json;

namespace MissionEditor2.Controllers
{
    [Route("element")]
    public class ElementController : Controller
    {
        private readonly ILogger<ElementController> logger;
        private readonly ElementService elementService;

        public ElementController(ILogger<ElementController> logger, ElementService elementService)
        {
            this.logger = logger;
            this.elementService = elementService;
        }

        [Route("update")]
        public async Task<IActionResult> Update(ElementUpdate elementUpdate)
        {
            await elementService.UpdateValue(elementUpdate);
            return Ok();
        }

        [Route("create")]
        public async Task<IActionResult> Create(string element)
        {
            await elementService.CreateElement(JsonConvert.DeserializeObject<Element>(element));
            return Ok();
        }

        [Route("create/list")]
        public async Task<IActionResult> CreateList(string elements)
        {
            var list = JsonConvert.DeserializeObject<List<Element>>(elements);
            string ids = "";
            IEnumerable<Task> tasks = list.Select(elementService.CreateElement);
            await Task.WhenAll(tasks);
            return Ok();
        }
    }
}