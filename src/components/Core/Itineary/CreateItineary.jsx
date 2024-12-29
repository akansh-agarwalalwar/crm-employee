import React, { useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Preview from "./Preview";

function CreateItineary({ onBack }) {
  const [activities, setActivities] = useState([
    { day: 1, activity: "", descriptions: [""] },
  ]);
  const [inclusions, setInclusions] = useState([""]);
  const [exclusions, setExclusions] = useState([""]);
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [itineraryTitle, setItineraryTitle] = useState("");
  const [itineraryDescription, setItineraryDescription] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const addActivity = () => {
    setActivities([
      ...activities,
      {
        day: activities.length + 1,
        activity: "",
        descriptions: [""],
      },
    ]);
  };

  const removeActivity = (index) => {
    const newActivities = activities.filter((_, i) => i !== index);
    setActivities(
      newActivities.map((activity, i) => ({ ...activity, day: i + 1 }))
    );
  };

  const addDescription = (activityIndex) => {
    const newActivities = [...activities];
    newActivities[activityIndex].descriptions.push("");
    setActivities(newActivities);
  };

  const removeDescription = (activityIndex, descriptionIndex) => {
    const newActivities = [...activities];
    newActivities[activityIndex].descriptions.splice(descriptionIndex, 1);
    setActivities(newActivities);
  };

  const addInclusion = () => {
    setInclusions([...inclusions, ""]);
  };

  const removeInclusion = (index) => {
    const newInclusions = inclusions.filter((_, i) => i !== index);
    setInclusions(newInclusions);
  };

  const addExclusion = () => {
    setExclusions([...exclusions, ""]);
  };

  const removeExclusion = (index) => {
    const newExclusions = exclusions.filter((_, i) => i !== index);
    setExclusions(newExclusions);
  };

  const generatePDF = () => {
    const input = document.getElementById("trip-summary");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("trip-summary.pdf");
    });
  };

  return (
    <div className="w-full flex flex-col overflow-y-auto scrollbar-hide">
      <div className="bg-white p-2 shadow-sm w-full justify-between flex">
        <div className="text-2xl font-semibold">Travello10</div>
        <div className="flex gap-2 items-center">
          <div
            className="border-2 p-1 px-5 text-black border-gray-500 rounded-md cursor-pointer"
            onClick={() => setShowPreview(true)}
          >
            Preview
          </div>
          <div className="bg-black text-white p-1 px-5 rounded-md">
            Save Draft
          </div>
          <div className="bg-red-500 text-white p-1 px-5 rounded-md">
            Upload
          </div>
        </div>
      </div>
      <div className="px-20 mt-4 w-full">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onBack}>
          <FaRegArrowAltCircleLeft size={40} />
          <div className="">
            <p className="font-bold text-2xl">Create Itineary</p>
            <p>Plan your perfect trip with our easy-to-use itineary builder</p>
          </div>
        </div>
        <div className="w-full flex gap-4 mt-4">
          <div className="w-full flex flex-col gap-4">
            <div className="bg-white p-4 shadow-sm rounded-md flex flex-col gap-4">
              <div className="text-xl font-semibold">Destinational Details</div>
              <div>
                <label>Destination</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 text-gray-700 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary"
                  placeholder="Enter Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="flex gap-4 w-full">
                <div className="w-full">
                  <label>Start Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 text-gray-700 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label>End Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 text-gray-700 border-2 border-gray-300 rounded-md focus:outline-none focus:border-primary"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="bg-white p-4 shadow-sm rounded-md flex flex-col gap-4">
              <div className="font-semibold w-full flex justify-between items-center">
                <p className="text-xl">Daily Activities</p>
                <div
                  className="flex gap-2 items-center border-2 p-2 rounded-lg cursor-pointer"
                  onClick={addActivity}
                >
                  <FaPlus />
                  Add Activity
                </div>
              </div>
              {activities.map((activity, activityIndex) => (
                <div key={activityIndex} className="border-2 p-2 rounded-md">
                  <div className="flex justify-end items-center">
                    <p className="text-lg font-semibold border-2 p-1 rounded-md border-black">
                      Day {activity.day}
                    </p>
                  </div>
                  <div className="mt-4 flex w-full gap-4 justify-between">
                    <div className="w-full">
                      <label>Activity</label>
                      <input
                        type="text"
                        className="w-full text-gray-700 border-2 border-gray-300 rounded-md p-1"
                        placeholder="Enter Activity"
                        value={activity.activity}
                        onChange={(e) => {
                          const newActivities = [...activities];
                          newActivities[activityIndex].activity =
                            e.target.value;
                          setActivities(newActivities);
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label>Description</label>
                    {activity.descriptions.map(
                      (description, descriptionIndex) => (
                        <div
                          key={descriptionIndex}
                          className="flex gap-2 items-center mt-2"
                        >
                          <input
                            type="text"
                            className="w-full text-gray-700 border-2 border-gray-300 rounded-md p-1"
                            placeholder="Enter Description"
                            value={description}
                            onChange={(e) => {
                              const newActivities = [...activities];
                              newActivities[activityIndex].descriptions[
                                descriptionIndex
                              ] = e.target.value;
                              setActivities(newActivities);
                            }}
                          />
                          <FaPlus
                            size={20}
                            className="cursor-pointer"
                            onClick={() => addDescription(activityIndex)}
                          />
                          <MdDelete
                            color="red"
                            size={20}
                            className="cursor-pointer"
                            onClick={() =>
                              removeDescription(activityIndex, descriptionIndex)
                            }
                          />
                        </div>
                      )
                    )}
                  </div>
                  {activities.length > 1 && (
                    <div className="mt-4 flex justify-end">
                      <button
                        className="flex gap-2 items-center border-2 p-2 rounded-lg cursor-pointer text-red-500"
                        onClick={() => removeActivity(activityIndex)}
                      >
                        <FaMinus />
                        Remove Activity
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-white p-4 shadow-sm rounded-md flex flex-col gap-4">
              <h2 className="text-lg font-bold">Inclusion/Exclusion</h2>
              <div className="flex gap-8 items-center">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-semibold">Inclusion</label>
                  {inclusions.map((inclusion, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="text"
                        className="w-full text-gray-700 border-2 border-gray-300 rounded-md p-1"
                        placeholder="Enter Inclusion"
                        value={inclusion}
                        onChange={(e) =>
                          setInclusions(
                            inclusions.map((item, i) =>
                              i === index ? e.target.value : item
                            )
                          )
                        }
                      />
                      <div className="flex gap-2 items-center">
                        <MdDelete
                          color="red"
                          size={20}
                          className="cursor-pointer"
                          onClick={() => removeInclusion(index)}
                        />
                        <FaPlus
                          size={20}
                          className="cursor-pointer"
                          onClick={addInclusion}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-lg font-semibold">Exclusion</label>
                  {exclusions.map((exclusion, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="text"
                        className="w-full text-gray-700 border-2 border-gray-300 rounded-md p-1"
                        placeholder="Enter Exclusion"
                        value={exclusion}
                        onChange={(e) =>
                          setExclusions(
                            exclusions.map((item, i) =>
                              i === index ? e.target.value : item
                            )
                          )
                        }
                      />
                      <div className="flex gap-2 items-center">
                        <MdDelete
                          color="red"
                          size={20}
                          className="cursor-pointer"
                          onClick={() => removeExclusion(index)}
                        />
                        <FaPlus
                          size={20}
                          className="cursor-pointer"
                          onClick={addExclusion}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="shadow-sm rounded-md w-80">
              <div className="text-md font-semibold flex flex-col">
                <input
                  type="text"
                  className="w-full p-2 rounded-md border"
                  placeholder="Itineary Title"
                  value={itineraryTitle}
                  onChange={(e) => setItineraryTitle(e.target.value)}
                />
                <textarea
                  className="w-full mt-3 p-2 rounded-md border"
                  placeholder="Itineary Description"
                  rows="6"
                  value={itineraryDescription}
                  onChange={(e) => setItineraryDescription(e.target.value)}
                />
              </div>
              <div id="trip-summary" className="bg-white p-4 mt-4 rounded-md">
                <h1 className="font-bold text-center">Trip Summary</h1>
                <p className="mt-2 border-2 p-2 rounded-md">
                  <span className="font-semibold">Title:</span> {itineraryTitle}
                </p>
                <p className="mt-2 border-2 p-2 rounded-md">
                  <span className="font-semibold">Description:</span>{" "}
                  {itineraryDescription}
                </p>
                <p className="mt-2 border-2 p-2 rounded-md">
                  <span className="font-semibold">Destination:</span>{" "}
                  {destination}
                </p>
                <p className="mt-2 border-2 p-2 rounded-md">
                  <span className="font-semibold">Start Date:</span> {startDate}
                </p>
                <p className="mt-2 border-2 p-2 rounded-md">
                  <span className="font-semibold">End Date:</span> {endDate}
                </p>
                <div className="mt-2 border-2 p-2 rounded-md">
                  <p className="font-semibold">Activities:</p>
                  {activities.map((activity, index) => (
                    <div key={index} className="mt-2 border-2 p-2 rounded-md">
                      <p className="font-semibold">Day {activity.day}:</p>{" "}
                      {activity.activity}
                      {activity.descriptions.map((description, descIndex) => (
                        <p key={descIndex} className="ml-4 break-words">
                          - {description}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="mt-2 border-2 p-2 rounded-md">
                  <p className="font-semibold">Inclusions:</p>
                  {inclusions.map((item, index) => (
                    <p key={index} className="ml-4 break-words">
                      - {item}
                    </p>
                  ))}
                </div>
                <div className="mt-2 border-2 p-2 rounded-md">
                  <p className="font-semibold">Exclusions:</p>
                  {exclusions.map((item, index) => (
                    <p key={index} className="ml-4 break-words">
                      - {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="mt-4 ml-4">
                <h1 className="font-semibold">Members</h1>
                <div className="flex gap-4 items-center mt-4">
                  <div className="flex gap-2 items-center">
                    <label>FIT</label>
                    <input type="radio" className="border-2 p-2 rounded-md" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <label>GIT</label>
                    <input type="radio" className="border-2 p-2 rounded-md" />
                  </div>
                </div>
                <div className="flex gap-4 items-center mt-4 w-full">
                  <select className="p-2 rounded-md w-full">
                    <option value="1">1 Members</option>
                    <option value="2">2 Members</option>
                    <option value="2">3 Members</option>
                    <option value="2">4 Members</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 mb-4 bg-white w-full p-4 rounded-md">
                <h1 className="text-center font-bold">Costing</h1>
                <div className="mt-2 flex gap-4 items-center justify-between p-2 border-b">
                  <p>Pax Sharing</p>
                  <p>Charges Per Person</p>
                </div>
                <div className="mt-2 flex flex-col gap-4 items-center justify-between p-2 w-full">
                  <div className="flex gap-2 items-center w-full">
                    <label className="w-full">Double</label>
                    <input
                      type="text"
                      className="border-2 p-2 rounded-md w-full text-center"
                      placeholder="32,880/- PP"
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full">
                    <label className="w-full">Triple</label>
                    <input
                      type="text"
                      className="border-2 p-2 rounded-md w-full text-center"
                      placeholder="28,920/- PP"
                    />
                  </div>
                  <div className="flex gap-2 items-center w-full">
                    <label className="w-full">Quad</label>
                    <input
                      type="text"
                      className="border-2 p-2 rounded-md w-full text-center"
                      placeholder="24,120/- PP"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPreview && (
        <Preview
          itineraryTitle={itineraryTitle}
          itineraryDescription={itineraryDescription}
          destination={destination}
          startDate={startDate}
          endDate={endDate}
          activities={activities}
          inclusions={inclusions}
          exclusions={exclusions}
          onClose={() => setShowPreview(false)}
          onDownload={generatePDF}
        />
      )}
    </div>
  );
}

export default CreateItineary;
