using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using ProjRepositorio;
using AutoMapper;
using Microsoft.AspNetCore.Mvc.NewtonsoftJson;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;


namespace ProjAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
           /* Usar este método para banco de dados Microsoft Sql
           
           services.AddDbContext<ProjCetedContext>(
               c => c.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"), providerOptions => providerOptions.EnableRetryOnFailure() ));
               c => c.UseMysql(Configuration.GetConnectionString("DefaultConnection"), providerOptions => providerOptions.EnableRetryOnFailure() ));
            */
             services.AddDbContext<ProjCetedContext>(
                dbContextOptions => dbContextOptions
                    .UseMySql(
                        // Replace with your connection string.
                        "server=ceted.feevale.br; user=calcado; password=projCalcado*12*; Database=calcadoMuseu",
                         
                        // Replace with your server version and type. if needed port=3306; 
                        // For common usages, see pull request #1233.
                       // new MySqlServerVersion(new Version(8, 0, 21)), // use MariaDbServerVersion for MariaDB
                        mySqlOptions => mySqlOptions
                            .CharSetBehavior(CharSetBehavior.NeverAppend))
                    // Everything from this point on is optional but helps with debugging.
                    .EnableSensitiveDataLogging()
                    .EnableDetailedErrors());



           services.AddScoped<IProjRepositorio, RepositorioProj>();  
           services.AddControllers().AddNewtonsoftJson(); 
           services.AddCors();
           services.AddAutoMapper();

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.UseCors(x => x.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            //app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            
        }
    }
}