using Microsoft.AspNetCore.Mvc;

namespace MissionEditor2.Domain
{
    
    [BindProperties]
    public class ElementUpdate
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Value { get; set; }
    }
}