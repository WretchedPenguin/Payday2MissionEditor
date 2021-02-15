using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection;
using MissionEditor2.Domain.Attributes;
using MissionEditor2.Domain.Nodes;
using MissionEditor2.Domain.Nodes.Elements;

namespace MissionEditor2.Services
{
    public class NodeService
    {
        private readonly List<NodeType> nodeTypes;

        public NodeService(IEnumerable<Node> nodes)
        {
            nodeTypes = nodes.Select(ConvertNodeToType).ToList();
        }

        private NodeType ConvertNodeToType(Node node)
        {

            var inputs = GetIOPorts<InputAttribute>(node);
            var outputs = GetIOPorts<OutputAttribute>(node);

            return new NodeType()
            {
                Node = node,
                Inputs = inputs,
                Outputs = outputs,
            };
        }

        private List<NodeIO> GetIOPorts<T>(Node node) where T : IOAttribute
        {
            Type type = node.GetType();
            return type.GetProperties()
                .Where(p => p.GetCustomAttribute<IgnoreAttribute>() == null)
                .Select(p => new
                    {property = p, io = p.GetCustomAttribute<T>(), widget = p.GetCustomAttribute<WidgetAttribute>()})
                .Where(p => p.io != null)
                .Select(p => new NodeIO()
                {
                    Name = GetDisplayName(p.property), Type = p.io.Type, 
                    Widget = p.widget == null ? null : new Widget
                    {
                        WidgetAttribute = p.widget,
                        Value = p.property.GetValue(node),
                        Name = p.property.Name
                    }
                }).ToList();
        }

        private static string GetDisplayName(MemberInfo property)
        {
            var displayName = property.GetCustomAttribute<DisplayNameAttribute>();
            return displayName?.DisplayName ?? property.Name;
        }

        public List<NodeType> GetNodeTypes()
        {
            return nodeTypes;
        }
    }
}