export const Rules = () => {
  return (
    <div id="rules" className="w-full min-h-screen bg-gray-900 bg-opacity-20 text-white py-16 px-6 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-white mb-8 text-center">Rules & Regulations</h1>

      <div className="max-w-4xl w-full space-y-6 px-4 md:px-8 lg:px-12">
        {/* Management Events Section */}
        <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-blue-400 text-center md:text-left">Management Events</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-sm md:text-base">
            <li>Unlimited participants per college.</li>
            <li>Open to UG (BMT, BM, Business Quiz) & PG (BMT, BM, Business Quiz, HR, Marketing, Finance, Spark Tank).</li>
            <li>Registration fee: <span className="text-yellow-300">Rs. 150 per participant.</span></li>
            <li>Participants must bring their own laptops, calculators, net setters, pen drives, etc.</li>
            <li>Organizers are not responsible for providing any materials.</li>
            <li>Judges' and organizers' decisions are final and binding.</li>
            <li>Use of unfair means will lead to immediate disqualification.</li>
            <li>Participants must use team names allotted by the Echelon team for confidentiality.</li>
          </ul>
        </div>

        {/* Non-Management Events Section */}
        <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-green-400 text-center md:text-left">Non-Management Events</h2>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-sm md:text-base">
            <li>Unlimited participants per college.</li>
            <li>Open to both UG & PG students.</li>
            <li>Registration fee: <span className="text-yellow-300">Rs. 100 per participant.</span></li>
            <li>Judges' and organizers' decisions are final and binding.</li>
            <li>Use of unfair means will lead to immediate disqualification.</li>
            <li>Participants must use team names allotted by the Echelon team for confidentiality.</li>
          </ul>
        </div>

        <div className="w-full flex items-center justify-center text-center -mt-8">
          <button
            onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeYfzn7gJEKVF0oCa9igF8tFl7HQPALjJKyevpMxQS1ATEFzw/viewform?usp=header"}
            className="bg-blue-500 rounded-md md:w-[50%] w-[70%] h-14  text-3xl text-white mt-16 border-[1px] border-white">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};