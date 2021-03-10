using System.Collections.Generic;
using MissionEditor2.Domain;

namespace MissionEditor2.Services
{
    public class CommandService
    {
        private List<Command> commands = new();

        public void ImportFromBeardLib()
        {
            // Tell the editor to export
            commands.Add(new Command{Type = "export"});
        }

        public List<Command> ConsumeCommands()
        {
            var list = commands;
            commands = new List<Command>();
            return list;
        }
    }
}