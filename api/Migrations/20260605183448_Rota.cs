using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class Rota : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9aa1ec2b-df86-4dd0-b601-5cbad15cef82");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ca3fde9b-9363-44d7-bdb2-529c52e7ce9e");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "a1b2c3d4-e5f6-7890-abcd-ef1234567890", "e33710c5-8f98-49e5-99c4-9a64a84a46cf", "Admin", "ADMIN" },
                    { "b2c3d4e5-f6a7-8901-bcde-f12345678901", "1a989bdf-b4f8-4b3c-96cb-ac48034648cc", "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a1b2c3d4-e5f6-7890-abcd-ef1234567890");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b2c3d4e5-f6a7-8901-bcde-f12345678901");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "9aa1ec2b-df86-4dd0-b601-5cbad15cef82", "2e80542e-6855-4b48-acfa-0005e62d08e1", "Admin", "ADMIN" },
                    { "ca3fde9b-9363-44d7-bdb2-529c52e7ce9e", "d7965edd-cd97-4a8f-bbc5-0bae3d1f8ae0", "User", "USER" }
                });
        }
    }
}
