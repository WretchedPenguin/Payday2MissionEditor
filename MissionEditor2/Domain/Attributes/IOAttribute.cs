﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MissionEditor2.Domain.Attributes
{
    public class IOAttribute : Attribute
    {
        public IOAttribute(string type)
        {
            Type = type;
        }

        public string Type { get; }


    }
}
