using System;
using System.Threading;
using System.Threading.Tasks;
using back_end.Shared.Models;

namespace back_end.Shared.Interfaces
{
    public interface IJob
    {
        Task<string> Execute(
            JobArguments arguments,
            Func<string, Task> info,
            Func<string, Task> warn,
            CancellationToken token);
    }
}