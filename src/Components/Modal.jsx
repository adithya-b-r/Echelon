export const Modal = () => {
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 font-sans">
      <div className="bg-white h-[90vh] w-[90vw] max-w-3xl rounded-lg shadow-lg" style={{border: "5px ridge royalblue"}}>
        <div className="w-full h-[10%] flex justify-between items-center px-4 border-b-2 border-b-slate-300">
          <h3 className=" text-2xl tracking-wider font-semibold">Event Name</h3>
          <i class='bx bx-x text-4xl'></i>
        </div>

        <div className="h-[90%] flex flex-col items-center py-5">
          <img className="h-32 w-32 rounded-full" src="/imgs/events/aura.jpeg" alt="aura" />

          <h3 className="mt-4 text-xl font-semibold ">Event Type</h3>
        </div>
      </div>
    </div>
  );
};
