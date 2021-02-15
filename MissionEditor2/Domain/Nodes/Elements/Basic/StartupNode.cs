using System.Collections.Generic;
using System.ComponentModel;
using MissionEditor2.Domain.Attributes;

namespace MissionEditor2.Domain.Nodes.Elements
{
    public class StartupNode : Element
    {
        [Ignore]
        public override Element PreviousElement { get; set; }

        [DisplayName("On startup")]
        public override List<Element> NextElements { get; set; }

        public override string Name { get; set; } = "Startup";
        public override string Path { get; set; } = "basic/startup";
    }
}
