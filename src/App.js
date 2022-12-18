import { useState } from "react";
import CustomPagination from "./components/CustomPagination";

function App() {
    const totalPage = 20;
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="app">
            <h3>Page Number - {currentPage}</h3>

            <CustomPagination
                totalPage={totalPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;
