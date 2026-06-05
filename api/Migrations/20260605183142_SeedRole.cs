using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class SeedRole : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "9aa1ec2b-df86-4dd0-b601-5cbad15cef82", "2e80542e-6855-4b48-acfa-0005e62d08e1", "Admin", "ADMIN" },
                    { "ca3fde9b-9363-44d7-bdb2-529c52e7ce9e", "d7965edd-cd97-4a8f-bbc5-0bae3d1f8ae0", "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9aa1ec2b-df86-4dd0-b601-5cbad15cef82");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ca3fde9b-9363-44d7-bdb2-529c52e7ce9e");
        }
    }
}
