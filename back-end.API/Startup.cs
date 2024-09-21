using back_end.DAL.Services;
using back_end.BLL.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace back_end.API{
    public class Startup{
        public void ConfigureServices(IServiceCollection services){
            // Enable CORS for the whole application
            services.AddCors(options =>
            {
                options.AddPolicy("AllowAllOrigins", builder =>
                {
                    builder.AllowAnyOrigin()   // Allows requests from any origin (http://localhost:3000 in your case)
                        .AllowAnyMethod()   // Allows any HTTP method (GET, POST, etc.)
                        .AllowAnyHeader();  // Allows any headers
                });
            });


            //Register Conrtrollers
            services.AddControllers();

            //Register ExerciseOne Related Services
            services.AddHttpClient<ExerciseOneService>();
            services.AddTransient<ExerciseOneJob>();

            //Register ExerciseTwo Relates Services
            services.AddScoped<ExerciseTwoJob>();
            services.AddScoped<ExerciseTwoService>();

            //Register Exercise Three Related Services
            services.AddScoped<ExerciseThreeService>();
            services.AddScoped<ExerciseThreeJob>();

            //Enable HttppClient Injection
            services.AddHttpClient();
        }
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env){
            if (env.IsDevelopment()){
                app.UseDeveloperExceptionPage();
            }
            app.UseRouting();

            app.UseCors(builder =>
                builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>{
                endpoints.MapControllers();
            });
            
        }
    }
}