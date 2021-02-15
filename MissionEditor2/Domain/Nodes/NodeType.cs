using System.Collections.Generic;
using MissionEditor2.Domain.Attributes;

namespace MissionEditor2.Domain.Nodes
{
    public class NodeType
    {
        public Node Node { get; set; }
        public List<NodeIO> Inputs { get; set; }
        public List<NodeIO> Outputs { get; set; }
    }

    public class NodeIO
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public Widget Widget { get; set; }
    }

    public class Widget
    {
        public WidgetAttribute WidgetAttribute { get; set; }
        public object Value { get; set; }
        public string Name { get; set; }
    }


}