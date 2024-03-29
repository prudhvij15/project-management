export default function ShowProjects({ projects, onDelete }) {
  const formatDate = new Date(projects.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] h-[auto] mt-16 m-20  ">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex  items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2 bg-cyan-500">
            {projects.title}
          </h1>

          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p>{formatDate}</p>
      </header>
      <section>
        <p className="text-stone-600 whitespace-pre-wrap font-bold">
          Description
        </p>
        {projects.descripiton}
      </section>
    </div>
  );
}
