using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using back_end.BLL.Services;
using back_end.Shared.Models;
using System;
using System.Threading;

namespace back_end.API.Controllers{
    [ApiController]
    [Route("api/[controller]")]
    public class ExerciseThreeController : ControllerBase {
        private readonly ExerciseThreeJob _exerciseThreeJob;

        public ExerciseThreeController(ExerciseThreeJob exerciseThreeJob){
            _exerciseThreeJob = exerciseThreeJob;
        }
        [HttpPost("execute")]
        public async Task<IActionResult> ExecuteJob(JobArguments jobArguments, CancellationToken token){
            try{
                var result = await _exerciseThreeJob.Execute(jobArguments, LogInfo, LogWarning , token);
                return Ok(new {message = result});
            }
            catch(Exception ex){
                return StatusCode(500, new {error = ex.Message});
            }
        }

        private Task LogInfo(string info){
            Console.WriteLine(info);
            return Task.CompletedTask;
        }

        private Task LogWarning(string info){
            Console.WriteLine(info);
            return Task.CompletedTask;
        }

    }
}