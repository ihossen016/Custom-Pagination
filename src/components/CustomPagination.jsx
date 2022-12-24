function CustomPagination({ totalPage, currentPage, setCurrentPage }) {
    const firstPage = 1;
    const lastPage = totalPage;

    const pageNumbers = [];
    let beforeSlice = [];
    let firstSlice = [];
    let secondSlice = [];
    let thirdSlice = [];

    for (let i = 0; i < totalPage; i++) {
        pageNumbers.push(i + 1);
    }

    if (pageNumbers.length > 5) {
        if (currentPage - 2 <= 1) {
            firstSlice = [...pageNumbers.slice(0, 4)];
        } else if (currentPage > 3 && currentPage + 2 < totalPage) {
            firstSlice = [];
            secondSlice = [
                ...pageNumbers.slice(currentPage - 2, currentPage + 1),
            ];
        } else if (currentPage + 2 >= totalPage) {
            secondSlice = [];
            thirdSlice = [...pageNumbers.slice(totalPage - 4, totalPage)];
        }
    } else {
        beforeSlice = [...pageNumbers];
    }

    // console.log("firstSlice: " + firstSlice);
    // console.log("secondSlice: " + secondSlice);
    // console.log("thirdSlice: " + thirdSlice);

    return (
        <div className="cp-pagination">
            <button
                onClick={() =>
                    currentPage > 1 && setCurrentPage(currentPage - 1)
                }
            >
                &laquo;
            </button>

            {beforeSlice.length > 0 && (
                <>
                    {beforeSlice.map(pageNumber => (
                        <button
                            key={pageNumber}
                            className={
                                currentPage == pageNumber ? "active" : ""
                            }
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}
                </>
            )}

            {firstSlice.length > 0 && (
                <>
                    {firstSlice.map(pageNumber => (
                        <button
                            key={pageNumber}
                            className={
                                currentPage == pageNumber ? "active" : ""
                            }
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    <span>...</span>
                    <button
                        key={lastPage}
                        className={currentPage == lastPage ? "active" : ""}
                        onClick={() => setCurrentPage(lastPage)}
                    >
                        {lastPage}
                    </button>
                </>
            )}

            {secondSlice.length > 0 && (
                <>
                    <button
                        key={firstPage}
                        className={currentPage == firstPage ? "active" : ""}
                        onClick={() => setCurrentPage(firstPage)}
                    >
                        {firstPage}
                    </button>
                    <span>...</span>
                    {secondSlice.map(pageNumber => (
                        <button
                            key={pageNumber}
                            className={
                                currentPage == pageNumber ? "active" : ""
                            }
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    <span>...</span>
                    <button
                        key={lastPage}
                        className={currentPage == lastPage ? "active" : ""}
                        onClick={() => setCurrentPage(lastPage)}
                    >
                        {lastPage}
                    </button>
                </>
            )}

            {thirdSlice.length > 0 && (
                <>
                    <button
                        key={1}
                        className={currentPage == 1 ? "active" : ""}
                        onClick={() => setCurrentPage(1)}
                    >
                        1
                    </button>
                    <span>...</span>
                    {thirdSlice.map(pageNumber => (
                        <button
                            key={pageNumber}
                            className={
                                currentPage == pageNumber ? "active" : ""
                            }
                            onClick={() => setCurrentPage(pageNumber)}
                        >
                            {pageNumber}
                        </button>
                    ))}
                </>
            )}

            <button
                onClick={() =>
                    currentPage < totalPage && setCurrentPage(currentPage + 1)
                }
            >
                &raquo;
            </button>
        </div>
    );
}

export default CustomPagination;
