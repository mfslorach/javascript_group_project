use flight_information;

db.dropDatabase();

db.flights.insertMany([
    {
        origin: "GLA",
        destination: "JFK",
        footprint: 2200,
        date: "2023-01-05",
        arrivalDate: "2023-01-25"
    },
    {
        origin: "GLA",
        destination: "SIN",
        footprint: 6300,
        date: "2022-07-01",
        arrivalDate: "2022-07-13"
    },
    {
        origin: "GLA",
        destination: "PEK",
        footprint: 4300,
        date: "2021-11-13",
        arrivalDate: "2021-11-25"
    }
]);