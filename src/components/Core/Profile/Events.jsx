import React from "react";

function Events() {
  const events = [
    {
      id: 1,
      title: "Team Building Activity",
      date: "2023-11-15",
      description: "A fun team-building activity to enhance collaboration.",
    },
    {
      id: 2,
      title: "Annual Company Meeting",
      date: "2023-12-01",
      description:
        "Annual meeting to discuss company performance and future plans.",
    },
    {
      id: 3,
      title: "Holiday Party",
      date: "2023-12-20",
      description: "End of year holiday party to celebrate the festive season.",
    },
  ];

  return (
    <div className="h-auto mb-5">
      <div className="flex justify-between items-center w-full mb-2">
        <h2 className="text-2xl font-semibold">Upcoming Events</h2>
        {/* <button className="bg-[#FFC20E] p-2 rounded-xl text-white px-8">
          Add Event
        </button> */}
      </div>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.date}</p>
            <p className="mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;