import { useState, useRef } from "react";

import Input from "./Input";
import Button from "./Button";

const SaveApp = () => {
    let initialState = { appName:"", site: "", username: "", password: "" }
  const [data, setData] = useState(initialState);
  const appName = useRef();
  const siteURL = useRef();
  const username = useRef();
  const password = useRef();

  function handleSave(e) {
    e.preventDefault();

    setData({
      appName: appName.current.value,
      site: siteURL.current.value,
      username: username.current.value,
      password: password.current.value,
    });

    console.log(data);

    chrome.runtime.sendMessage({ action: "saveUserSiteData", data });

    setData({ appName:"", site: "", username: "", password: "" })
  }

  return (
    <section>
      <form onSubmit={handleSave}>
        <Input
          ref={appName}
          id={"appName"}
          title={"Enter App Name"}
          value={data.appName}
          onChange={(e) => setData({ ...data, appName: e.target.value })}
        />
        <Input
          ref={siteURL}
          id={"siteURL"}
          title={"Enter Site URL"}
          value={data.site}
          onChange={(e) => setData({ ...data, site: e.target.value })}
        />
        <Input
          ref={username}
          id={"username"}
          title={"Username"}
          type={"email"}
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <Input
          ref={password}
          id={"password"}
          title={"Password"}
          type={"password"}
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Button onClick={handleSave}>Save Credentials</Button>
      </form>
    </section>
  );
};

export default SaveApp;
