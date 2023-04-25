using FullStack.Api.Model;
using Microsoft.EntityFrameworkCore;

namespace FullStack.Api.Data
{
    public class FullStackDbContext:DbContext
    {
    
    public FullStackDbContext(DbContextOptions<FullStackDbContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
    }
}
