using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;
using MissionEditor2.Domain.Attributes;

namespace MissionEditor2.Domain.Nodes
{
    public class ConstantNumber : Node
    {
        public override string Name { get; set; } = "Constant";
        public override string Path { get; set; } = "basic/constant";
        public override Vector2? Size { get; set; } = new Vector2(180, 30);
        public override string OnExecute { get; set; } = "setOutputData";

        [Widget("number")]
        [Output("number")]
        public float Value { get; set; }
    }
}
