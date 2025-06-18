import FormComponent from "../components/forms/FormComponent";

function HomePage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 h-full w-full object-cover z-[-2]"
            >
                <source src="/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

           

            {/* Main Layout: Align to Right */}
            <div className="relative z-90 flex min-h-screen items-center justify-end px-20">
                <div className="w-full max-w-md ">
                    {/* Logo */}
                    <div className="mb-6 flex justify-center "> 
                        <img
                            src="/CodeNestLogo.svg"
                            alt="Code Nest Logo"
                            className="h-24 w-auto"
                        />
                    </div>

                    {/* Form */}
                    <FormComponent />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
