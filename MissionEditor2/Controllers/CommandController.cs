using Microsoft.AspNetCore.Mvc;
using MissionEditor2.Services;

namespace MissionEditor2.Controllers
{
    [Route("command")]
    public class CommandController : Controller
    {
        private CommandService commandService;

        public CommandController(CommandService commandService)
        {
            this.commandService = commandService;
        }

        [Route("consume")]
        public IActionResult Consume()
        {
            return Json(commandService.ConsumeCommands());
        }
    }
}