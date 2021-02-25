using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MissionEditor2.Domain;
using MissionEditor2.Services;

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
        public IActionResult Update(ElementUpdate elementUpdate)
        {
            elementService.UpdateValue(elementUpdate);
            return Ok();
        }

        [Route("create")]
        public async Task<IActionResult> Create(Element element)
        {
            await elementService.CreateElement(element);
            return Ok();
        }
    }
}