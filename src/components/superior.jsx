const Superior = (props) => {
  return (
    <div className="flex justify-center">
      <div
        key={props.id}
        className="relative flex flex-col items-start py-6 px-14 space-y-3 text-center shadow-md rounded-xl min-h-40 md:max-w-96"
      >
        <div className={`absolute top-10 -left-8`}>
        <img
          src={props.icon}
          alt="icon"
          className={`h-15 w-15 object-scale-down`}
        />
        </div>

        <h1 className="text-xl font-semibold text-info capitalize">
          {props.title}
        </h1>

        <p className="text-info font-light text-start">{props.description}</p>
      </div>
    </div>
  );
};

export default Superior;
