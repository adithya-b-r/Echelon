export const Modal = ({ isOpen, onClose, event }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 font-sans"
      onClick={onClose}
    >
      <div
        className="bg-black bg-opacity-80 text-white h-fit md:h-fit w-[90vw] max-w-3xl rounded-lg shadow-lg"
        style={{ border: "5px ridge white" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full py-2 h-[10%] flex justify-between items-center px-4 border-b-2 border-b-slate-300">
          <h3 className="text-2xl tracking-wider font-semibold">{event.name}</h3>
          <i
            onClick={onClose}
            className="bx bx-x text-4xl cursor-pointer"
          ></i>
        </div>

        <div className="h-fit flex flex-col items-center py-5">
          <img
            className="h-32 w-32 rounded-full"
            style={{ border: "5px ridge #fff" }}
            src={event.image}
            alt={event.name}
          />

          <h3 className="mt-4 text-xl font-semibold uppercase tracking-wide">
            {event.category}
          </h3>

          <h3 className="mt-2 text-lg font-medium">
            Participants: {event.participants}
          </h3>

          <div className="w-full h-fit mt-5 px-5">
            <h3 className="text-xl font-semibold tracking-wider">
              General Rules:
            </h3>
            <div className="ml-4 text-lg tracking-wide mt-2">
              <p>1. Under Construction</p>
              <p>2. Under Construction</p>
            </div>
          </div>

          <div className="w-full h-fit mt-6 px-5">
            <h3 className="text-xl font-semibold tracking-wider">
              Event Coordinators:
            </h3>
            <div className="ml-4 text-lg tracking-wide mt-2">
              <div className="flex flex-col md:flex-row justify-between md:px-5">
                {event.coordinators.map((coordinator, i) => (
                  <div onClick={() => window.location.href = "tel:+91{coordinator.split(' - ')[1]}"} key={i}>
                    <p className="font-semibold">{coordinator.split(' - ')[0]}</p>
                    <p>+91 {coordinator.split(' - ')[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
