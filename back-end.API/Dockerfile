FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 5000

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["back-end.API/back-end.API.csproj", "back-end.API/"]
COPY ["back-end.BLL/back-end.BLL.csproj", "back-end.BLL/"]
COPY ["back-end.DAL/back-end.DAL.csproj", "back-end.DAL/"]
COPY ["back-end.Shared/back-end.Shared.csproj", "back-end.Shared/"]
RUN dotnet restore "back-end.API/back-end.API.csproj"
COPY . .
WORKDIR "/src/back-end.API"
RUN dotnet build "back-end.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "back-end.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "back-end.API.dll"]