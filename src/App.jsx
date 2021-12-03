import "./App.css";
import Carder from "./components/Carder";
import { useQuery } from "react-query";
import { data_get } from "./api/API";
import { useEffect, useState } from "react";
import { Spin } from "antd";

function App() {
  //! Statement untuk menyimpan data dari Query
  const [stateData, setStateData] = useState();

  // !Data Dari API yang disimpan ke Query
  const {
    isLoading: data_loading,
    isError: data_error,
    data: data_data,
  } = useQuery("data_get", data_get);

  // * Jika Ada data dari Query maka print data ke console
  if (data_data) {
    console.log(stateData);
  }

  // ! Proses Data Disimpan ke State
  useEffect(() => {
    setStateData(data_data?.data);
  }, [data_data]);

  return (
    <main className="App">
      {/* Jika data state ada munculkan jika tidak loading */}
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
