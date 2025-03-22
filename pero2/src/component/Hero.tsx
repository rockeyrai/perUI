
const Hero = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative w-[100%] max-w-screen overflow-x-hidden-hidden h-screen bg-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover contrast-150 sepia-0 grayscale-0 blur-[1px] brightness-75"
          src="/hero.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="w-2/3">
            <h1 className="text-7xl font-bold mb-4">
              Rapid Data Analysis at Your Fingertips
            </h1>
            <p className="text-lg px-40">
              Your go-to AI tool for instant access to company information.
              Gather and analyze data for insightful decision-making in seconds.
            </p>
            <div className="flex justify-center gap-2 items-center py-2">
              <button className="px-4 py-2 bg-white text-black font-bold rounded-xl hover:bg-gray-200">
                Demo
              </button>
              <button className="px-4 py-2 bg-white text-black font-bold rounded-xl hover:bg-gray-200">
                View Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
