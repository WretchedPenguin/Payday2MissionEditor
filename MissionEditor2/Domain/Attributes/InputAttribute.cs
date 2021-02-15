using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MissionEditor2.Domain.Attributes
{
    public class InputAttribute : IOAttribute
    {
        public InputAttribute(string type) : base(type)
        {
        }
    }
}