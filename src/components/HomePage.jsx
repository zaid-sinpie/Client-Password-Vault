import Button from "./Button";
import { Link } from "react-router-dom";
import AppList from "./AppList";

import { getStoredApps } from "../../public/common";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [allApps, setAllApps] = useState();

  useEffect(() => {
    async function fetchData() {
      const apps = await getStoredApps();
      setAllApps(apps || []);
    }

    fetchData();
  }, []);

  return (
    <section className="w-[200px] h-[250px] flex flex-col justify-start gap-2 items-center px-2">
      <div className="flex w-full justify-between items-center px-5">
        <Button fit>Login All</Button>
        <Link to={"/saveApps"}>
          <Button fit>Save Apps</Button>
        </Link>
      </div>
      <h1 className="text-start w-full text-[14px] font-bold mb-2">My Apps</h1>
      {(allApps === undefined || allApps.length === 0) && (
        <p className="w-full text-center">No saved apps found!</p>
      )}
      {allApps && <AppList allApps={allApps} />}
    </section>
  );
};

export default HomePage;
