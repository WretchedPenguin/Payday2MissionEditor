using System.Linq;

namespace MissionEditor2.Domain
{
    public class Vector3
    {
        public float X { get; set; }
        public float Y { get; set; }
        public float Z { get; set; }

        public Vector3(float x, float y, float z)
        {
            X = x;
            Y = y;
            Z = z;
        }

        public static Vector3 FromString(string vector)
        {
            // position is in format x, y, z
            var xyz =
                vector
                    .Split(',')
                    .Select(float.Parse)
                    .ToArray();

            return new Vector3(xyz[0], xyz[1], xyz[2]);
        }
    }
}