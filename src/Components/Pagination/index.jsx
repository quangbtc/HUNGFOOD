import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    gap: 5px;
    button {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #fff;
    }
`;

const ITEMS_PER_PAGE = 10;

function Pagination({ items, onPageChange, currentPage, totalPages }) {
    // const [currentPage, setCurrentPage] = useState(1);
    // const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

    const handlePageChange = (newPage) => {
        onPageChange(newPage);
    };

    return (
        <Container>
            <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    onClick={() => handlePageChange(i + 1)}
                    disabled={i + 1 === currentPage}
                    style={{
                        backgroundColor: i + 1 === currentPage ? '#ddd' : '#fff',
                    }}
                >
                    {i + 1}
                </button>
            ))}
            <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>
        </Container>
    );
}

export default Pagination;
