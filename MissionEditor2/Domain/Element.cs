using System.Collections.Generic;
using System.Numerics;
using Microsoft.AspNetCore.Mvc;

namespace MissionEditor2.Domain
{
    public class Element
    {
        public long Id { get; set; }
        public string Class { get; set; }
        public Dictionary<string, object> Values { get; set; } = new();
    }
}