import { useEffect, useState } from "react";
import axios from "axios";
import Course from "./components/Course";
import Menu from "./components/Menu";
import CourseType from "./types/Course";

function App() {
  const [data, setData] = useState<CourseType[]>([]);
  const [filteredData, setFilteredData] = useState<CourseType[]>([]);

  useEffect(() => {
    axios.get("https://logiclike.com/docs/courses.json").then((res) => {
      setData(res.data);
      setFilteredData(res.data);
    });
  }, []);

  const handleFilterCourses = (tag: string) => {
    if (tag === "Все темы") {
      setFilteredData(data);
      return;
    }
    const filteredCourses = data.filter((course) => course.tags.includes(tag));
    setFilteredData(filteredCourses);
  };

  return (
    <div className="App">
      <Menu handleFilterCourses={handleFilterCourses} />
      <div className="courses">
        {filteredData.length > 0 ? (
          filteredData.map((item: CourseType) => (
            <Course {...item} key={item.id} />
          ))
        ) : (
          <h1>Ничего не найдено</h1>
        )}
      </div>
    </div>
  );
}

export default App;
