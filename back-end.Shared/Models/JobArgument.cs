using System;
using System.Collections.Generic;

namespace back_end.Shared.Models{
   public class JobArguments
{
    public Guid DatasetId { get; set; }
    public string ApiKey { get; set; }
    public IReadOnlyDictionary<string, string> JobConfiguration { get; set; }

    public JobArguments(Guid datasetId, string apiKey, IReadOnlyDictionary<string, string> jobConfiguration)
    {
        DatasetId = datasetId;
        ApiKey = apiKey;
        JobConfiguration = jobConfiguration;
    }
}
}