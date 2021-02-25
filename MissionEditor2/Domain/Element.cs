using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace MissionEditor2.Domain
{
    [BindProperties]
    public class Element
    {
        public long Id { get; set; }
        public string Class { get; set; }

        [BindProperty(Name = "editor_name")]
        public string EditorName { get; set;}
        public Dictionary<string, string> Values { get; set; } = new Dictionary<string, string>();
    }
}