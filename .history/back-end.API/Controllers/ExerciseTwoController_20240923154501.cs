using System;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using back_end.Shared.Models;
using back_end.BLL.Services;
using System.Threading;

namespace back_end.API.Controllers{
    [ApiController]
    [Route("api/[controller]")]
    public class ExerciseTwoController : ControllerBase{
        private readonly ExerciseTwoJob _exerciseTwoJob;

        public ExerciseTwoController(ExerciseTwoJob exerciseTwoJob){
            _exerciseTwoJob = exerciseTwoJob;
        }
        [HttpPost("execute")]
        
        public async Task<IActionResult> Execute([FromBody] JobArguments jobArguments){
            
            if (jobArguments == null){
                return BadRequest("Invalid Job Arguments");
            }

            try{
                var result = await _exerciseTwoJob.Execute(jobArguments, LogInfo, LogWarn, CancellationToken.None);
                return Ok(new{Message = result});
            }
            catch(Exception ex){
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

        private Task LogInfo(string message){
            Console.WriteLine($"INFO: {message}");
            return Task.CompletedTask;
        }

        private Task LogWarn(string message){
            Console.WriteLine($"WARN: {message}");
            return Task.CompletedTask;
        }

    };
}