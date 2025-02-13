export const Modal = ({ isOpen, onClose, event, type }) => {
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
            {event.participants == 1 && (
              <>Participant: {event.participants}</>
            )}

            {event.participants != 1 && (
              <>Participants: {event.participants} make a team.</>
            )}
          </h3>

          <div className="w-full h-fit mt-5 px-5">
            <h3 className="text-xl font-semibold tracking-wider text-orange-400">
              General Rules:
            </h3>
            <div className="ml-4 text-lg tracking-wide mt-2">
              {event.type === 0 && event.index <= 3 && (
                <>
                  <p>1. This event is open only for PG students.</p>
                  <p>2. The participation fee is Rs. 150 per person.</p>
                </>
              )}
              {event.type === 0 && event.index > 3 && (
                <>
                  <p>1. This event is open to both UG and PG students.</p>
                  <p>2. The participation fee is Rs. 150 per person.</p>
                </>
              )}

              {event.type === 1 && (
                <>
                  <p>1. This event is open to both UG and PG students.</p>
                  <p>2. The participation fee is Rs. 100 per person.</p>
                </>
              )}

              {event.type === 1 && event.index == 11 && (
                <>
                  <p>3. For the theme contact Event Head one-day prior.</p>
                </>
              )}
            </div>

          </div>

          <div className="w-full h-fit mt-6 px-5">
            <h3 className="text-xl font-semibold tracking-wider text-orange-400">
              {event.coordinators.length > 1 && (
                <>Event Coordinators:</>
              )}

              {event.coordinators.length <= 1 && (
                <>Event Coordinator:</>
              )}

            </h3>
            <div className="ml-4 text-lg tracking-wide mt-2">
              <div className="flex flex-col md:flex-row justify-between md:px-5">
                {event.coordinators.map((coordinator, i) => {
                  const [name, phone] = coordinator.split(' - ');
                  return (
                    <div onClick={() => window.location.href = `tel:+91${phone}`} key={i}>
                      <p className="font-semibold">{name}</p>
                      <p>+91 {phone}</p>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
