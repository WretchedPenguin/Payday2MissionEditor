using System.Numerics;

namespace MissionEditor2.Domain.Nodes
{
    public abstract class Node
    {
        public abstract string Name { get; set; }
        public abstract string Path { get; set; }
        public virtual Vector2? Size { get; set; }
        public virtual string OnExecute { get; set; } = "function() {}";
    }
}
