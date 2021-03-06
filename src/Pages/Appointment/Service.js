import React from "react";

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center text-secondary font-semibold">
                    {" "}
                    {name}{" "}
                </h2>
                <p className="text-center my-4">
                    {" "}
                    {slots.length > 0 ? (
                        <span>{slots[0]}</span>
                    ) : (
                        <span className="text-red-500">
                            No Slot Available <br /> Please Try Another Date.
                        </span>
                    )}{" "}
                </p>
                <p className="text-center">
                    {slots.length} {slots.length > 0 ? "Spaces" : "Space"}{" "}
                    Available
                </p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        for="booking-modal"
                        className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
                    >
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Service;
