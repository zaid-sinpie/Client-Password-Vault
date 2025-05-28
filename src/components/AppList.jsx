const AppList = ({ allApps }) => {
  return (
    <section className="h-[200px] flex flex-col justify-start items-center gap-1 overflow-y-auto">
      {allApps.map((item) => {
        return (
          <div className="w-full px-0.5 py-1 border-b-2 hover:bg-[#e3e3e3] cursor-pointer">
            <h1 className="font-bold text-[14px]">{item.appName}</h1>
            <p className="font-thin text-[12px]">{item.username}</p>
          </div>
        );
      })}
    </section>
  );
};

export default AppList;
