import React from "react";

function Preview({
  itineraryTitle,
  itineraryDescription,
  destination,
  startDate,
  endDate,
  activities,
  inclusions,
  exclusions,
  onClose,
  onDownload,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md w-3/4 h-3/4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold text-xl">Trip Summary</h1>
          <button
            className="bg-red-500 text-white p-2 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div id="trip-summary" className="bg-white p-4 rounded-md">
          <p className="mt-2">
            <strong>Title:</strong> {itineraryTitle}
          </p>
          <p className="mt-2">
            <strong>Description:</strong> {itineraryDescription}
          </p>
          <p className="mt-2">
            <strong>Destination:</strong> {destination}
          </p>
          <p className="mt-2">
            <strong>Start Date:</strong> {startDate}
          </p>
          <p className="mt-2">
            <strong>End Date:</strong> {endDate}
          </p>
          <p className="mt-2">
            <strong>Activities:</strong> {activities.join(", ")}
          </p>
          <p className="mt-2">
            <strong>Inclusions:</strong> {inclusions.join(", ")}
          </p>
          <p className="mt-2">
            <strong>Exclusions:</strong> {exclusions.join(", ")}
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            onClick={onDownload}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preview;
