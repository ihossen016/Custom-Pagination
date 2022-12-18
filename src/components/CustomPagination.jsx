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
        if (currentPage - 3 <= 2) {
            firstSlice = [...pageNumbers.slice(0, 6)];
        } else if (currentPage + 2 >= totalPage) {
            firstSlice = [];
            thirdSlice = [...pageNumbers.slice(totalPage - 5, totalPage)];
        } else if (currentPage > 5 && currentPage + 2 < totalPage) {
            thirdSlice = [];
            secondSlice = [
                ...pageNumbers.slice(currentPage - 3, currentPage + 2),
            ];
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
                    <button>...</button>
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
                    <button>...</button>
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
                    <button>...</button>
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
                    <button>...</button>
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
                // href={
                //     currentPage >= totalPage
                //         ? "javascript:void(0)"
                //         : `javascript:void(0)`
                // }
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
