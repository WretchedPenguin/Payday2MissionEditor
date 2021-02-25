using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using MissionEditor2.Domain;
using Newtonsoft.Json;

namespace MissionEditor2.Services
{
    public class ElementService
    {
        public Func<Element,Task> OnElementCreated;
        private readonly Dictionary<long, Element> elements = new();
        private readonly ILogger<ElementService> logger;

        public ElementService(ILogger<ElementService> logger)
        {
            this.logger = logger;
        }

        public void UpdateValue(ElementUpdate elementUpdate)
        {
            if (!elements.ContainsKey(elementUpdate.Id))
            {                
                logger.LogInformation($"tried updating non-existing element {elementUpdate.Id}");
                return;
            }
            logger.LogInformation($"updating element {elementUpdate.Id} with {elementUpdate.Name}={elementUpdate.Value}");
            elements[elementUpdate.Id].Values[elementUpdate.Name] = elementUpdate.Value;
        }

        public async Task CreateElement(Element element)
        {
            logger.LogInformation("adding element " + JsonConvert.SerializeObject(element));
            elements[element.Id] = element;
            if (OnElementCreated != null) 
                await OnElementCreated?.Invoke(element);
        }
        
        
    }
}