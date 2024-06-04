const Finance = (props) => {
  return (
    <div>
      <div
        key={props.id}
        className="flex flex-col items-center p-6 space-y-3 text-center"
      >
        <span className="inline-block p-5  bg-icon border border-green border-dashed rounded-full ">
          <img
            src={props.icon}
            alt="icon"
            className="h-8 w-8 object-scale-down"
          />
        </span>

        <h1 className="text-xl font-semibold text-label capitalize ">
          {props.title}
        </h1>

        <p className="text-info font-light">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Finance;
