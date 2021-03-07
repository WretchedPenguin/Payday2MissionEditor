using System.Text.Json.Serialization;

namespace MissionEditor2.Domain
{
    public class UnitSequenceItem
    {
        public string Name { get; set; }
        [JsonPropertyName("notify_unit_id")]
        public float Notify_Unit_Id { get; set; }
        [JsonPropertyName("notify_unit_sequence")]
        public string Notify_Unit_Sequence { get; set; }
        public float Time { get; set; }
    }
}