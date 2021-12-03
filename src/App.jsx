import "./App.css";
import Carder from "./components/Carder";
import { useQuery } from "react-query";
import { data_get } from "./api/API";
import { useEffect, useState } from "react";
import { Space, Spin } from "antd";

function App() {
  const [stateData, setStateData] = useState();

  const {
    isLoading: data_loading,
    isError: data_error,
    data: data_data,
  } = useQuery("data_get", data_get);

  if (data_data) {
    console.log(stateData);
  }

  useEffect(() => {
    setStateData(data_data?.data);
  }, [data_data]);
  return (
    <main className="App">
      {stateData ? (
        stateData?.map((e, i) => {
          return (
            <>
              <div className="wrapper">
                <Carder title={e.title} body={e.body} index={e.id} />
              </div>
            </>
          );
        })
      ) : (
        <Spin />
      )}
      {data_loading && <Spin />}
      {data_error && <Carder title="Error" body="Error" />}
    </main>
  );
}

export default App;
