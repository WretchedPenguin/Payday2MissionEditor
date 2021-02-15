using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using MissionEditor2.Domain.Attributes;

namespace MissionEditor2.Domain.Nodes.Elements
{
    public class Empty : Element
    {
        public override string Name { get; set; } = "Empty";
        public override string Path { get; set; } = "basic/empty";
        public override Vector2? Size { get; set; } = new Vector2(300, 300);

        
        public override Element PreviousElement { get; set; }

        [Input("number")]
        [Widget("number")]
        public int Delay { get; set; }

        public override List<Element> NextElements { get; set; }
    }
}
