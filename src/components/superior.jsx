const Superior = (props) => {
  return (
    <div>
      <div
        key={props.id}
        className="flex flex-col items-start p-6 space-y-3 text-center shadow-md rounded-xl min-h-64"
      >
        <span className="p-5 bg-icon border border-green border-dashed rounded-full">
          <img
            src={props.icon}
            alt="icon"
            className="h-8 w-8 object-scale-down"
          />
        </span>

        <h1 className="text-xl font-semibold text-info capitalize">
          {props.title}
        </h1>

        <p className="text-info font-light text-start">
          {props.description}
        </p>
      </div>
    </div>
  );
};

export default Superior;
