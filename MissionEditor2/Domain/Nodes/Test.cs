using MissionEditor2.Domain.Attributes;

namespace MissionEditor2.Domain.Nodes
{
    public class Test : Node
    {
        [Input("number")]
        public int A { get; set; }

        [Input("number")]
        public int B { get; set; }

        [Output("number")]
        public int AB { get; set; }

        public override string Name { get; set; } = "Test";
        public override string Path { get; set; } = "test/test";

        public Test()
        {
            OnExecute = "testNodeOnExecute";
        }
    }
}