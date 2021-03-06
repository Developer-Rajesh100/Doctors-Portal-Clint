import React from "react";

const Dental = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://i.ibb.co/sVFqP16/treatment.png"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="mx-20">
                    <h1 className="text-5xl font-bold">
                        Exceptional Dental Care, on Your Terms{" "}
                    </h1>{" "}
                    <p className="py-6 text-justify">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.The point of using Lorem Ipsumis
                        that it has a more - or - less normal distribution of
                        letters, as opposed to using 'Content here, content here
                        ', making it look like readable English. Many desktop
                        publishing packages and web page{" "}
                    </p>{" "}
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
                        GET STARTED{" "}
                    </button>{" "}
                </div>{" "}
            </div>{" "}
        </div>
    );
};

export default Dental;
