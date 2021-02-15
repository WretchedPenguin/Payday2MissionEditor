using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MissionEditor2.Domain.Attributes
{
    public class OutputAttribute : IOAttribute
    {
        public OutputAttribute(string type) : base(type)
        {
        }
    }
}
