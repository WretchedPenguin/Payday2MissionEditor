using System.Collections.Generic;
using System.ComponentModel;
using MissionEditor2.Domain.Attributes;

namespace MissionEditor2.Domain.Nodes.Elements
{
    public abstract class Element : Node
    {
        [DisplayName("Previous element")]
        [Input("element")]
        public virtual Element PreviousElement { get; set; }

        [DisplayName("Next elements")]
        [Output("element")]
        public virtual List<Element> NextElements { get; set; }
    }
}