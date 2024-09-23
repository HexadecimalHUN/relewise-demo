using System;
using System.Threading.Tasks;
using back_end.BLL.Services;
using back_end.Shared.Interfaces;
using back_end.Shared.Models;
using Microsoft.AspNetCore.Mvc;

namespace back_end.API.Controllers{
    [Route("api/[controller]")]
    [ApiController]
    public class ExerciseOneController: ControllerBase{
        private readonly ExerciseOneJob _exerciseOneJob;

        public ExerciseOneController(ExerciseOneJob excerciseOneJob){
            _exerciseOneJob = excerciseOneJob;
        }

        [HttpPost("execute")]
        public async Task<IActionResult> ExecuteJob([FromBody] JobArguments jobArguments){
            try{
                //Define Logging function for the job
                Func<string, Task> info = async (message) =>{
                    //Log info message
                    Console.WriteLine($"Info: {message}");
                    await Task.CompletedTask;
                };

                Func <string, Task> warn = async (message) =>{
                    //Log warning message
                    Console.WriteLine($"Warning: {message}");
                    await Task.CompletedTask;
                };

                //Execute the job
                var result = await _exerciseOneJob.Execute(jobArguments, info, warn, HttpContext.RequestAborted);

                //Return the result
                return Ok(new {message = result});
            }
            catch(OperationCanceledException){
                return StatusCode(499, "Request Cancelled");
            }
            catch(Exception ex){
                //Handle unexpected errors
                Console.WriteLine($"Error: {ex.Message}");
                Console.WriteLine($"Stack Trace: {ex.StackTrace}");
                return StatusCode (500, "Unexpected error occured");
            }

        }
    }
}